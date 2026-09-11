import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to My Personal Website
      </h1>
      <p className="text-center mt-4">
        This is the homepage of Md. Ashikur Rahman, a Computer Engineer and
        Lecturer at the Department of ICT, Nayabazar University, Bangladesh.
      </p>
      <div className="flex justify-center mt-6 shadow-2xl">
        <Image
          src="/profile.png"
          alt="Md. Ashikur Rahman"
          width={200}
          height={200}
          className="rounded-full shadow-2xl"
        />
      </div>
      <div className="flex justify-center mt-6 shadow-2xl">
        <Image
          src="/SelectedLogo.png"
          alt="Md. Ashikur Rahman"
          width={200}
          height={200}
          className="rounded-full shadow-2xl"
        />
      </div>
      <div className="flex justify-center mt-6 shadow-2xl">
        <Image
          src="/MainLogo-Photoroom2.png"
          alt="Md. Ashikur Rahman"
          width={200}
          height={200}
          className="rounded-full shadow-2xl"
        />
      </div>
    </div>
  );
}
