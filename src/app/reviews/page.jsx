import HeroBackground from "@/Components/Home/HeroBG";
import Reviews from "@/Components/Reviews/Reviews";

export const metadata = {
    title: 'Reviews',
    description: 'What People Say About Ashikur Rahman',
};
const page = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <HeroBackground />
            <Reviews />
        </div>
    );
};

export default page;