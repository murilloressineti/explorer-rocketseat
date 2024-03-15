import { Container, Content, Title } from './styles'
import { FiPlus } from "react-icons/fi";

import { Header } from '../../components/Header'
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { Stars } from "../../components/Stars"


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
                <section>
                    <h1>Interestelar <br/> 
                        <Stars></Stars>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur hic excepturi et similique ex porro commodi officiis fugit impedit atque, omnis aliquam minus vitae aperiam quasi, voluptatum quam sint!
                    </p>
                    <Tag title='Ficção Científica'/>
                    <Tag title='Drama'/>
                    <Tag title='Família'/>
                </section>

                <section>
                    <h1>Interestelar <br/> 
                        <Stars></Stars>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur hic excepturi et similique ex porro commodi officiis fugit impedit atque, omnis aliquam minus vitae aperiam quasi, voluptatum quam sint!
                    </p>
                    <Tag title='Ficção Científica'/>
                    <Tag title='Drama'/>
                    <Tag title='Família'/>
                </section>

                <section>
                    <h1>Interestelar <br/> 
                        <Stars></Stars>
                    </h1>
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