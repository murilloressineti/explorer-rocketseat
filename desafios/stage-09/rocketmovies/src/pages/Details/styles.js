import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.5rem auto;
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
    
    > header {
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
    }

    > .subtitle {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 1.2rem;

        > span {
            font-family: "Roboto", sans-serif;
        }

        > img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: .1rem solid ${({theme}) => theme.COLORS.GRAY_500};;
        margin-right: -1.2rem;
        }

        > svg {
            margin-right: -1.2rem;
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 2rem;
        }
    }

    > .tags {
        margin: 4rem 0;

        span:hover {
            filter: brightness(0.9);
            transition: filter 300ms;
        }
    }

    > .text {
        font-size: 1.6rem;
        text-align: justify;

        p {
            margin-bottom: 2rem;
            white-space: pre-line;
        }
    }

    > button {
        margin-top: 3rem;
    }
`
