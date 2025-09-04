import styled from 'styled-components';
import type { Property } from '../data/mockData';

const CardWrapper = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const CardLocation = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const CardPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  
  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <CardWrapper>
      <CardImage src={property.imageUrl} alt={property.name} />
      <CardContent>
        <CardTitle>{property.name}</CardTitle>
        <CardLocation>{property.city}, {property.country}</CardLocation>
        <CardPrice>${property.price}<span>/week</span></CardPrice>
      </CardContent>
    </CardWrapper>
  );
};