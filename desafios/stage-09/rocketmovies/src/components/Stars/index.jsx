import { Container } from "./styles.js"
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

export function Stars(){
    return(
        <Container>
            <div><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarOutline /></div>
        </Container>
    )
}
