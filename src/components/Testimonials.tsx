import styled from 'styled-components';
import { Container } from './common/Container';

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background-color: #f7fafc;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const Quote = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  position: relative;
  
  &::before {
    content: '“';
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: -2rem;
    left: -1rem;
    opacity: 0.2;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }
  p {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const testimonials = [
  { name: 'Sarah L.', university: 'King\'s College London', quote: 'Amber made finding a flat so easy! The process was seamless and the support team was incredibly helpful.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961' },
  { name: 'Mike T.', university: 'NYU', quote: 'As an international student, I was worried about accommodation. Amber had verified listings and made me feel secure.', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974' },
];

export const Testimonials = () => {
    return (
        <SectionWrapper>
            <Container>
                <SectionTitle>What Students Say</SectionTitle>
                <TestimonialsGrid>
                    {testimonials.map(t => (
                        <TestimonialCard key={t.name}>
                            <Quote>{t.quote}</Quote>
                            <Author>
                                <Avatar src={t.avatar} alt={t.name} />
                                <AuthorInfo>
                                    <h4>{t.name}</h4>
                                    <p>{t.university}</p>
                                </AuthorInfo>
                            </Author>
                        </TestimonialCard>
                    ))}
                </TestimonialsGrid>
            </Container>
        </SectionWrapper>
    )
}