import styled from 'styled-components';

import signInBackground from '../../assets/Background.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 50%;

  img {
    width: 70%;
  }

  form {
    width: 300px;

    display: flex;
    flex-direction: column;

    h2 {
      color: #13131A;

      font-size: 30px;
      font-weight: 600;

      margin-top: 50px;
    }
  }

  @media (max-width: 425px) {
    max-width: 100%;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: 500px;

  @media (max-width: 768px) {
    background-size: 300px;
  }
`;
