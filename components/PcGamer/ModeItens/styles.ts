import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: space-around;

    @media(max-width: 1024px) {
        flex-direction: column;
    }

`;

export const Model = styled.div`
    width: 45%;
    height: 20rem;
    background-color: rgb(240,240,240);
    border-radius: 6px;

    @media(max-width: 1024px) {
        width: 100%;
    }

    .image-wallpaper {
        border-radius: 10px 0px 0px 10px;
        width: 100%;
        height: 15rem;
        background-color: white;

        img {
            border-radius: 10px 10px 0px 0px;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`;