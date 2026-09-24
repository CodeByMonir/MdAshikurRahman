import HeroBackground from "@/Components/Home/HeroBG";
import AddReview from "@/Components/Reviews/AddReview";

export const metadata = {
    title: 'Add Review',
    description: 'What has been your experience with Ashikur Rahman?',
};
const page = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <HeroBackground />
            <AddReview />
        </div>
    );
};

export default page;