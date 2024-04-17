import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { api } from '../../services/api.js';

import { FiArrowLeft } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

import { Container, Content } from "./styles.js"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { Stars } from "../../components/Stars"

export function Details() {

  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm('Deseja realmente remover o filme?')

    if(confirm){
      await api.delete(`/movies/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovies(){
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }

    fetchMovies()
  }, [])

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>

      {
        data &&
        <main>
          <Content>
            <header>
              <ButtonText title='Voltar' icon={FiArrowLeft} onClick={handleBack} />

              <h1>
                {data.title}
                <Stars></Stars>
              </h1>
            </header>

            <div className="subtitle">
              <img src="https://github.com/murilloressineti.png" alt="Foto do usuário" />
              <span>Por Murillo Ressineti</span>
              <LuClock3 />

              <Date></Date>
            </div>

            {
              data.tags &&
              <section className="tags">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </section>
            }

            <section className="text">
              <p>{data.description}</p>
            </section>

            <ButtonText 
              title='Excluir filme'
              onClick={handleRemove}
            />
          </Content>
        </main>
      }
      
      
    </Container>
  )
}