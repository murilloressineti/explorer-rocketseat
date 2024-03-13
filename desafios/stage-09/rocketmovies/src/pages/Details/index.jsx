import { Container, Content, Stars } from "./styles.js"
import { FaArrowLeftLong } from "react-icons/fa6";

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title='Voltar' icon={FaArrowLeftLong} />

          <Stars>
            <h1>Interstellar</h1>

            <div>
              <p>Estrelas</p>
            </div>
          </Stars>

          <div>
            <span>Por Murillo Ressineti</span>
            <Date></Date>
          </div>

          <Section>
            <Tag title='Ficção Científica'/>
            <Tag title='Drama'/>
            <Tag title='Família'/>
          </Section>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.</p>
        </Content>
      </main>
      
    </Container>
  )
}