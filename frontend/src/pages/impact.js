import React from "react";
import "../styles/impact.css"; 
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ImpactPage = () => {
    return (
        <div className="impact-container">
            <header className="hero">
                <h1>Make a Difference, One Donation at a Time</h1>
                <p>Your support helps provide food, education, and medical care to those in need.</p>
                <button className="cta-button">Donate Now</button>
            </header>
            <NavBar/>

            <section className="impact-section">
                <h2>Our Impact</h2>
                <p>With your generosity, we have been able to change lives and bring hope to communities worldwide.</p>
                <div className="impact-grid">
                    <ImpactItem icon="🍲" title="Meals Provided" description="Over 5,000 meals served to families facing hunger every month." />
                    <ImpactItem icon="📚" title="Education for All" description="Empowering 1,200 children with access to quality education and school supplies." />
                    <ImpactItem icon="🏥" title="Medical Assistance" description="800+ free medical treatments given to those who cannot afford healthcare." />
                    <ImpactItem icon="❤️" title="Community Support" description="Helping thousands with shelter, clean water, and essential resources." />
                </div>
            </section>
            <Footer/>

            <section className="bottom-section">
                <h2>Join Us in Making a Difference</h2>
                <p>Your donation, big or small, creates real impact. Together, we can build a brighter future.</p>
            </section>
        </div>
    );
};

const ImpactItem = ({ icon, title, description }) => {
    return (
        <div className="impact-item">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="more-button">Learn More</button>
        </div>
    );
};

export default ImpactPage;
