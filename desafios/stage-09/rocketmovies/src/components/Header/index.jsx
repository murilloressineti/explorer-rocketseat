import { Container, Brand, Search, Profile } from './styles'

export function Header(){
    return(
        <Container>
            <Brand>RocketMovies</Brand>
            
            <Search placeholder="Pesquisar pelo título">
            </Search>
            
            <Profile to='/profile'>
                <div>
                    <strong>Murillo Ressineti</strong>
                    <span>sair</span>
                </div>
                <img src="https://github.com/murilloressineti.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}