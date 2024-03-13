import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 11.5rem;
    width: 100%;

    border-bottom: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY_500};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8rem;
`

export const Logo = styled.h1`
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.PINK};
`

export const Search = styled.input`
    flex: 1;

    height: 5.6rem;
    width: 100%;

    margin: 0 6.4rem;
    padding: 2rem 2.4rem;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    border: none;
    border-radius: 1rem;

    font-size: 1.4rem;

`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 5.6rem;
        height: 5.5rem;
        border-radius: 50%;
        border: .1rem solid ${({theme}) => theme.COLORS.GRAY_500};;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: 1rem;
        line-height: 2.4rem;

        span {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY_300}
        }

        strong {
            font-size: 1.8rem;
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }
    }
`