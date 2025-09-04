import styled from 'styled-components';
import { Container } from '../components/common/Container';

const FooterWrapper = styled.footer`
  background-color: #1a202c;
  color: #a0aec0;
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  h4 {
    color: white;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
  a {
    &:hover {
      color: #f5b301;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #4a5568;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </FooterColumn>
        </FooterGrid>
        <Copyright>
          &copy; {new Date().getFullYear()} AmberStudent Clone. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};