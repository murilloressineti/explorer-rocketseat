import styled from 'styled-components'

export const Container = styled.div`
    svg {
        margin-left: 1rem;
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 2rem;
    }

    svg:first-child{
        margin-left: 2rem;
}
`