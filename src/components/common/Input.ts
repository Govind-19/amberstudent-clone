import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #f5b301;
    box-shadow: 0 0 0 1px #f5b301;
  }
`;