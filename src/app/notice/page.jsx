import HeroBackground from "@/Components/Home/HeroBG";
import NoticePage from "@/Components/Notice/Notice";

export const metadata = {
    title: 'Notice',
    description: 'Stay updated with the latest notices and announcements from our institution. Check here for important information regarding classes, exams, workshops, and more.',
};


const page = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <NoticePage />

            <HeroBackground />
        </div>
    );
};

export default page;