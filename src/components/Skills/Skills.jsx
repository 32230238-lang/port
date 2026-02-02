import './Skills.css';
import SkillCard from './SkillCard';

const skillsData = [
    {
        title: 'Frontend',
        skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive Design', 'Vite'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Database Management', 'Authentication'],
    },
    {
        title: 'Tools & Others',
        skills: ['Git & GitHub', 'VS Code', 'npm/yarn', 'Problem Solving', 'Team Collaboration'],
    },
];

const Skills = () => {
    return (
        <section className="py-5 bg-light" id="skills">
            <div className="container">
                <h2 className="text-center display-5 mb-5">My Skills</h2>
                <div className="row g-4">
                    {skillsData.map((category, index) => (
                        <div className="col-md-4" key={index}>
                            <SkillCard title={category.title} skills={category.skills} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
