import GalleryPage from '@/Components/Gallery/Gallery';

export const metadata = {
    title: 'Gallery - Md Ashikur Rahman',
    description: 'A collection of our institutional images showcasing our campus, events, and activities.',
};


const page = () => {
    return (
        <div>
            <GalleryPage />
        </div>
    );
};

export default page;