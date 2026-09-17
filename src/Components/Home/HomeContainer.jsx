import React from 'react';
import Hero from './Hero';
import CampusSection from './CampusSection';
import InspiringSection from './InspiringSection';
import TeacherSection from './TeacherSection';

const HomeContainer = () => {
    return (
        <div>
            <Hero />
            <CampusSection />
            <InspiringSection />
            <TeacherSection />
        </div>
    );
};

export default HomeContainer;