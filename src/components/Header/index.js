import React from 'react';
import { MdPerson } from 'react-icons/md';

import { NavBar } from './styles';

export default function Header() {
  return (
    <NavBar>
      <h1>Facebook</h1>
      <div>
        <span>Meu Perfil</span>
        <MdPerson color="#fff" size={24} />
      </div>
    </NavBar>
  );
}
