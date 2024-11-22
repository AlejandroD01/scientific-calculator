"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { create, all } from 'mathjs';
import Display from './Display';
import Button from './Button';


const math = create(all);

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f5f5f5;
`;

const ButtonContainer = styled.div`
  display: grid;
  border: 1px solid #070707;
  border-radius: 5px;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Calculator: React.FC = () => {
    const [expression, setExpression] = useState<string>('');

    const handleClick = (value: string) => {
        setExpression((prev) => prev + value);
    };

    const handleClear = () => {
        setExpression('');
    };

    const handleEvaluate = () => {
        try {
            setExpression(math.evaluate(expression).toString());
        } catch (error) {
            setExpression('Error ' + error);
        }
    };

    return (
        <CalculatorContainer>
                <Display expression={expression} />
            <ButtonContainer>
                <Button label="C" onClick={handleClear} />
                <Button label="(" onClick={handleClick} />
                <Button label=")" onClick={handleClick} />
                <Button label="/" onClick={handleClick} />
                <Button label="7" onClick={handleClick} />
                <Button label="8" onClick={handleClick} />
                <Button label="9" onClick={handleClick} />
                <Button label="*" onClick={handleClick} />
                <Button label="4" onClick={handleClick} />
                <Button label="5" onClick={handleClick} />
                <Button label="6" onClick={handleClick} />
                <Button label="-" onClick={handleClick} />
                <Button label="1" onClick={handleClick} />
                <Button label="2" onClick={handleClick} />
                <Button label="3" onClick={handleClick} />
                <Button label="+" onClick={handleClick} />
                <Button label="0" onClick={handleClick} />
                <Button label="." onClick={handleClick} />
                <Button label="=" onClick={handleEvaluate} />
                <Button label="%" onClick={handleClick} />
                <Button label="√" onClick={() => handleClick('sqrt(')} />
                <Button label="^" onClick={() => handleClick('^')} />
            </ButtonContainer>
        </CalculatorContainer>
    );
};

export default Calculator;
