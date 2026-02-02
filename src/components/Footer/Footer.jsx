import './Footer.css';

const socialLinks = [
    { label: 'LinkedIn', url: '#' },
    { label: 'GitHub', url: '#' },
    { label: 'Twitter', url: '#' },
];

const Footer = ({ name, email }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row g-4 mb-4">
                    <div className="col-md-4">
                        <h3 className="h5 text-primary mb-3">Contact</h3>
                        <p className="mb-2">Email: {email}</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="h5 text-primary mb-3">Connect</h3>
                        <div className="d-flex gap-2 flex-wrap">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="btn btn-sm btn-outline-light"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className="h5 text-primary mb-3">Location</h3>
                        <p>Available for remote work</p>
                    </div>
                </div>
                <div className="border-top border-secondary pt-4 text-center">
                    <p className="text-muted mb-0">
                        &copy; {currentYear} {name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
