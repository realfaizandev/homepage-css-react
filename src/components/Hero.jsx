import amazonImg1 from "../assets/Amazon_Img_1.jpg";
import totalSalesImg from "../assets/Total_Sales_Img.jpg";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Create an Amazon selling account</h1>
                <div className="hero-cta">
                    <a href="#" className="cta-primary">Sign up</a>
                    <p className="cta-subtext">Get 10% back on your first $50,000 in branded sales</p>
                </div>
            </div>
            <div className="hero-image">
                <img src={amazonImg1} alt="Hero Image"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                <div className="nested-hero-image">
                    <img src={totalSalesImg} alt="Sales Chart" />
                </div>
            </div>
        </section>
    );
}