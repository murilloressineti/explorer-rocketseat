import styled from 'styled-components'

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
        padding: 6.4rem 0;
        margin: 0 auto;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > h1 {
        font-weight: 500;
    }

    > button {
        background-color: pink;
    }

`

export const Content = styled.div`

    border: 2px solid yellow;

    max-width: 110rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > section {
        background-color: ${({theme}) => theme.COLORS.PINK};    
        border: 2px solid green;
        padding: 5rem;

        margin-bottom: 2rem;
    }

`
export const NewNote = styled.button`
  grid-area: newnote;
  background-color: yellow;
`
