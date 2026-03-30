import amazonImg3 from "../assets/Amazon_Img_3.jpg";
import amazonPrimeImg from "../assets/Amazon_Prime_Img.jpg";

export default function CtaSection() {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2>Start selling with Amazon</h2>
                <p>Try selling in a store that uses high-impact tools and programs.</p>
                <div className="hero-cta">
                    <a href="#" className="cta-primary">Sign up</a>
                    <p className="cta-subtext">Get 10% back on your first $50,000 in branded sales</p>
                </div>
            </div>
            <div className="cta-image">
                <img src={amazonImg3} alt="CTA Image"
                    style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                <div className="nested-cta-image">
                    <img src={amazonPrimeImg} alt="Prime Badge" />
                </div>
            </div>
        </section>
    );
}