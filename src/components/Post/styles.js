import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  p {
    font-size: 14px;
    color: #1f2326;
    margin-top: 20px;
  }

  div.poster {
    padding-bottom: 25px;
    border-bottom: 1px solid #7b7b7b;
  }

  div.comment {
    display: flex;
    margin-top: 20px;

    ul {
      list-style: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;

  img {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 6px 0 0 5px;

    strong {
      font-size: 14px;
      color: #1f2326;
    }

    span {
      font-weight: bold;
      font-size: 13px;
      color: #7b8b9a;
    }
  }
`;
