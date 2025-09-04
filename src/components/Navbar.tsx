import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import { LogOut, User } from 'lucide-react';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky; /* New */
  top: 0; /* New */
  z-index: 1000; /* New */
  box-shadow: 0 2px 4px rgb(0 0 0 / 0.05); /* New */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  &:hover {
    color: #f5b301;
  }
`;

const AuthButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

export const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <Nav>
      <NavLink to="/">
        <strong>AmberClone</strong>
      </NavLink>
      <NavLinks>
        <NavLink to="/for-students">For Students</NavLink>
        <NavLink to="/for-property-managers">For Property Managers</NavLink>
        {isAuthenticated ? (
          <>
            <span>Hello, {user?.email.split('@')[0]}</span>
            <AuthButton onClick={logout}>
              <LogOut size={18} />
              Logout
            </AuthButton>
          </>
        ) : (
          <NavLink to="/login">
            <User size={18} />
            Login
          </NavLink>
        )}
      </NavLinks>
    </Nav>
  );
};