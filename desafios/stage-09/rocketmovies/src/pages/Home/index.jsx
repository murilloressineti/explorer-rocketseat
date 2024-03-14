import { Container, Content, Title } from './styles'
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

import { Header } from '../../components/Header'
import { Tag } from "../../components/Tag"

export function Home() {
  return (
    <Container>

        <Header></Header>

        <main>
            <Title>
                <h1>Meus filmes</h1>
                <button>Adicionar filme</button>
            </Title>

            <Content>
                <section>
                    <h1>Interestelar <br/> <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarOutline /></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur hic excepturi et similique ex porro commodi officiis fugit impedit atque, omnis aliquam minus vitae aperiam quasi, voluptatum quam sint!
                    </p>
                    <Tag title='Ficção Científica'/>
                    <Tag title='Drama'/>
                    <Tag title='Família'/>
                </section>

                <section>
                    <h1>Interestelar <br/> <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarOutline /></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur hic excepturi et similique ex porro commodi officiis fugit impedit atque, omnis aliquam minus vitae aperiam quasi, voluptatum quam sint!
                    </p>
                    <Tag title='Ficção Científica'/>
                    <Tag title='Drama'/>
                    <Tag title='Família'/>
                </section>

                <section>
                    <h1>Interestelar <br/> <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarOutline /></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur hic excepturi et similique ex porro commodi officiis fugit impedit atque, omnis aliquam minus vitae aperiam quasi, voluptatum quam sint!
                    </p>
                    <Tag title='Ficção Científica'/>
                    <Tag title='Drama'/>
                    <Tag title='Família'/>
                </section>
                
            </Content>
        </main>
        
    </Container>
  )
}