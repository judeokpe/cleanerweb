"use client"

import Link from 'next/link';
import Button from './components/ui/Button';
import Hero from './components/Main/Hero';
import Service from './components/Main/Service';
import Offer from './components/Main/What-we-offer';
import WhyChooseUs from './components/Main/why-choose-us';
import QuotationForm from './components/Main/enquiry';
import WalkThrough from './components/Main/walk-through';
import WhatClientSay from './components/Main/what-client-say';
import {  useSettings } from './context/SettingsContext';
import AutomobileServices from './components/Main/automobile-services';





export default function Home() {
  const { websiteName, logoURL } = useSettings(); 
  return (
    <div className="relative isolate mx-auto max-w-6xl ">
      {/* Hero Section */}
     <Hero  websiteName={websiteName}/>

      {/* Services Preview Section */}
    <Service websiteName={websiteName}/>
    <section id="services">
    <Offer websiteName={websiteName}/>
    </section>
    <AutomobileServices />
    <WhyChooseUs websiteName={websiteName}/>
    <WalkThrough />
    <WhatClientSay />
    <section id="quotation">
    <QuotationForm />
    </section>
   
    </div>
  );
}