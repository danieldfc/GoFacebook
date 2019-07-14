import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import PostList from '../../components/PostList';

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <aside className="profile" />
        <PostList />
        <aside className="amigos" />
      </Container>
    </>
  );
}
