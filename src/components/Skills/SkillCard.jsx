const SkillCard = ({ title, skills }) => {
    return (
        <div className="card h-100 shadow-sm hover-card">
            <div className="card-body">
                <h3 className="card-title h4 text-primary mb-3">{title}</h3>
                <ul className="list-unstyled">
                    {skills.map((skill, index) => (
                        <li
                            key={index}
                            className={`py-2 ${index < skills.length - 1 ? 'border-bottom' : ''}`}
                        >
                            <span className="text-primary fw-bold me-2">✓</span>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillCard;
