import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom'

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <Link to='/'>
                            <ButtonText title='Voltar' icon={FiArrowLeft} />
                        </Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="inputs">
                        <Input placeholder='Título'/>
                        <Input placeholder='Sua nota (de 0 a 5)'/>
                    </div>
                    <Textarea placeholder='Observações'/>

                    <Section title='Marcadores'>
                        <div className="tags">
                            <MovieItem value='React'/>
                            <MovieItem value='JavaScript'/>
                            <MovieItem isNew placeholder='Novo Marcador'/>
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button title='Excluir filme'></Button>
                        <Button title='Salvar alterações'></Button>
                    </div>
                </Form>
            </main>
        </Container>

    )
}