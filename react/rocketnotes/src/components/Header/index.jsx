import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/murilloressineti.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Murillo Ressineti</strong>
                </div>
            </Profile>
        </Container>
    )
}