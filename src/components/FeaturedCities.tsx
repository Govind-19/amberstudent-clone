import styled from 'styled-components';
import { Container } from './common/Container';
import { Link } from 'react-router-dom';

const SectionWrapper = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CityCard = styled(Link)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  height: 350px;
  color: white;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  }
`;

const CityImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const CityName = styled.h3`
  position: relative;
  z-index: 2;
  font-size: 1.5rem;
`;

const cities = [
    { name: 'London', img: 'https://images.unsplash.com/photo-1505761671935-60b3a742750f?q=80&w=2070' },
    { name: 'New York', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070' },
    { name: 'Sydney', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070' },
    { name: 'Boston', img: 'https://images.unsplash.com/photo-1552534015-8d40134b6e56?q=80&w=1974' },
];

export const FeaturedCities = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle>Find your perfect student city</SectionTitle>
        <CitiesGrid>
          {cities.map(city => (
            <CityCard key={city.name} to={`/search?q=${city.name}`}>
              <CityImage src={city.img} alt={city.name} />
              <CityName>{city.name}</CityName>
            </CityCard>
          ))}
        </CitiesGrid>
      </Container>
    </SectionWrapper>
  );
};