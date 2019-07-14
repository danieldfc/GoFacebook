import styled from 'styled-components';

export const NavBar = styled.nav`
  background: #3b5998;
  height: 64px;
  max-height: 64px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  h1 {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      margin-right: 5px;
    }
  }
`;
