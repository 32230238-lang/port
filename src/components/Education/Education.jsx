import './Education.css';

const educationData = {
    degree: 'Bachelor of Computer Science',
    institution: 'University Name',
    period: '2020 - 2024',
    description: 'Focused on software engineering, web development, and database systems.',
};

const certificationsData = [
    {
        title: 'React - The Complete Guide',
        issuer: 'Udemy',
        year: '2024',
    },
    {
        title: 'Node.js Developer Certification',
        issuer: 'Coursera',
        year: '2023',
    },
    {
        title: 'JavaScript Algorithms & Data Structures',
        issuer: 'freeCodeCamp',
        year: '2023',
    },
];

const Education = () => {
    return (
        <section className="py-5 bg-light" id="education">
            <div className="container">
                <h2 className="text-center display-5 mb-5">Education & Certifications</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm hover-card">
                            <div className="card-body">
                                <h5 className="card-title text-primary mb-3">📚 Education</h5>
                                <div className="mb-4">
                                    <h6 className="fw-bold">{educationData.degree}</h6>
                                    <p className="text-muted mb-1">{educationData.institution}</p>
                                    <p className="text-muted small">{educationData.period}</p>
                                    <p>{educationData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm hover-card">
                            <div className="card-body">
                                <h5 className="card-title text-primary mb-3">🏆 Certifications</h5>
                                <ul className="list-unstyled">
                                    {certificationsData.map((cert, index) => (
                                        <li key={index} className="mb-3">
                                            <h6 className="mb-1">{cert.title}</h6>
                                            <p className="text-muted small mb-0">
                                                {cert.issuer} • {cert.year}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
