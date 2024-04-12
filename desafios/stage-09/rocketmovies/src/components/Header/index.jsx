import { Container, Brand, Search, Profile } from './styles'

import { useAuth } from '../../hooks/auth'

import { Link } from "react-router-dom";

export function Header(){
    const { signOut } = useAuth()
    return(
        <Container>
            <Brand to='/'>RocketMovies</Brand>
            
            <Search placeholder="Pesquisar pelo título">
            </Search>
            
            <Profile>
                <div>
                    <Link to='/profile'>
                        <strong>Murillo Ressineti</strong>
                    </Link>
                    <span onClick={signOut}>sair</span>
                </div>
                <Link to='/profile'>
                    <img src="https://github.com/murilloressineti.png" alt="Foto do usuário" />
                </Link>
            </Profile>
        </Container>
    )
}