export const BIZ = {
  name: 'Super Jewellers', owner: 'Jinendra Jain', phone: '+91 62662 71742', tel: 'tel:+916266271742',
  hours: '11:00 AM – 9:00 PM',
  address: ['7 Number Chauraha,', 'Kalpana Nagar, Raghavpuram,', 'Morar, Gwalior,', 'Madhya Pradesh – 474006'],
  insta: 'https://www.instagram.com/super.jewellers/',
  fb: 'https://www.facebook.com/search/top?q=Super%20Jewellers%20Gwalior',
  maps: 'https://www.google.com/maps/search/?api=1&query=Super+Jewellers+7+Number+Chauraha+Kalpana+Nagar+Raghavpuram+Morar+Gwalior+474006',
  mapEmbed: 'https://maps.google.com/maps?q=Super+Jewellers+7+Number+Chauraha+Kalpana+Nagar+Raghavpuram+Morar+Gwalior&output=embed',
  moreReviews: 'https://www.instagram.com/super.jewellers/', // replace with Google / Justdial reviews link
};
export const wa = (m = 'Hello Super Jewellers, I would like to know more about your jewellery collections.') =>
  `https://wa.me/916266271742?text=${encodeURIComponent(m)}`;
// image: set to '/images/collections/xyz.jpg' to replace any illustration with a real photo
export const COLLECTIONS = [
  { name: 'Gold Jewellery', desc: 'Rings, earrings, bangles, necklaces and other gold jewellery.', type: 'mix', to: '/gold-jewellery' },
  { name: 'Silver Jewellery', desc: 'Silver jewellery and traditional silver articles.', type: 'bangles', tone: 'silver', to: '/silver-jewellery' },
  { name: 'Bridal Collection', desc: 'Statement jewellery designed for weddings and special occasions.', type: 'bridal', to: '/bridal' },
  { name: 'Rings', desc: 'Elegant everyday and occasion rings.', type: 'ring' },
  { name: 'Earrings', desc: 'Traditional and contemporary earrings.', type: 'earrings' },
  { name: 'Bangles', desc: 'Classic and modern bangle designs.', type: 'bangles' },
  { name: 'Necklaces', desc: 'Elegant necklaces and statement pieces.', type: 'necklace' },
  { name: 'Silver Coins & Articles', desc: 'Traditional silver gifting and utility items.', type: 'coins', tone: 'silver' },
];
const pick = (...n) => n.map((x) => COLLECTIONS.find((c) => c.name === x));
export const GOLD_ITEMS = pick('Rings', 'Earrings', 'Bangles', 'Necklaces');
export const SILVER_ITEMS = pick('Silver Jewellery', 'Silver Coins & Articles').map((c) => ({ ...c, to: undefined }));
export const BRIDAL_ITEMS = [
  { name: 'Bridal Necklaces', desc: 'Statement necklaces for the wedding day.', type: 'necklace' },
  { name: 'Bridal Earrings', desc: 'Traditional earrings to complete the look.', type: 'earrings' },
  { name: 'Bangles', desc: 'Classic and modern bangle designs.', type: 'bangles' },
  { name: 'Rings', desc: 'Elegant rings for engagements and weddings.', type: 'ring' },
  { name: 'Traditional Jewellery', desc: 'Timeless designs for ceremonies and celebrations.', type: 'mix' },
  { name: 'Wedding Sets', desc: 'Coordinated jewellery sets for weddings.', type: 'bridal' },
];
export const FEATURED = [
  { name: 'Timeless Gold', type: 'necklace' }, { name: 'Bridal Elegance', type: 'bridal' },
  { name: 'Everyday Classics', type: 'earrings' }, { name: 'Traditional Silver', type: 'bangles', tone: 'silver' },
];
export const WHY = [
  ['Quality Jewellery', 'A curated selection of gold and silver jewellery.'],
  ['Elegant Designs', 'Traditional craftsmanship combined with contemporary styling.'],
  ['Personal Service', 'A customer-focused showroom experience.'],
  ['Custom Designs', 'Jewellery can be created according to customer requirements, where applicable.'],
  ['Visit Us in Morar', 'Conveniently located at 7 Number Chauraha, Gwalior.'],
];
export const REVIEWS = [
  { text: 'Best ever service i get in this shop. No. 1 in transparency of gold and in purity.', by: 'Shubh' },
  { text: 'Super jewellers offers beautiful designs with reasonable price, the entire experience was very smooth. Highly recommend, best in Gwalior.' },
  { text: 'Best jewellers in Gwalior and the making charges is very valuable only 7.9 or gold rate is very genuine. Thanks super jewellers.' },
];
