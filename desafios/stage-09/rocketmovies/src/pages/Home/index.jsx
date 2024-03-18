import { Container, Content, Title } from './styles'
import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"

export function Home() {
  return (
    <Container>

        <Header></Header>

        <Title>
            <h1>Meus filmes</h1>
            <Button icon={FiPlus } title='Adicionar filme'></Button>
        </Title>

        <main>
            <Content>
                <Movie data={{
                title: 'Interestelar',
                tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
                ]
                }}
                />
                
                <Movie data={{
                title: 'Interestelar',
                tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
                ]
                }}
                />

                <Movie data={{
                title: 'Interestelar',
                tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
                ]
                }}
                />
            </Content>
        </main>
        
    </Container>
  )
}