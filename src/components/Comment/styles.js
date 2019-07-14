import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  margin: 10px 0;

  img {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  div {
    flex-shrink: 1;
    background: #ddd;
    padding: 10px;
    margin-left: 10px;
    border-radius: 10px;

    strong {
      font-size: 14px;
      color: #1f2326;

      span {
        margin-left: 5px;
        font-weight: normal;
      }
    }
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
