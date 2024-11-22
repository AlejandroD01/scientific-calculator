"use client"
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 20px;
  font-size: 1.5rem;
  background: #2b1e1e;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <ButtonStyled onClick={() => onClick(label)}>
    {label}
  </ButtonStyled>
);

export default Button;
