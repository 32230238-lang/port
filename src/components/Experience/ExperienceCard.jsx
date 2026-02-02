const ExperienceCard = ({ title, company, period, isCurrent, responsibilities }) => {
    return (
        <div className="card mb-4 shadow-sm hover-card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <h5 className="card-title mb-1">{title}</h5>
                        <h6 className="text-muted">{company}</h6>
                    </div>
                    <span className={`badge bg-${isCurrent ? 'primary' : 'secondary'}`}>
                        {period}
                    </span>
                </div>
                <ul className="mt-3">
                    {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
