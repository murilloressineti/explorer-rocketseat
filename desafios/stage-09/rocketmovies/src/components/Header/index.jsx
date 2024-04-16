import { Container, Brand, Search, Profile } from './styles'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar-placeholder.png'

import { Link } from "react-router-dom";

export function Header(){
    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <Brand to='/'>RocketMovies</Brand>
            
            <Search placeholder="Pesquisar pelo título">
            </Search>
            
            <Profile>
                <div>
                    <Link to='/profile'>
                        <strong>{user.name}</strong>
                    </Link>
                    <span onClick={signOut}>sair</span>
                </div>
                <Link to='/profile'>
                    <img src={avatarURL} alt="Foto do usuário" />
                </Link>
            </Profile>
        </Container>
    )
}