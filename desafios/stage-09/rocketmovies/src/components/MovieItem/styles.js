import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    border-radius: 1rem;
    padding-right: 1rem;

    > button {
        border: none;
        background: none;
        font-size: 2rem;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.6rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`