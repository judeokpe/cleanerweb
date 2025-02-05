import Link from 'next/link';
import Button from './components/ui/Button';
import Hero from './components/Main/Hero';
import Service from './components/Main/Service';
import Offer from './components/Main/What-we-offer';
import WhyChooseUs from './components/Main/why-choose-us';




export default function Home() {
  return (
    <div className="relative isolate mx-auto max-w-6xl ">
      {/* Hero Section */}
     <Hero />

      {/* Services Preview Section */}
    <Service/>
    <Offer/>
    <WhyChooseUs />
    </div>
  );
}