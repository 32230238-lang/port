import './Projects.css';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        title: 'E-Commerce Platform',
        description:
            'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.',
        tags: [
            { label: 'React', variant: 'primary' },
            { label: 'Node.js', variant: 'success' },
            { label: 'MongoDB', variant: 'info' },
        ],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'Task Management App',
        description:
            'Collaborative task manager with real-time updates. Built with React, Express, and WebSockets for instant communication.',
        tags: [
            { label: 'React', variant: 'primary' },
            { label: 'WebSocket', variant: 'warning' },
            { label: 'Express', variant: 'dark' },
        ],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'Weather Dashboard',
        description:
            'Interactive weather application using OpenWeather API. Features location search, forecasts, and responsive design.',
        tags: [
            { label: 'React', variant: 'primary' },
            { label: 'API', variant: 'secondary' },
            { label: 'Bootstrap', variant: 'info' },
        ],
        demoUrl: '#',
        githubUrl: '#',
    },
];

const Projects = () => {
    return (
        <section className="py-5 bg-light" id="projects">
            <div className="container">
                <h2 className="text-center display-5 mb-5">Featured Projects</h2>
                <div className="row g-4">
                    {projectsData.map((project, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
