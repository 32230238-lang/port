import './Hero.css';

const Hero = ({ name, title, subtitle, profileImage }) => {
    return (
        <section className="hero-section min-vh-100 d-flex align-items-center justify-content-center text-white">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-auto">
                        <img
                            src={profileImage}
                            alt={name}
                            className="profile-image rounded-circle border border-white border-5 shadow"
                        />
                    </div>
                    <div className="col-auto text-start">
                        <h1 className="display-3 fw-bold mb-3">{name}</h1>
                        <h2 className="h2 fw-light mb-3">{title}</h2>
                        <p className="lead">{subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
