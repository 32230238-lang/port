const Section = ({ id, title, children, className = '', bgLight = false }) => {
    return (
        <section id={id} className={`py-5 ${bgLight ? 'bg-light' : ''} ${className}`}>
            <div className="container">
                {title && <h2 className="text-center display-5 mb-5">{title}</h2>}
                {children}
            </div>
        </section>
    );
};

export default Section;
