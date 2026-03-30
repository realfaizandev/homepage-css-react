import amazonImg1 from "../assets/Amazon_Img_1.jpg";
import amazonImg2 from "../assets/Amazon_Img_2.jpg";

export default function WhySection() {
    return (
        <section className="why-section">
            <div className="why-container">
                <div className="why-header">
                    <h2>Why create an Amazon selling account?</h2>
                    <p>There are so many reasons to sell with Amazon. Here are just a few:</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🛍️</div>
                        <h3>Sell in a store more consumers trust</h3>
                        <p>Amazon is the most visited store on the web and known for great customer service.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <h3>Sell with tools and programs that help you grow</h3>
                        <p>We provide every Professional seller with a set toolkit for listing, pricing, and promoting your products on Amazon.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Sell with high-impact, optional services</h3>
                        <p>We provide sellers of all sizes with a range of powerful tools.</p>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="testimonial">
                        <div className="testimonial-company">DIASPORA CO.</div>
                        <p className="testimonial-text">"I trusted that there was a marketplace out there that cared, and to whom we mattered."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <img src={amazonImg1} alt="Sana Javeri Kadri" />
                            </div>
                            <div className="author-info">
                                <div className="author-name">Sana Javeri Kadri</div>
                                <div className="author-title">Founder & CEO Diaspora Co.</div>
                            </div>
                        </div>
                        <a href="#" className="view-story">See Sana's story</a>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-company">NESTED BEAN</div>
                        <p className="testimonial-text">"Challenges are a sign that something fundamental needs to change."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <img src={amazonImg2} alt="Manasi Gangan" />
                            </div>
                            <div className="author-info">
                                <div className="author-name">Manasi Gangan</div>
                                <div className="author-title">Founder</div>
                            </div>
                        </div>
                        <a href="#" className="view-story">See Manasi's story</a>
                    </div>
                </div>
            </div>
        </section>
    );
}