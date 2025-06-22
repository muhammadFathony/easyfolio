import PhotoProfile from "../../assets/img/profile-square-2.webp"
import signature from "../../assets/img/signature-1.webp"
import portofolio1 from "../../assets/img/portfolio/portfolio-1.webp"
import portofolio2 from "../../assets/img/portfolio/portfolio-2.webp"
import portofolio4 from "../../assets/img/portfolio/portfolio-4.webp"
import portofolio5 from "../../assets/img/portfolio/portfolio-5.webp"
import portofolio7 from "../../assets/img/portfolio/portfolio-7.webp"
import portofolio8 from "../../assets/img/portfolio/portfolio-8.webp"
import portofolio10 from "../../assets/img/portfolio/portfolio-10.webp"
import portofolio11 from "../../assets/img/portfolio/portfolio-11.webp"

import HeroSection from "../../features/hero"
import AboutSection from "../../features/about"
import SkillsSection from "../../features/skills"
import ResumeSection from "../../features/resume"
import PortofolioSection from "../../features/portofolio"
import ContactSection from "../../features/contact"
const personalData = [
    {
        label: 'Name',
        value: 'Eliot Johnson'
    },
    {
        label: 'Phone',
        value: '+123 456 7890'
    },
    {
        label: 'Age',
        value: '26 Years'
    },
    {
        label: 'Email',
        value: 'email@example.com'
    },
    {
        label: 'Occupation',
        value: 'Lorem Engineer'
    },
    {
        label: 'Nationality',
        value: 'Ipsum'
    }
]
const skillData = [
    {
        label: 'HTML',
        value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        percent: 90
    },
    {
        label: 'CSS',
        value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        percent: 90
    },
    {
        label: 'JavaScript',
        value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        percent: 80
    },
    {
        label: 'Photoshop',
        value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        percent: 70
    }
]
const timelineData = [
    {
        label: 'Work Experience',
        description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.',
        detail: [
            {
                label: 'Etiam Industries',
                dateRange: 'Jun, 2023 - Current',
                job: 'Project Lead',
                jobDetail: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila',
                list: []
            },
            {
                label: 'Nullam Corp',
                dateRange: '2019 - 2023',
                job: 'Senior graphic design specialist',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus',
                list: [
                    'Lead in the design, development, and implementation of the graphic, layout, and production communication materials',
                    'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
                    'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design',
                    'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000'
                ]
            },
            {
                label: 'Etiam Stepping Stone Ltd.',
                dateRange: '2015-2019',
                job: 'Graphic design specialist',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.',
                list: []
            }
        ]
    },
    {
        label: 'My Education',
        description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.',
        detail: [
            {
                label: 'Vestibulum University',
                dateRange: '2017-2019',
                job: 'Diploma in Consequat',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.',
                list: []
            },
            {
                label: 'Nullam Corp',
                dateRange: '2019 - 2023',
                job: 'Master of Fine Arts & Graphic Design',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.',
                list: []
            },
            {
                label: 'Vestibulum University',
                dateRange: '2015-2019',
                job: 'Bachelor of Fine Arts & Graphic Design',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.',
                list: []
            }
        ]
    }

]
const portofolioData = [
    {
        title: 'Web Design',
        subtitle: 'Modern Dashboard Interface',
        description: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.',
        img: portofolio1,
        category: 'web'
    },
    {
        title: 'Graphics',
        subtitle: 'Creative Brand Identity',
        description: 'Vestibulum id ligula porta felis euismod semper at vulputate.',
        img: portofolio2,
        category: 'graphics'
    },
    {
        title: 'Branding',
        subtitle: 'Luxury Brand Package',
        description: 'Aenean lacinia bibendum nulla sed consectetur elit.',
        img: portofolio4,
        category: 'brand'
    },
    {
        title: 'Motion',
        subtitle: 'Product Animation Reel',
        description: 'Donec ullamcorper nulla non metus auctor fringilla dapibus.',
        img: portofolio7,
        category: 'motion'
    },
    {
        title: 'Graphics',
        subtitle: 'Digital Art Collection',
        description: 'Cras mattis consectetur purus sit amet fermentum.',
        img: portofolio5,
        category: 'graphics'
    },
    {
        title: 'Web Design',
        subtitle: 'E-commerce Platform',
        description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
        img: portofolio8,
        category: 'web'
    }
]
const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection personalData={personalData} PhotoProfile={PhotoProfile} signature={signature} />
            <SkillsSection data={skillData} />
            <ResumeSection data={timelineData} />
            <PortofolioSection data={portofolioData} />
            <ContactSection />
        </>
    )
}
export default Home