import './Experience.css';
import ExperienceCard from './ExperienceCard';

const experienceData = [
    {
        title: 'Junior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: '2024 - Present',
        isCurrent: true,
        responsibilities: [
            'Developed and maintained web applications using React and Node.js',
            'Collaborated with cross-functional teams to deliver features on time',
            'Implemented RESTful APIs and integrated third-party services',
            'Participated in code reviews and improved application performance',
        ],
    },
    {
        title: 'Frontend Developer Intern',
        company: 'Digital Innovations',
        period: '2023 - 2024',
        isCurrent: false,
        responsibilities: [
            'Built responsive user interfaces using React and modern CSS',
            'Worked closely with designers to implement pixel-perfect designs',
            'Optimized website performance and improved load times by 40%',
            'Gained experience with version control using Git and GitHub',
        ],
    },
];

const Experience = () => {
    return (
        <section className="py-5" id="experience">
            <div className="container">
                <h2 className="text-center display-5 mb-5">Experience</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {experienceData.map((exp, index) => (
                            <ExperienceCard key={index} {...exp} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
