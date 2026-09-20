import CampusSection from './CampusSection';
import GalleryMosaic from './GalleryMosaic';
import GalleryShowcase from './GalleryShowcase';
import Hero from './Hero';
import InspiringSection from './InspiringSection';
import TeacherSection from './TeacherSection';
import TravelParallaxExperience from './TravelParallaxExperience';

const HomeContainer = () => {
    return (
        <div>
            <Hero />
            <CampusSection />
            <InspiringSection />
            <TeacherSection />
            <GalleryShowcase />
            <GalleryMosaic />
            <TravelParallaxExperience />
        </div>
    );
};

export default HomeContainer;