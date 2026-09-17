import React from 'react';
import Hero from './Hero';
import CampusSection from './CampusSection';
import InspiringSection from './InspiringSection';
import TeacherSection from './TeacherSection';
import ImageGallery from './ImageGallery';

const HomeContainer = () => {
    return (
        <div>
            <Hero />
            <CampusSection />
            <InspiringSection />
            <TeacherSection />
            <ImageGallery />
        </div>
    );
};

export default HomeContainer;