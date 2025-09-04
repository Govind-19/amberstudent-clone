import styled from 'styled-components';
import { Search } from 'lucide-react';
import { Button } from '../components/common/Button.ts';
import { Container } from '../components/common/Container.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const HeroWrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop')
      center/cover no-repeat;
  color: white;
  padding: 6rem 0;
  text-align: center;
`;

const SearchBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #f5b301;
  }
`;

const SearchButton = styled(Button)`
  width: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeroSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <HeroWrapper>
      <Container>
        <h1>Home away from home</h1>
        <p>Book student accommodations near top universities in the US, UK, AUS & more</p>
        <SearchBox>
          <SearchForm onSubmit={handleSearch}>
            <SearchInput
              placeholder="Search by city, university or building"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">
              <Search size={20} />
              <span>Search</span>
            </SearchButton>
          </SearchForm>
        </SearchBox>
      </Container>
    </HeroWrapper>
  );
};