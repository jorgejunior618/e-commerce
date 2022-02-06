import { FormEvent, useCallback, useEffect, useState } from "react";

import profileService from "../../services/profile";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { ButtonsGroup, InputLabelSection, PageContainer } from "./styles";

function Profile() {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ editing, setEditingMode ] = useState(false);

  const handleUpdate = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(editing) {
    }

    setEditingMode(!editing);
  }, [editing]);

  const handleCancel = () => {
    setEditingMode(false);
  }

  const handleGetProfile = useCallback(async () => {
    const { user } = await profileService.getProfile();

    setEmail(user.email);
    setName(user.name);
  }, []);

  useEffect(() => {
    handleGetProfile();
  }, [handleGetProfile] );

  return (
    <PageContainer>

      <Form action="submit" onSubmit={handleUpdate} formHeader="Seu Perfil">
        
        <InputLabelSection >
          <label htmlFor="email">Seu email:</label>
          <Input
            name="email"
            placeholder="E-mail"
            disabled={!editing}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputLabelSection>

        <InputLabelSection >
          <label htmlFor="name">Seu nome:</label>
          <Input
            name="name"
            placeholder="Como deseja ser chamado"
            disabled={!editing}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          </InputLabelSection>

        {editing ? 
        <InputLabelSection >
          <label htmlFor="password">Nova senha:</label>
          <Input
            name="password"
            placeholder="Digite uma nova senha se desejar"
            disabled={!editing}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          </InputLabelSection>
          : <></>}

        {editing ? 
        <>
        <InputLabelSection >
          <label htmlFor="confirmPassword">Digite sua senha atual para confirmar trocas:</label>
        </InputLabelSection>
          <Input
            name="confirmPassword"
            placeholder="Crie uma senha"
            disabled={!editing}
            type="password"
            required={editing }
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          </>
          : <></>}
        {true ? <></> :
        <>
          <ButtonsGroup>
            <Button type="submit">
              {editing ? 'Atualizar' : 'Editar perfil'}
            </Button>

            {editing ?
              <Button id="cancel" onClick={handleCancel}>
                Cancelar
              </Button>
              : <></>}
          </ButtonsGroup>
        </>}
      </Form>
    </PageContainer>
  );
}

export default Profile;

