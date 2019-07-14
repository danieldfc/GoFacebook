import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3;
  margin-top: 20px;
  z-index: 1;
  border-radius: 5px;

  ul.list {
    list-style: none;
    margin-bottom: 20px;

    li {
      margin: 0 0 20px 0;
    }
  }
`;
