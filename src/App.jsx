import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatBanner from "./components/StatBanner";
import Incentives from "./components/Incentives";
import WhySection from "./components/WhySection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <StatBanner />
      <Incentives />
      <WhySection />
      <CtaSection />
      <Footer />
    </>
  );
}