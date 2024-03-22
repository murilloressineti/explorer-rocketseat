import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Header, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <Header to='/'>
          <FiArrowLeft /> <p>Voltar</p>
        </Header>
      </header>

      <Form>
        <Avatar>
            <img
              src="https://github.com/murilloressineti.png"
              alt="Foto do usuário"
            />
            <label htmlFor="avatar">
              <FiCamera />

              <input
                id="avatar"
                type="file"
              />
            </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}