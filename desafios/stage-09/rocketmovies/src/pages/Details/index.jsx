import { Container, Content } from "./styles.js"
import { FiArrowLeft } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { Stars } from "../../components/Stars"

export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title='Voltar' icon={FiArrowLeft} />
          
          <h1>
            Interstellar 
            <Stars></Stars>
          </h1>

          <div>
            <img src="https://github.com/murilloressineti.png" alt="Foto do usuário" />
            <span>Por Murillo Ressineti</span>
            <LuClock3 />

            <Date></Date>
          </div>

          <section>
            <Tag title='Ficção Científica'/>
            <Tag title='Drama'/>
            <Tag title='Família'/>
          </section>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.
          </p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, itaque! Sed deserunt officiis unde ex exercitationem! Rem sunt sequi iste libero dolores beatae assumenda, corporis, est nesciunt quod similique unde.</p>
          
        </Content>
      </main>
      
    </Container>
  )
}