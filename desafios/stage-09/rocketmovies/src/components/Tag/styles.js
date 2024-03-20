import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.2rem;
    padding: .8rem 1.6rem;
    border-radius: 0.8rem;
    margin-right: .8rem;

    color: ${({theme}) => theme.COLORS.TAGS_COLOR};
    background: ${({theme}) => theme.COLORS.TAGS} ;

    cursor: pointer;
`

export const Hover = styled.span`
    span:hover {
        filter: brightness(0.9);
        transition: filter 300ms;
    }
`