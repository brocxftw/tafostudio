export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality';
  location: string;
  image: string;
  description: string;
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Family Residence',
    category: 'Residential',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    description: 'A stunning contemporary home featuring clean lines, natural materials, and seamless indoor-outdoor living.',
    year: '2023',
    featured: true
  },
  {
    id: 2,
    title: 'Luxury Office Complex',
    category: 'Commercial',
    location: 'Downtown LA',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A state-of-the-art office building designed for maximum productivity and employee well-being.',
    year: '2023',
    featured: true
  },
  {
    id: 3,
    title: 'Boutique Hotel Interior',
    category: 'Hospitality',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    description: 'Elegant interior design that combines luxury with comfort for an unforgettable guest experience.',
    year: '2022',
    featured: true
  },
  {
    id: 4,
    title: 'Sustainable Eco-Home',
    category: 'Residential',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
    description: 'An environmentally conscious home featuring solar panels, rainwater harvesting, and sustainable materials.',
    year: '2023',
    featured: true
  },
  {
    id: 5,
    title: 'Restaurant Design',
    category: 'Commercial',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A trendy restaurant space that creates the perfect ambiance for fine dining experiences.',
    year: '2022',
    featured: true
  },
  {
    id: 6,
    title: 'Penthouse Renovation',
    category: 'Residential',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80',
    description: 'Complete transformation of a penthouse with panoramic city views and modern luxury finishes.',
    year: '2023',
    featured: true
  },
  {
    id: 7,
    title: 'Urban Loft Conversion',
    category: 'Residential',
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Creative conversion of an industrial space into a modern, functional loft apartment.',
    year: '2022',
    featured: false
  },
  {
    id: 8,
    title: 'Medical Center Design',
    category: 'Commercial',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Modern healthcare facility designed with patient comfort and staff efficiency in mind.',
    year: '2023',
    featured: false
  },
  {
    id: 9,
    title: 'Luxury Spa Resort',
    category: 'Hospitality',
    location: 'Aspen, CO',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    description: 'Exclusive mountain resort featuring wellness-focused design and breathtaking natural views.',
    year: '2022',
    featured: false
  },
  {
    id: 10,
    title: 'Tech Startup Office',
    category: 'Commercial',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    description: 'Innovative workspace designed to foster creativity and collaboration for a growing tech company.',
    year: '2023',
    featured: false
  },
  {
    id: 11,
    title: 'Coastal Villa',
    category: 'Residential',
    location: 'Malibu, CA',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Stunning oceanfront property with floor-to-ceiling windows and seamless indoor-outdoor living.',
    year: '2023',
    featured: false
  },
  {
    id: 12,
    title: 'Boutique Retail Store',
    category: 'Commercial',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Chic retail space designed to showcase products while providing an exceptional shopping experience.',
    year: '2022',
    featured: false
  }
];

export const categories = ['All', 'Residential', 'Commercial', 'Hospitality'] as const;

export type Category = typeof categories[number];
