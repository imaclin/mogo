// src/lib/content.ts

export const SITE = {
  name: 'Mogo Auto Services',
  tagline: 'Your one-stop-shop for all your auto repair needs.',
  phone: '(440) 871-4949',
  phoneHref: 'tel:+14408714949',
  email: 'info@mogoautoservices.com',
  emailHref: 'mailto:info@mogoautoservices.com',
  address: '27303 Detroit Rd, Westlake, OH 44145',
  mapsUrl: 'https://maps.google.com/?q=27303+Detroit+Rd+Westlake+OH+44145',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.123!2d-81.917!3d41.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f4b2b2b2b2b3%3A0x0!2s27303+Detroit+Rd%2C+Westlake%2C+OH+44145!5e0!3m2!1sen!2sus!4v1',
  hours: [
    { day: 'Monday - Friday', time: '8:00 am - 5:00 pm' },
    { day: 'Saturday', time: '9:00 am - 1:00 pm' },
    { day: 'Sunday', time: 'Closed' },
  ],
  rating: '4.7',
  reviewCount: '215',
} as const;

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: 'Wrench',
    title: 'Discount Muffler & Brake',
    description: 'Same-day muffler and exhaust repair using quality parts. Our technicians diagnose the problem and get you back on the road fast.',
  },
  {
    icon: 'CarSimple',
    title: 'Car Checks & Diagnostics',
    description: 'Comprehensive vehicle inspections using state-of-the-art diagnostic equipment. Catch problems early before they become costly repairs.',
  },
  {
    icon: 'CircleWavy',
    title: 'Tire Change & Replacement',
    description: 'Quick and reliable tire changes and replacements. Affordable rates, top-notch service, back on the road in no time.',
  },
  {
    icon: 'Drop',
    title: 'Oil & Brake Service',
    description: "Fast, efficient oil changes and brake repairs at prices that won't break the bank. Quality work every time.",
  },
  {
    icon: 'ArrowsCounterClockwise',
    title: 'Steering & Suspension',
    description: "Restore your ride's handling and comfort. Suspension repairs reduce wear on tires and keep you safely in control.",
  },
  {
    icon: 'Lightning',
    title: 'Battery Change',
    description: "Don't get stranded with a dead battery. Fast, affordable battery replacement using only the highest quality parts.",
  },
  {
    icon: 'Siren',
    title: 'Breakdown Service',
    description: "When you need help most, we're here. Quick response breakdown services to get you moving again without the stress.",
  },
  {
    icon: 'Gauge',
    title: 'Shocks & Struts',
    description: "Worn shocks and struts affect your safety and comfort. Our experts restore your vehicle's ride quality and stability.",
  },
  {
    icon: 'Plug',
    title: 'Starters & Alternators',
    description: "Electrical system issues diagnosed and repaired quickly. We keep your vehicle's charging and starting system running right.",
  },
  {
    icon: 'Thermometer',
    title: 'Cooling & Heating Service',
    description: 'Keep your engine at the right temperature. Cooling system repairs, heater service, and coolant flushes done right.',
  },
  {
    icon: 'Shield',
    title: 'Preventive Maintenance',
    description: 'Regular maintenance extends the life of your vehicle. We help you stay ahead of issues with scheduled service plans.',
  },
  {
    icon: 'Wrench',
    title: 'Exhaust & Mufflers',
    description: 'Complete exhaust system repairs and replacements. Quiet your ride and keep emissions in check with expert exhaust service.',
  },
];

export type Testimonial = {
  name: string;
  quote: string;
  stars: number;
  source: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Scott',
    quote: 'I have been coming here for over 10 years. Great service, fair prices, and excellent work. The staff is always helpful and willing to go out of their way to get the job done. I am a very happy customer.',
    stars: 5,
    source: 'Insider Pages',
  },
  {
    name: 'Sarah',
    quote: 'George is very efficient and very pleasant to work with. My experience was wonderful. I trust him implicitly. Thank you again for the wonderful work - I look forward to our next service.',
    stars: 5,
    source: 'Insider Pages',
  },
  {
    name: 'Ellis',
    quote: "Always great advice and speedy service. Reasonable pricing. They're honest, courteous, and always fix it right the first time.",
    stars: 5,
    source: 'Insider Pages',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];
