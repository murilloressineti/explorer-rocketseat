import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    .inputs{
        display: flex;
        justify-content: space-between;
        gap: 4rem;
        margin-bottom: 2rem;
    }

    .tags{
        background-color: black;
        display: flex;
        flex-wrap: wrap;
    }
`

export const Form = styled.form`
    max-width: 110rem;
    margin: 4rem auto;

    > header {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        
        margin-bottom: 4rem;
        
        h1 {
            font-size: 3.6rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        } 
    }
`