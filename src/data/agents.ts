import { Agent } from '../types';
import { properties } from './properties';

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Alexandra Reynolds',
    title: 'Luxury Property Specialist',
    phone: '(310) 555-1234',
    email: 'alexandra@luxuryestates.com',
    photo: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg',
    bio: 'With over 15 years of experience in luxury real estate, Alexandra specializes in high-end properties along the California coast. Her attention to detail and dedication to her clients have earned her numerous industry awards.',
    specialties: ['Luxury Homes', 'Oceanfront Properties', 'Investment Properties'],
    socialMedia: {
      facebook: 'https://facebook.com/alexandrareynolds',
      twitter: 'https://twitter.com/alexreynoldsrealty',
      instagram: 'https://instagram.com/alexreynoldsrealty',
      linkedin: 'https://linkedin.com/in/alexandrareynolds'
    },
    properties: ['1', '3', '5']
  },
  {
    id: '2',
    name: 'Jonathan Pierce',
    title: 'Historic Properties Expert',
    phone: '(617) 555-9876',
    email: 'jonathan@luxuryestates.com',
    photo: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
    bio: 'Jonathan has specialized in historic properties for over a decade. His knowledge of architectural styles and restoration techniques makes him the go-to agent for Boston\'s finest historic homes.',
    specialties: ['Historic Properties', 'Brownstones', 'Luxury Urban Homes'],
    socialMedia: {
      facebook: 'https://facebook.com/jonathanpiercerealty',
      instagram: 'https://instagram.com/jonathanpiercerealty',
      linkedin: 'https://linkedin.com/in/jonathanpierce'
    },
    properties: ['2', '6']
  },
  {
    id: '3',
    name: 'Sofia Martinez',
    title: 'Wine Country Specialist',
    phone: '(707) 555-8765',
    email: 'sofia@luxuryestates.com',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    bio: 'Sofia has spent her career helping clients find and sell distinctive properties throughout Napa and Sonoma counties. Her background in viticulture gives her unique insight into vineyard properties.',
    specialties: ['Vineyard Properties', 'Luxury Estates', 'Agricultural Properties'],
    socialMedia: {
      facebook: 'https://facebook.com/sofiamartinezrealty',
      instagram: 'https://instagram.com/sofiamartinezrealty',
      linkedin: 'https://linkedin.com/in/sofiamartinez'
    },
    properties: ['4', '7']
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    title: 'Luxury Coastal Properties',
    phone: '(305) 555-4321',
    email: 'marcus@luxuryestates.com',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'Marcus specializes in luxury waterfront properties throughout South Florida. His vast network and marketing expertise help his clients achieve exceptional results.',
    specialties: ['Waterfront Properties', 'Luxury Condos', 'Investment Properties'],
    socialMedia: {
      facebook: 'https://facebook.com/marcusjohnsonrealty',
      instagram: 'https://instagram.com/marcusjohnsonrealty',
      linkedin: 'https://linkedin.com/in/marcusjohnson'
    },
    properties: ['8']
  }
];

export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};

export const getAgentProperties = (agentId: string) => {
  const agent = getAgentById(agentId);
  if (!agent) return [];
  
  return properties.filter(property => agent.properties.includes(property.id));
};

export const getTopAgents = (limit: number = 4): Agent[] => {
  // In a real application, this might be based on sales volume
  return agents.slice(0, limit);
};