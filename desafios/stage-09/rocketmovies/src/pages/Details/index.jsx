import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { format } from 'date-fns'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api.js';
import avatarPlaceholder from '../../assets/avatar-placeholder.png'

import { FiArrowLeft } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

import { Container, Content } from "./styles.js"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { Rating } from "../../components/Rating/index"
import { Textarea } from "../../components/Textarea"

export function Details() {

  const { user } = useAuth()
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [data, setData] = useState(null)
  const [createdAt, setCreatedAt] = useState(null)

  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');

  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleSaveDescription() {
    await api.put(`/movies/${params.id}`, { description: editedDescription });
    setData((prevData) => ({ ...prevData, description: editedDescription }));
    setIsEditing(false);
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

      const formattedDateTime = format(new Date(response.data.created_at), 'dd/MM/yy \'às\' HH:mm');
      setCreatedAt(formattedDateTime);

      setEditedDescription(response.data.description)
    }

    fetchMovies()
  }, [params.id])

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
                <Rating grade={data.rating}/>
              </h1>
            </header>

            <div className="subtitle">
              <img src={avatarURL} alt="Foto do usuário" />
              <span>Por {user.name}</span>
              <LuClock3 />
              {createdAt && <span>{createdAt}</span>}
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

            {
              isEditing ? (
                <section className="text">
                  <Textarea
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                  <ButtonText title="Salvar" onClick={handleSaveDescription} />
                </section>
            ) : (
                <section className="text">
                  <p>{data.description}</p>

                  <div>
                    <ButtonText
                    title="Editar descrição"
                    onClick={() => setIsEditing(true)}
                  />

                    <ButtonText 
                      title='Excluir filme'
                      onClick={handleRemove}
                    />
                  </div>
                  
                </section>
            )}

            
          </Content>
        </main>
      }
      
      
    </Container>
  )
}