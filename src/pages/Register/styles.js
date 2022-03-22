import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 80%;
  height: 80vh;

  display: flex;
  justify-content: space-between;

  background: #F0F0F5;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .content--first {
    margin: 100px;
    margin-right: 0;
  }

  .content--second {
    margin: 100px;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  img {
    width: 50%;
  }

  h2 {
    color: #13131A;

    font-size: 30px;
    font-weight: 600;

    margin-top: 30px;
  }

  p {
    color: #737380;
    font-size: 16px;
    line-height: 24px;
    max-width: 80%;
  }

  input {
    width: 92%;

    margin-top: 5px;
  }

  .input__location {
    display: flex;

    .location__city {
      width: 80%;
    }

    .location__uf {
      width: 20%;

      margin-left: 5px;
    }
  }
`;
