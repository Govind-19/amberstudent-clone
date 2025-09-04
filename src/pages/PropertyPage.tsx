import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { properties } from '../data/mockData';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useAuth } from '../hooks/useAuth';
import { MapPin, Bath, BedDouble, Star } from 'lucide-react';

const PropertyWrapper = styled.main`
  padding: 2rem 0;
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const PropertyInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const Details = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 0;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BookingCard = styled.div`
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  position: sticky;
  top: 100px;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  
  span {
    font-size: 1rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const UnauthenticatedMessage = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.textLight};
    margin-top: 1rem;

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
    }
`;

const PropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const property = properties.find(p => p.id === parseInt(id || ''));

  if (!property) {
    return <Container><p>Property not found!</p></Container>;
  }

  return (
    <PropertyWrapper>
      <Container>
        <PropertyGrid>
          <div>
            <PropertyImage src={property.imageUrl} alt={property.name} />
            <PropertyInfo>
              <h1>{property.name}</h1>
              <Location><MapPin size={20} />{property.city}, {property.country}</Location>
              <Details>
                <DetailItem><BedDouble /> 1 Bed</DetailItem>
                <DetailItem><Bath /> 1 Bath</DetailItem>
                <DetailItem><Star /> 4.5 Stars</DetailItem>
              </Details>
              <p>Detailed description of the property goes here. It includes information about the amenities, the neighborhood, university proximity, and other relevant details for students looking for accommodation.</p>
            </PropertyInfo>
          </div>
          <BookingCard>
            <Price>${property.price} <span>/ week</span></Price>
            <Button>Book Now</Button>
            {!isAuthenticated && (
                <UnauthenticatedMessage>
                    You must <Link to="/login">log in</Link> to book.
                </UnauthenticatedMessage>
            )}
          </BookingCard>
        </PropertyGrid>
      </Container>
    </PropertyWrapper>
  );
};

export default PropertyPage;