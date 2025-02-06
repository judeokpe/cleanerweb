import Link from 'next/link';
import Button from './components/ui/Button';
import Hero from './components/Main/Hero';
import Service from './components/Main/Service';
import Offer from './components/Main/What-we-offer';
import WhyChooseUs from './components/Main/why-choose-us';
import QuotationForm from './components/Main/enquiry';
import WalkThrough from './components/Main/walk-through';
import WhatClientSay from './components/Main/what-client-say';




export default function Home() {
  return (
    <div className="relative isolate mx-auto max-w-6xl ">
      {/* Hero Section */}
     <Hero />

      {/* Services Preview Section */}
    <Service/>
    <section id="services">
    <Offer/>
    </section>
 
    <WhyChooseUs />
    <WalkThrough />
    <WhatClientSay />
    <section id="quotation">
    <QuotationForm />
    </section>
   
    </div>
  );
}