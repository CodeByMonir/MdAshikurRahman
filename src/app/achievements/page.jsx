import Achievements from '@/Components/Achievements/achievements';

export const metadata = {
    title: 'Achievements',
    description: 'Explore my achievements and accomplishments as a computer engineer.',
};

const page = () => {
    return (
        <div>
            <Achievements />
        </div>
    );
};

export default page;