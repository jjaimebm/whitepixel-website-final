import { Header } from "@components/header";
import { Hero } from "@components/hero";
import { SocialProof } from "@components/social-proof";
import { FeaturesSection } from "@components/features-section";
import { Testimonials } from "@components/testimonials";
import { FAQ } from "@components/faq";
import { Footer } from "@components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <SocialProof />
      <FeaturesSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
