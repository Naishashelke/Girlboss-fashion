import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewArrivals from "@/components/NewArrivals";
import WhyChooseUs from "@/components/WhyChooseUs";
import Lookbook from "@/components/Lookbook";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <NewArrivals />
        <WhyChooseUs />
        <Lookbook />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
    </PageTransition>
  );
}
