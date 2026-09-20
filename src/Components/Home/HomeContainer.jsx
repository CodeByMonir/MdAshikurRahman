import CampusSection from './CampusSection';
import GalleryMosaic from './GalleryMosaic';
import GalleryShowcase from './GalleryShowcase';
import Hero from './Hero';
import InspiringSection from './InspiringSection';
import TeacherSection from './TeacherSection';

const HomeContainer = () => {
    return (
        <div>
            <Hero />
            <CampusSection />
            <InspiringSection />
            <TeacherSection />
            <GalleryShowcase />
            <GalleryMosaic />
        </div>
    );
};

export default HomeContainer;