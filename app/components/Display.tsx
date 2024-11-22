"use client"
import React from 'react';
import styled from 'styled-components';

const DisplayStyled = styled.div`
  
  background: #222;
  color: #fff;
  padding: 20px;
  text-align: right;
  font-size: 2rem;
  border-radius: 5px;
`;

interface DisplayProps {
  expression: string;
}

const Display: React.FC<DisplayProps> = ({ expression }) => (
  <DisplayStyled>{expression}</DisplayStyled>
);

export default Display;
