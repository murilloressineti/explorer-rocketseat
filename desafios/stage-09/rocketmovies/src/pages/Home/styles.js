import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows:  10.5rem auto;
    grid-template-areas: 
    "header"
    "title"
    "content";

    > main {
        grid-area: content;
        padding: 6.4rem 0;
        margin: 0 auto;

        overflow-y: scroll;
    }

    ::-webkit-scrollbar {
    width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.PINK};; 
    border-radius: 1rem;
    }

`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3.6rem 12.5rem;

    > button {
        width: 22rem;
    }
`

export const Content = styled.div`
    max-width: 110rem;
    margin: 0 auto;

    > section {
        background-color: ${({theme}) => theme.COLORS.PINK_OPACITY};
        padding: 3.2rem;
        margin-bottom: 2.4rem;

        border-radius: 1.6rem;

        h1 {
            margin-bottom: 1.5rem;

            svg {
                margin-left: 0.5rem;
                font-size: 1.8rem;
                color: ${({theme}) => theme.COLORS.PINK};
            }

            svg:first-child{
                margin-left: 0;
            }
        }

        p {
            color: ${({theme}) => theme.COLORS.GRAY_400};
            margin-bottom: 3rem;
        }

        span {
            background: ${({theme}) => theme.COLORS.GRAY_600} ;
        }
    }

    > section:first-child {
        margin-top: -5rem;
    }

`
