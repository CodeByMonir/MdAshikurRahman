import CampusSection from './CampusSection';
import GalleryMosaic from './GalleryMosaic';
import GalleryShowcase from './GalleryShowcase';
import Hero from './Hero';
import InspiringSection from './InspiringSection';
import NoticeMarquee from './NoticeMarquee';
import TestimonialsSection from './Reviews';
import TeacherSection from './TeacherSection';
import TravelParallaxExperience from './TravelParallaxExperience';

const HomeContainer = () => {
    return (
        <div>
            <NoticeMarquee />
            <Hero />
            <CampusSection />
            <InspiringSection />
            <TeacherSection />
            <GalleryShowcase />
            <GalleryMosaic />
            <TravelParallaxExperience />
            <TestimonialsSection />
        </div>
    );
};

export default HomeContainer;