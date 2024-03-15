import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 6.4rem 0;

        overflow-y: auto;

        margin: 0 auto;
        padding-right: 1.6rem;
    }

    ::-webkit-scrollbar {
    width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.PINK};; 
    border-radius: 1rem;
    }

`

export const Content = styled.div`
    max-width: 110rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    
    > button:first-child {
        align-self: start;
    }

    > h1 {
        margin-top: 3rem;
        margin-bottom: 3rem;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 3.6rem;
        font-weight: 500;
        
        display: flex;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 2rem;

        > span {
            font-family: "Roboto", sans-serif;
        }

        > img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: .1rem solid ${({theme}) => theme.COLORS.GRAY_500};;
        margin-right: -1rem;
        }

        > svg {
            margin-right: -1rem;
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 2rem;
        }
    }

    > section {
        margin: 4rem 0;
    }

    > p {
        font-size: 1.6rem;
        margin-bottom: 2rem;
        text-align: justify;
    }
`
