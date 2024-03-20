import { Container, Hover } from "./styles";

export function Tag({ title, ...rest }){
    return (
        <Hover>
            <Container {...rest} >
                {title}
            </Container>
        </Hover>
    )
}