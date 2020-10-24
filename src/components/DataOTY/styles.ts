import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: DT;
    
  display: flex;
  flex-direction: column;
  
  align-items: center;
  align-content: center;
  justify-content: space-between;

  border: solid 2px black;
  border-radius: 10px;

  background-color: '#214';
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Graphbox = styled.div`
  font-size: 16px;
  font-weight: bold;
`;