import React from 'react';
import Hero from '../components/home/Hero';
import QuickBooking from '../components/home/QuickBooking';
import MarqueeBar from '../components/home/MarqueeBar';
import ServiceShowcase from '../components/home/ServiceShowcase';
import SignatureTreatments from '../components/home/SignatureTreatments';
import WhyChooseUs from '../components/home/WhyChooseUs';
import BridalShowcase from '../components/home/BridalShowcase';
import HomeServiceExperience from '../components/home/HomeServiceExperience';
import GalleryPreview from '../components/home/GalleryPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqPreview from '../components/home/FaqPreview';
import BookingCta from '../components/home/BookingCta';

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <QuickBooking />
      <div className="pt-12 sm:pt-16">
        <MarqueeBar />
      </div>
      <ServiceShowcase />
      <SignatureTreatments />
      <WhyChooseUs />
      <BridalShowcase />
      <HomeServiceExperience />
      <GalleryPreview />
      <TestimonialsSection />
      <FaqPreview />
      <BookingCta />
    </div>
  );
}
