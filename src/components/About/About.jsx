import './About.css';

const About = () => {
    return (
        <section className="py-5" id="about">
            <div className="container">
                <h2 className="text-center display-5 mb-5">About Me</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="lead text-muted mb-4">
                            I'm a passionate junior full stack developer dedicated to creating
                            efficient and user-friendly web applications. I enjoy learning new
                            technologies and solving complex problems.
                        </p>
                        <p className="lead text-muted mb-4">
                            Currently expanding my skills in modern web development frameworks
                            and best practices. I'm always open to new opportunities and
                            collaborations.
                        </p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap mt-5">
                            <a href="#contact" className="btn btn-primary btn-lg px-5">
                                Get In Touch
                            </a>
                            <button className="btn btn-outline-primary btn-lg px-5">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
