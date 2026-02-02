import './Card.css';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <div className={`card h-100 shadow-sm ${hover ? 'hover-card' : ''} ${className}`}>
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Card;
