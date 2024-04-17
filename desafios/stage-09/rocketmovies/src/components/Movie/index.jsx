import { Container } from "./styles";
import { Stars } from "../Stars"
import { Tag } from "../Tag";

export function Movie({ data, ...rest }) {
    return(
        <Container {...rest}>
            <h1>
                {data.title}
                <Stars></Stars>
            </h1>

            <p>
                {data.description}
            </p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
        </Container>
    )
}