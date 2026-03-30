import amazonImg2 from "../assets/Amazon_Img_2.jpg";

export default function Incentives() {
    return (
        <section className="incentives">
            <div className="incentives-image">
                <img src={amazonImg2} alt="Incentives Image"
                    style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                <div className="badge">$500 off shipments</div>
                <div className="badge-secondary">10% on branded sales</div>
            </div>
            <div className="incentives-content">
                <span className="incentive-label">🎁 New Seller Incentives</span>
                <h2>Get started with $50,000 in incentives</h2>
                <p>Ready to sell with Amazon? As a new seller, you can take advantage of a series of incentives:</p>
                <ul className="benefits-list">
                    <li>10% back on your first $50,000 in branded sales. Plus 5% back through year one when you hit $1,000,000.</li>
                    <li>$100 off shipments into the Amazon Fulfillment network using Amazon Partnered Carrier program.</li>
                    <li>5% credit on up to $15,000 in eligible auto-enrolment in the FBA New Selection program.</li>
                    <li>$50 credit in credits (sponsored Products) which is experienced brand builders use.</li>
                </ul>
                <a href="#" className="link-arrow">See all incentives →</a>
            </div>
        </section>
    );
}