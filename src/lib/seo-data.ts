// src/lib/seo-data.ts
// Programmatic SEO data structures for location-based pages

export interface ServiceArea {
  slug: string;
  name: string;
  state: string;
  zipCodes: string[];
  nearbyLandmarks?: string[];
  distanceFromShop?: number; // in miles
}

export interface SEOService {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  contentTemplate: (city: string, state: string) => string;
  faqs: { question: string; answer: string }[];
}

// Service Areas - Westlake and surrounding cities
export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'westlake-oh',
    name: 'Westlake',
    state: 'OH',
    zipCodes: ['44145'],
    nearbyLandmarks: ['Crocker Park', 'Westlake High School', 'Clague Park'],
    distanceFromShop: 0,
  },
  {
    slug: 'bay-village-oh',
    name: 'Bay Village',
    state: 'OH',
    zipCodes: ['44140'],
    nearbyLandmarks: ['Huntington Beach', 'Bay Village City Hall', 'Bradley Road'],
    distanceFromShop: 3.2,
  },
  {
    slug: 'rocky-river-oh',
    name: 'Rocky River',
    state: 'OH',
    zipCodes: ['44116'],
    nearbyLandmarks: ['Rocky River Reservation', 'Downtown Rocky River', 'Lake Erie'],
    distanceFromShop: 4.1,
  },
  {
    slug: 'lakewood-oh',
    name: 'Lakewood',
    state: 'OH',
    zipCodes: ['44107'],
    nearbyLandmarks: ['Lakewood Park', 'Madison Avenue', 'Detroit Avenue'],
    distanceFromShop: 5.8,
  },
  {
    slug: 'fairview-park-oh',
    name: 'Fairview Park',
    state: 'OH',
    zipCodes: ['44126'],
    nearbyLandmarks: ['Fairview Hospital', 'Center Ridge Road', 'Garnet Elementary'],
    distanceFromShop: 2.4,
  },
  {
    slug: 'north-olmsted-oh',
    name: 'North Olmsted',
    state: 'OH',
    zipCodes: ['44136', '44070'],
    nearbyLandmarks: ['SouthPark Mall', 'Great Northern Mall', 'Columbia Road'],
    distanceFromShop: 4.5,
  },
  {
    slug: 'olmsted-falls-oh',
    name: 'Olmsted Falls',
    state: 'OH',
    zipCodes: ['44138'],
    nearbyLandmarks: ['Grand Pacific Junction', 'Columbia Road', 'Bagley Road'],
    distanceFromShop: 6.2,
  },
  {
    slug: 'berea-oh',
    name: 'Berea',
    state: 'OH',
    zipCodes: ['44017'],
    nearbyLandmarks: ['Baldwin Wallace University', 'Berea High School', 'Front Street'],
    distanceFromShop: 7.1,
  },
  {
    slug: 'middleburg-heights-oh',
    name: 'Middleburg Heights',
    state: 'OH',
    zipCodes: ['44130'],
    nearbyLandmarks: ['Southland Shopping Center', 'Bagley Road', 'Pearl Road'],
    distanceFromShop: 5.9,
  },
  {
    slug: 'parma-oh',
    name: 'Parma',
    state: 'OH',
    zipCodes: ['44129', '44134', '44130'],
    nearbyLandmarks: ['Parmatown Mall', 'Ridge Road', 'Snow Road'],
    distanceFromShop: 8.3,
  },
  {
    slug: 'strongsville-oh',
    name: 'Strongsville',
    state: 'OH',
    zipCodes: ['44136', '44149'],
    nearbyLandmarks: ['SouthPark Mall', 'Royalton Road', 'Pearl Road'],
    distanceFromShop: 8.7,
  },
  {
    slug: 'avon-oh',
    name: 'Avon',
    state: 'OH',
    zipCodes: ['44011'],
    nearbyLandmarks: ['Avon Commons', 'Detroit Road', 'French Creek'],
    distanceFromShop: 6.8,
  },
  {
    slug: 'avon-lake-oh',
    name: 'Avon Lake',
    state: 'OH',
    zipCodes: ['44012'],
    nearbyLandmarks: ['Avon Lake High School', 'Lake Erie', 'Walker Road'],
    distanceFromShop: 7.5,
  },
  {
    slug: 'sheffield-lake-oh',
    name: 'Sheffield Lake',
    state: 'OH',
    zipCodes: ['44054'],
    nearbyLandmarks: ['Sheffield Lake City Hall', 'Lake Erie', 'Oliver Street'],
    distanceFromShop: 9.2,
  },
  {
    slug: 'elyria-oh',
    name: 'Elyria',
    state: 'OH',
    zipCodes: ['44035', '44039'],
    nearbyLandmarks: ['Elyria High School', 'Midway Mall', 'Broad Street'],
    distanceFromShop: 11.4,
  },
];

// SEO Services with content templates
export const SEO_SERVICES: SEOService[] = [
  {
    slug: 'brake-repair',
    title: 'Brake Repair & Service',
    shortTitle: 'Brake Repair',
    description: 'Professional brake inspection, pad replacement, rotor resurfacing, and complete brake system repairs.',
    keywords: ['brake repair', 'brake service', 'brake pads', 'brake rotors', 'brake inspection'],
    contentTemplate: (city: string, state: string) => 
      `Looking for reliable brake repair in ${city}, ${state}? At Mogo Auto Services, we specialize in comprehensive brake services including brake pad replacement, rotor resurfacing, caliper repair, and complete brake system diagnostics. Our ASE-certified technicians have served the ${city} area for over 20 years, providing honest assessments and quality repairs at unbeatable prices.`,
    faqs: [
      {
        question: 'How much does brake repair cost?',
        answer: 'Brake pad replacement typically ranges from $150-300 per axle. We provide free estimates and always discuss options before starting any work.'
      },
      {
        question: 'How do I know if my brakes need repair?',
        answer: 'Warning signs include squealing or grinding noises, longer stopping distances, a spongy brake pedal, or your car pulling to one side when braking.'
      },
      {
        question: 'Do you offer same-day brake service?',
        answer: 'Yes! Most brake pad replacements and inspections can be completed same-day. Call us for availability.'
      },
    ],
  },
  {
    slug: 'muffler-exhaust',
    title: 'Muffler & Exhaust Repair',
    shortTitle: 'Muffler Repair',
    description: 'Same-day muffler and exhaust system repairs using quality parts. Quick diagnostics and affordable rates.',
    keywords: ['muffler repair', 'exhaust repair', 'catalytic converter', 'exhaust leak', 'muffler shop'],
    contentTemplate: (city: string, state: string) =>
      `Need muffler or exhaust repair in ${city}, ${state}? Mogo Auto Services offers same-day muffler replacement and exhaust system repairs. Whether you have a loud exhaust, check engine light, or failed emissions test, our experienced technicians diagnose and fix the problem quickly. We serve ${city} residents with honest pricing and quality workmanship.`,
    faqs: [
      {
        question: 'How much does muffler replacement cost?',
        answer: 'Muffler replacement typically ranges from $200-500 depending on your vehicle and the type of muffler needed. We offer free estimates.'
      },
      {
        question: 'Can you fix an exhaust leak?',
        answer: 'Absolutely. We repair exhaust leaks, replace gaskets, and fix damaged pipes to ensure your vehicle runs quietly and passes emissions.'
      },
      {
        question: 'Do you handle catalytic converter issues?',
        answer: 'Yes, we diagnose catalytic converter problems and can replace them when necessary. We also help with check engine lights related to emissions.'
      },
    ],
  },
  {
    slug: 'oil-change',
    title: 'Oil Change Service',
    shortTitle: 'Oil Change',
    description: 'Fast, efficient oil changes using quality oil and filters. Conventional, synthetic, and high-mileage options available.',
    keywords: ['oil change', 'oil change near me', 'synthetic oil', 'quick oil change', 'oil filter replacement'],
    contentTemplate: (city: string, state: string) =>
      `Get a fast, affordable oil change in ${city}, ${state} at Mogo Auto Services. We offer conventional, synthetic blend, and full synthetic oil changes with quality filters. No appointment needed for most vehicles - just stop by our Westlake location, conveniently located for ${city} residents. We\'ll have you back on the road in no time.`,
    faqs: [
      {
        question: 'How often should I get an oil change?',
        answer: 'Most vehicles need an oil change every 3,000-7,500 miles depending on oil type and driving conditions. We can check your owner\'s manual for manufacturer recommendations.'
      },
      {
        question: 'How much does an oil change cost?',
        answer: 'Conventional oil changes start around $35-45, synthetic blends $55-75, and full synthetic $75-100. We always use quality filters and oil.'
      },
      {
        question: 'Do I need an appointment for an oil change?',
        answer: 'Appointments are recommended but not required. We accept walk-ins and most oil changes take 30-45 minutes.'
      },
    ],
  },
  {
    slug: 'tire-replacement',
    title: 'Tire Change & Replacement',
    shortTitle: 'Tire Service',
    description: 'Quick tire changes, rotations, and replacements. All major brands available at competitive prices.',
    keywords: ['tire replacement', 'new tires', 'tire shop', 'tire change', 'tire installation'],
    contentTemplate: (city: string, state: string) =>
      `Need new tires or tire service in ${city}, ${state}? Mogo Auto Services provides quick tire changes, rotations, balancing, and replacement services. We carry all major tire brands and offer competitive pricing for ${city} residents. Our ASE-certified technicians ensure proper installation and alignment for safe driving.`,
    faqs: [
      {
        question: 'How much do new tires cost?',
        answer: 'Tire prices vary by size and brand, typically ranging from $75-200+ per tire. We offer options for every budget and provide free tire inspections.'
      },
      {
        question: 'When should I replace my tires?',
        answer: 'Replace tires when tread depth reaches 2/32", if you see cracks or bulges, or if they\'re over 6-10 years old. We provide free tire inspections.'
      },
      {
        question: 'Do you offer tire rotation services?',
        answer: 'Yes, we recommend tire rotation every 5,000-8,000 miles to ensure even wear and extend tire life.'
      },
    ],
  },
  {
    slug: 'car-diagnostics',
    title: 'Car Diagnostics & Check Engine Light',
    shortTitle: 'Diagnostics',
    description: 'State-of-the-art diagnostic equipment to identify and resolve check engine lights and performance issues.',
    keywords: ['car diagnostics', 'check engine light', 'auto diagnostic', 'engine diagnostic', 'car computer scan'],
    contentTemplate: (city: string, state: string) =>
      `Is your check engine light on in ${city}, ${state}? Mogo Auto Services uses state-of-the-art diagnostic equipment to quickly identify the problem. Our ASE-certified technicians read error codes, perform thorough inspections, and provide honest recommendations for repairs. Don\'t ignore that warning light - visit us for fast, accurate diagnostics.`,
    faqs: [
      {
        question: 'How much does a diagnostic check cost?',
        answer: 'Diagnostic scans typically cost $75-125. This includes reading error codes and a preliminary inspection to identify the issue.'
      },
      {
        question: 'Can I drive with my check engine light on?',
        answer: 'A steady light usually means you can drive carefully to a shop. A flashing light indicates a serious problem - stop driving immediately and call us.'
      },
      {
        question: 'How long does a diagnostic take?',
        answer: 'Most diagnostics take 30-60 minutes. We\'ll explain the findings and provide a repair estimate before any work begins.'
      },
    ],
  },
  {
    slug: 'battery-replacement',
    title: 'Battery Replacement',
    shortTitle: 'Battery Service',
    description: 'Fast battery testing and replacement. Don\'t get stranded - we stock batteries for all makes and models.',
    keywords: ['car battery', 'battery replacement', 'battery test', 'dead battery', 'new car battery'],
    contentTemplate: (city: string, state: string) =>
      `Need a new car battery in ${city}, ${state}? Don\'t get stranded with a dead battery. Mogo Auto Services provides quick battery testing and replacement using high-quality batteries. We stock batteries for all makes and models, and most replacements can be done same-day. Call or stop by for a free battery test.`,
    faqs: [
      {
        question: 'How much does a car battery cost?',
        answer: 'Car batteries typically range from $120-250 including installation, depending on your vehicle\'s requirements. We offer free battery testing.'
      },
      {
        question: 'How long do car batteries last?',
        answer: 'Most car batteries last 3-5 years. Extreme temperatures, frequent short trips, and age all affect battery life.'
      },
      {
        question: 'Do you test batteries for free?',
        answer: 'Yes! We offer complimentary battery testing to check voltage, cold cranking amps, and overall battery health.'
      },
    ],
  },
  {
    slug: 'suspension-steering',
    title: 'Steering & Suspension Repair',
    shortTitle: 'Suspension Repair',
    description: 'Restore handling and comfort with suspension repairs. Shocks, struts, control arms, and alignment services.',
    keywords: ['suspension repair', 'shocks and struts', 'steering repair', 'alignment', 'control arm'],
    contentTemplate: (city: string, state: string) =>
      `Experiencing a rough ride or handling issues in ${city}, ${state}? Mogo Auto Services specializes in steering and suspension repairs including shocks, struts, control arms, and power steering systems. Proper suspension maintenance improves safety, tire life, and ride comfort. Trust our ASE-certified technicians to restore your vehicle\'s handling.`,
    faqs: [
      {
        question: 'How much does suspension repair cost?',
        answer: 'Shock/strut replacement typically costs $300-800 per pair. We provide detailed estimates after inspection.'
      },
      {
        question: 'How do I know if my shocks are bad?',
        answer: 'Signs include excessive bouncing after bumps, nose-diving when braking, uneven tire wear, or fluid leaks from struts.'
      },
      {
        question: 'Do you do wheel alignments?',
        answer: 'Yes, we offer wheel alignment services to ensure proper tire wear and optimal handling after suspension work.'
      },
    ],
  },
  {
    slug: 'cooling-system',
    title: 'Cooling & Heating Service',
    shortTitle: 'Cooling System',
    description: 'Radiator repairs, coolant flushes, water pump replacement, and AC service to keep your engine at the right temperature.',
    keywords: ['radiator repair', 'cooling system', 'water pump', 'coolant flush', 'heater repair'],
    contentTemplate: (city: string, state: string) =>
      `Is your car overheating or heater not working in ${city}, ${state}? Mogo Auto Services provides complete cooling system repairs including radiator service, water pump replacement, coolant flushes, and heater core repairs. Keep your engine running at the right temperature with our expert cooling system services.`,
    faqs: [
      {
        question: 'How much does radiator repair cost?',
        answer: 'Radiator repairs range from $150-400. Replacement typically costs $400-800 depending on your vehicle.'
      },
      {
        question: 'Why is my car overheating?',
        answer: 'Common causes include low coolant, faulty thermostat, water pump failure, radiator issues, or cooling fan problems.'
      },
      {
        question: 'How often should I flush my coolant?',
        answer: 'Most manufacturers recommend coolant flushes every 30,000-50,000 miles or every 2-5 years.'
      },
    ],
  },
  {
    slug: 'alternator-starter',
    title: 'Starters & Alternators',
    shortTitle: 'Electrical System',
    description: 'Electrical system diagnostics and repairs. Starter and alternator testing, replacement, and charging system service.',
    keywords: ['alternator repair', 'starter replacement', 'car won\'t start', 'charging system', 'electrical repair'],
    contentTemplate: (city: string, state: string) =>
      `Car won\'t start or battery keeps dying in ${city}, ${state}? The problem might be your starter or alternator. Mogo Auto Services diagnoses and repairs electrical system issues including starter replacement, alternator repair, and charging system problems. We\'ll get you back on the road quickly with honest, affordable service.`,
    faqs: [
      {
        question: 'How much does alternator replacement cost?',
        answer: 'Alternator replacement typically costs $400-700 including parts and labor. We test alternators before recommending replacement.'
      },
      {
        question: 'How do I know if my starter is bad?',
        answer: 'Signs include clicking when turning the key, slow cranking, or no response at all when trying to start.'
      },
      {
        question: 'Can you test my charging system?',
        answer: 'Yes, we perform complete charging system tests including battery, alternator output, and starter draw tests.'
      },
    ],
  },
  {
    slug: 'transmission-service',
    title: 'Transmission Service & Repair',
    shortTitle: 'Transmission',
    description: 'Transmission flushes, fluid changes, and repairs for automatic and manual transmissions.',
    keywords: ['transmission service', 'transmission flush', 'transmission repair', 'transmission fluid', 'gear slipping'],
    contentTemplate: (city: string, state: string) =>
      `Experiencing transmission issues in ${city}, ${state}? Mogo Auto Services provides transmission fluid changes, flushes, and repairs for both automatic and manual transmissions. Whether you\'re noticing gear slipping, hard shifting, or fluid leaks, our technicians can diagnose and repair the problem. Prevent costly transmission failures with regular maintenance.`,
    faqs: [
      {
        question: 'How much does transmission service cost?',
        answer: 'Transmission fluid changes typically cost $150-300. Flushes range from $200-400 depending on fluid type and vehicle.'
      },
      {
        question: 'How often should I service my transmission?',
        answer: 'Most manufacturers recommend every 30,000-60,000 miles. Check your owner\'s manual for specific recommendations.'
      },
      {
        question: 'What are signs of transmission problems?',
        answer: 'Watch for delayed shifting, gear slipping, fluid leaks, burning smells, or unusual noises when shifting.'
      },
    ],
  },
  {
    slug: 'preventive-maintenance',
    title: 'Preventive Maintenance',
    shortTitle: 'Maintenance',
    description: 'Scheduled maintenance services to extend vehicle life and prevent costly repairs. Tune-ups and inspections.',
    keywords: ['preventive maintenance', 'car tune up', 'scheduled maintenance', 'vehicle inspection', 'car maintenance'],
    contentTemplate: (city: string, state: string) =>
      `Keep your vehicle running longer with preventive maintenance in ${city}, ${state}. Mogo Auto Services offers scheduled maintenance plans including tune-ups, fluid changes, filter replacements, and comprehensive inspections. Regular maintenance prevents costly repairs and extends your vehicle\'s life. Trust our ASE-certified technicians for honest recommendations.`,
    faqs: [
      {
        question: 'What is included in a tune-up?',
        answer: 'Tune-ups typically include spark plug replacement, air/fuel filter changes, fluid checks, and a comprehensive inspection.'
      },
      {
        question: 'How often should I get a tune-up?',
        answer: 'Modern vehicles typically need tune-ups every 30,000-100,000 miles depending on spark plug type. We can check your manual.'
      },
      {
        question: 'Why is preventive maintenance important?',
        answer: 'Regular maintenance catches small problems before they become expensive repairs, improves fuel economy, and extends vehicle life.'
      },
    ],
  },
  {
    slug: 'emergency-repair',
    title: 'Emergency Breakdown Service',
    shortTitle: 'Emergency Repair',
    description: 'When you need help most. Quick response for breakdowns, tows, and urgent repairs.',
    keywords: ['emergency repair', 'car breakdown', 'tow service', 'roadside assistance', 'urgent repair'],
    contentTemplate: (city: string, state: string) =>
      `Stranded in ${city}, ${state} and need emergency auto repair? Mogo Auto Services provides quick response breakdown services and urgent repairs. While we don\'t offer towing, we work with local tow companies and provide fast service once your vehicle reaches our shop. Call us for emergency repairs - we\'ll get you moving again without the stress.`,
    faqs: [
      {
        question: 'Do you offer towing?',
        answer: 'We don\'t have our own tow trucks, but we work with trusted local towing companies and can recommend reliable services.'
      },
      {
        question: 'Can you handle emergency repairs same-day?',
        answer: 'Yes, we prioritize emergency repairs and work to get you back on the road as quickly as possible.'
      },
      {
        question: 'What should I do if my car breaks down?',
        answer: 'Pull over safely, turn on hazard lights, and call us. We can advise on whether it\'s safe to drive or if you need a tow.'
      },
    ],
  },
];

// Generate all valid combinations
export function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  
  for (const service of SEO_SERVICES) {
    for (const city of SERVICE_AREAS) {
      params.push({
        service: service.slug,
        city: city.slug,
      });
    }
  }
  
  return params;
}

// Helper to get service by slug
export function getServiceBySlug(slug: string): SEOService | undefined {
  return SEO_SERVICES.find(s => s.slug === slug);
}

// Helper to get city by slug
export function getCityBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find(c => c.slug === slug);
}

// Generate metadata for a service/city page
export function generateMetadata(service: SEOService, city: ServiceArea) {
  return {
    title: `${service.title} ${city.name}, ${city.state} | ASE Certified | Mogo Auto`,
    description: `Professional ${service.shortTitle.toLowerCase()} in ${city.name}, Ohio. ASE certified mechanics, 20+ years experience. Same-day service available. Call (440) 871-4949. Free estimates!`,
    keywords: service.keywords.map(k => `${k} ${city.name.toLowerCase()}`).join(', '),
  };
}

// Calculate distance text
export function getDistanceText(distance?: number): string {
  if (!distance || distance === 0) return 'Located in the heart of';
  if (distance < 1) return 'Less than a mile from';
  return `Only ${distance} miles from`;
}

// Get nearby cities for cross-linking
export function getNearbyCities(currentSlug: string, count: number = 4): ServiceArea[] {
  const current = getCityBySlug(currentSlug);
  if (!current) return [];
  
  return SERVICE_AREAS
    .filter(c => c.slug !== currentSlug)
    .sort((a, b) => {
      const distA = Math.abs((a.distanceFromShop || 0) - (current.distanceFromShop || 0));
      const distB = Math.abs((b.distanceFromShop || 0) - (current.distanceFromShop || 0));
      return distA - distB;
    })
    .slice(0, count);
}
