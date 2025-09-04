import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: -1rem;
  margin-bottom: 2rem;
`;

const HomeButton = styled(Button)`
  width: auto;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Wrapper>
        <ErrorCode>404</ErrorCode>
        <Message>Oops! The page you're looking for doesn't exist.</Message>
        <HomeButton as={Link} to="/">
          Go Back Home
        </HomeButton>
      </Wrapper>
    </Container>
  );
};

export default NotFoundPage;