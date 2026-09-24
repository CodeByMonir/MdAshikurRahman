import ContactSection from '@/Components/Contact/Contact';


export const metadata = {
    title: 'Contacts',
    description: 'For any inquiries, collaborations, or just to say hello, feel free to reach out to me through the contact form or via email.',
};

const page = () => {
    return (
        <div>
            <ContactSection />
        </div>
    );
};

export default page;