import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Features } from "@/components/features-section";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
