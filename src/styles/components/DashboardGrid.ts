import styled from "styled-components";

//MP - MAPA
//HS - HISTOGRAMA
//DT - DATA AO LONGO DOS ANOS
//SC - SCORE
//AJ - AJUDA


export const Grid = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr;
    gap: 16px;

    grid-template-areas: 
        'MP MP HS'
        'DT SC AJ';
    
    height: 100vh;
`;