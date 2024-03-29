import { Link } from "react-router-dom";

import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget">
                            <img src="/img/logo.png" alt="about" />
                            <p>7th Harley Place, London W1G 8LZ United Kingdom</p>
                            <h6><span>Call us: </span>(+880) 111 222 3456</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget">
                            <h4>Legal</h4>
                            <ul>
                                <li><Link to="/TermsOfService">Terms of Service</Link></li>
                                <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget">
                            <h4>Account</h4>
                            <ul>
                                <li><Link to="/profile">My Account</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </footer>
    );
}