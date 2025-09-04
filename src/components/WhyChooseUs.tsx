import styled from 'styled-components';
import { ShieldCheck, Zap, MessageSquareHeart } from 'lucide-react';
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  p {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const features = [
  {
    icon: <ShieldCheck size={48} />,
    title: 'Verified Properties',
    description: 'Every property is manually verified by our team for your peace of mind.',
  },
  {
    icon: <Zap size={48} />,
    title: 'Instant Booking',
    description: 'Book your perfect student home in just a few clicks, hassle-free.',
  },
  {
    icon: <MessageSquareHeart size={48} />,
    title: '24/7 Support',
    description: 'Our dedicated team is always here to help you with any questions.',
  },
];

export const WhyChooseUs = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle>Why Choose Amber?</SectionTitle>
        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.title}>
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </SectionWrapper>
  );
};