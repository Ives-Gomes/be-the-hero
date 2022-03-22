import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import LinkComponent from '../../components/Link';

import logoImg from '../../assets/Logo.svg';

import { Wrapper, Card, Content } from './styles';

function Register() {
  return (
    <Wrapper>
      <Card>
        <Content className="content--first">
          <img src={logoImg} alt="Be The Hero" />

          <h2>Cadastro</h2>

          <p>
            Faça seu cadastro, entre na plataforma e ajude
            pessoas a encontrarem os casos da sua ONG.
          </p>

          <LinkComponent to="/">
            <FiArrowLeft />
            Voltar para o logon
          </LinkComponent>
        </Content>

        <Content className="content--second">
          <Input type="text" placeholder="Nome da ONG" />
          <Input type="text" placeholder="E-mail" />
          <Input type="text" placeholder="Whatsapp" />

          <div className="input__location">
            <Input className="location__city" type="text" placeholder="Cidade" />
            <Input className="location__uf" type="text" placeholder="UF" />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Content>
      </Card>
    </Wrapper>
  );
}

export default Register;
