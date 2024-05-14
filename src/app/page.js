import Acordion from "@/components/Acordion";
import ContactForm from "@/components/ContactForm";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hr from "@/components/Hr";

export default function Home() {
  return (
    <>
      <Hero />
      <Content />
      <Acordion />
      <Feature />
      <Hr />
      <ContactForm />
      <Footer />
    </>
  );
}
