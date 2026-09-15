import React from 'react';
import { JioHeroSlider } from '@/components/home/JioHeroSlider';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { CoverageCheckerWidget } from '@/components/home/CoverageCheckerWidget';
import { PlansSection } from '@/components/home/PlansSection';
import { LeadCaptureSection } from '@/components/home/LeadCaptureSection';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { CustomerCareBanner } from '@/components/home/CustomerCareBanner';
import { FaqSection } from '@/components/home/FaqSection';
import { CrossBrandGrid } from '@/components/home/CrossBrandGrid';

export default function HomePage() {
  return (
    <>
      {/* 0. Jio-Style Hero Slider Experiment */}
      <JioHeroSlider />

      {/* 1. Campaign Hero Carousel */}
      <HeroCarousel />

      {/* 2. Coverage Address Checker Widget */}
      <CoverageCheckerWidget />

      {/* 3. Broadband Plans with Contract Toggles & Add-ons */}
      <PlansSection />

      {/* 4. "Need Help Signing Up Let's Talk" Lead Capture */}
      <LeadCaptureSection />

      {/* 5. "Our Home Internet Is Just Better" Value Propositions */}
      <WhyUsSection />

      {/* 6. "Always Here to Help" Customer Care Banner */}
      <CustomerCareBanner />

      {/* 7. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 8. "Connecting More Than Just Homes" Cross-Brand Sister Segments */}
      <CrossBrandGrid />
    </>
  );
}
