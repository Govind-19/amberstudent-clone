import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { properties } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';
import { Container } from '../components/common/Container';

const ResultsWrapper = styled.main`
  padding: 2rem 0;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 2rem;
`;

const NoResults = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 4rem;
`;

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredProperties = properties.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.city.toLowerCase().includes(query)
  );

  return (
    <Container>
      <ResultsWrapper>
        <PageTitle>Showing results for "{query}"</PageTitle>
        {filteredProperties.length > 0 ? (
          <ResultsGrid>
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </ResultsGrid>
        ) : (
          <NoResults>No properties found matching your search.</NoResults>
        )}
      </ResultsWrapper>
    </Container>
  );
};

export default SearchResultsPage;