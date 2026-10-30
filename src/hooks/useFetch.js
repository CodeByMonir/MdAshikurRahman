"use client";

import { useState, useEffect, useRef } from "react";

export default function useFetch(url, maxRetries = 3) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Prevent re-fetching if already successfully fetched
    if (hasFetched.current) return;

    let isMounted = true;

    const fetchDataWithRetry = async (attempt = 1) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (isMounted) {
          setData(result);
          setIsLoading(false);
          hasFetched.current = true; // Lock successful fetch
        }
      } catch (err) {
        if (attempt < maxRetries) {
          console.warn(
            `Fetch failed for ${url}. Retrying attempt ${attempt + 1} of ${maxRetries}...`,
          );
          setTimeout(() => {
            if (isMounted) {
              fetchDataWithRetry(attempt + 1);
            }
          }, 1000 * attempt); // Linear backoff retry delay
        } else {
          if (isMounted) {
            setError(err.message || "Failed to load data after 3 attempts.");
            setIsLoading(false);
          }
        }
      }
    };

    fetchDataWithRetry();

    return () => {
      isMounted = false;
    };
  }, [url, maxRetries]);

  return { data, isLoading, error };
}
