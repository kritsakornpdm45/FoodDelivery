// footerData.ts - Footer data utility file

// Type definitions
export type FooterCity = {
    name: string;
    url: string;
  };
  
  export type FooterLink = {
    label: string;
    url: string;
  };
  
  export type SocialLink = {
    platform: 'instagram' | 'facebook' | 'twitter';
    url: string;
  };
  
  // Cities data organized by columns
  export const citiesByColumn: FooterCity[][] = [
    [
      { name: 'San Francisco', url: '/san-francisco' },
      { name: 'Miami', url: '/miami' },
      { name: 'San Diego', url: '/san-diego' },
      { name: 'East Bay', url: '/east-bay' },
      { name: 'Long Beach', url: '/long-beach' },
    ],
    [
      { name: 'Los Angeles', url: '/los-angeles' },
      { name: 'Washington DC', url: '/washington-dc' },
      { name: 'Seattle', url: '/seattle' },
      { name: 'Portland', url: '/portland' },
      { name: 'Nashville', url: '/nashville' },
    ],
    [
      { name: 'New York City', url: '/new-york-city' },
      { name: 'Orange County', url: '/orange-county' },
      { name: 'Atlanta', url: '/atlanta' },
      { name: 'Charlotte', url: '/charlotte' },
      { name: 'Denver', url: '/denver' },
    ],
    [
      { name: 'Chicago', url: '/chicago' },
      { name: 'Phoenix', url: '/phoenix' },
      { name: 'Las Vegas', url: '/las-vegas' },
      { name: 'Sacramento', url: '/sacramento' },
      { name: 'Oklahoma City', url: '/oklahoma-city' },
    ],
    [
      { name: 'Columbus', url: '/columbus' },
      { name: 'New Mexico', url: '/new-mexico' },
      { name: 'Albuquerque', url: '/albuquerque' },
      { name: 'Sacramento', url: '/sacramento' },
      { name: 'New Orleans', url: '/new-orleans' },
    ],
  ];
  
  // Company links
  export const companyLinks: FooterLink[] = [
    { label: 'About Us', url: '/about-us' },
    { label: 'Team', url: '/team' },
    { label: 'Careers', url: '/careers' },
    { label: 'Blog', url: '/blog' },
  ];
  
  // Contact links
  export const contactLinks: FooterLink[] = [
    { label: 'Help & Support', url: '/help' },
    { label: 'Partner with us', url: '/partners' },
    { label: 'Ride with us', url: '/ride' },
    { label: 'Ride with us', url: '/ride' }, // Duplicated as per the image
  ];
  
  // Legal links (duplicated as per the image)
  export const legalLinks: FooterLink[] = [
    { label: 'Terms & Conditions', url: '/terms' },
    { label: 'Refund & Cancellation', url: '/refund' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Cookie Policy', url: '/cookie' },
  ];
  
  // Social links
  export const socialLinks: SocialLink[] = [
    { platform: 'instagram', url: 'https://instagram.com' },
    { platform: 'facebook', url: 'https://facebook.com' },
    { platform: 'twitter', url: 'https://twitter.com' },
  ];
  
  // Helper function to render social icon based on platform
  export const getSocialIcon = (platform: string): string => {
    switch (platform) {
      case 'instagram':
        return '📷'; 
      case 'facebook':
        return '👍'; 
      case 'twitter':
        return '🐦'; 
      default:
        return '';
    }
  };
  
  // Export a complete footer data object for convenience
  export const footerData = {
    citiesByColumn,
    companyLinks,
    contactLinks,
    legalLinks,
    socialLinks,
  };
  
  export default footerData;