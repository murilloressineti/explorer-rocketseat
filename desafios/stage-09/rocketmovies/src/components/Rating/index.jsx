import { Container } from "./styles.js"
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

export function Rating({ grade}){
    let stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= grade) {
        stars.push(<IoStarSharp key={i} />);
        } else {
        stars.push(<IoStarOutline key={i} />);
        }
    }

    return(
        <Container>
            <div>
                {stars}
            </div>
        </Container>
    )
}
