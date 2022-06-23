import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    height: auto;
    max-width: 1920px;
    margin: 0 auto;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: 'Raleway';
    font-size: 2rem;
`;

export const ItensContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

export const Card = styled.div`
    width: 15%;
    min-width: 18rem;
    border-radius: 6px;
    height: 20rem;
    margin: 2.5rem;
    border: 1px solid rgb(235, 235, 235);

    .product-image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 13rem;
        background-color: 12rem;
        background-color: rgb(240, 240, 240);
    }

    p {
        text-align: center;
        font-family: 'Raleway';
    }

    .price {
        margin: -.6rem auto;
        height: 40px;
        border-radius: 3px;
        width: 80%;
        border: 1px solid  rgb(220, 220, 220);
        text-align: center;
        display: flex;
        font-family: 'Raleway';
        font-weight: 400;
        justify-content: center;

        p{
            text-align: left;
        font-family: 'Raleway';
            font-weight: 400;
            margin-top: .3rem;
        }
    }
`;