import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import LinkComponent from '../../components/Link';

import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background } from './styles';

function SignIn() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Be The Hero" />

          <form>
            <h2>Faça seu logon</h2>

            <Input type="text" placeholder="Sua ID" />
            <Button type="submit">Entrar</Button>

            <LinkComponent to="/register">
              <FiLogIn />
              Não tenho cadastro
            </LinkComponent>
          </form>
        </div>
      </Content>

      <Background />
    </Container>
  );
}

export default SignIn;
