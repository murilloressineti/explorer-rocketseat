import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import { Container, Content, Title } from './styles'

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"

export function Home() {
  return (
    <Container>

        <Header></Header>

        <Title>
            <h1>Meus filmes</h1>
            <Link  to='/new'>
              <Button icon={FiPlus } title='Adicionar filme'></Button>
            </Link>
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