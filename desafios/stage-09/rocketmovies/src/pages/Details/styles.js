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
        padding-bottom: 1.6rem;
        margin-top: 2.8rem;
        margin-bottom: 2.8rem;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 3.6rem;
        font-weight: medium;
    }

    > p {
        font-size: 1.6rem;
        margin-top: 1.6rem;
        text-align: justify;
    }
`

export const Stars = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`