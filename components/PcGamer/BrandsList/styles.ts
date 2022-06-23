import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: auto;
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Raleway';
        font-weight: 300;
        font-size: 1.8rem;
    }
`;


export const ContainerListbrands = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 1690px) {
        width: 100%;
    }

    .container-brand {
        width: 140px;
        height: 140px;
        border-radius: 140px;    
        margin: 2rem;

    }
`;