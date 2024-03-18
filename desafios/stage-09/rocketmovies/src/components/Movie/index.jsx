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

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur hic excepturi et similique ex porro commodi officiis fugit impedit atque, omnis aliquam minus vitae aperiam quasi, voluptatum quam sint!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur hic excepturi et similique ex porro commodi officiis fugit impedit atque, omnis aliquam minus vitae aperiam quasi, voluptatum quam sint!
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