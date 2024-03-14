import styled from 'styled-components'

export const Container = styled.section`
    margin: 4rem 0;

    > h2 {
        padding-bottom: 1.6rem;
        margin-bottom: 2.8rem;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 3.6rem;
        font-weight: medium;
    }
`