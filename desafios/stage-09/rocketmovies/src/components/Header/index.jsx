import { Container, Brand, Search, Profile } from './styles'

import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
            <Brand to='/'>RocketMovies</Brand>
            
            <Search placeholder="Pesquisar pelo título">
            </Search>
            
            <Profile>
                <div>
                    <strong>Murillo Ressineti</strong>
                    <span>sair</span>
                </div>
                <Link to='/profile'>
                    <img src="https://github.com/murilloressineti.png" alt="Foto do usuário" />
                </Link>
            </Profile>
        </Container>
    )
}