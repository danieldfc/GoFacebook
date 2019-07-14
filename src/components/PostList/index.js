import React, { Component } from 'react';

import { Container } from './styles';

import Instrutor from '../../assets/diego.png';
import Clone from '../../assets/filipe.png';
import Empresa from '../../assets/rocketseat.jpeg';
import Profile from '../../assets/profile.png';

import Post from '../Post';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Deschamps',
          avatar: `${Instrutor}`,
        },
        date: '04 Jun 2019',
        content:
          'Bootcamp, o treinamento 100% online para alavancar seus estudos com as tecnologias Node.js, ReactJs e React Native.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Filipe Fernandes',
              avatar: `${Clone}`,
            },
            content: 'Você por acaso é o meu clone?',
          },
          {
            id: 2,
            author: {
              name: 'Rocketseat',
              avatar: `${Empresa}`,
            },
            content:
              'Vai ter que ser aberta uma votação para distinguir quem é quem, os dois são muito parecidos.',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Rocketseat',
          avatar: `${Empresa}`,
        },
        date: '04 Jun 2019',
        content: `Pessoal, Vocês decidem quem é quem Diego Deschamps e Filipe Fernandes?`,
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Deschamps',
              avatar: `${Instrutor}`,
            },
            content: 'ROCKET, SOU EUUUUUUUUUUU O DIEGOOOOOO!!!',
          },
          {
            id: 2,
            author: {
              name: 'Filipe Fernandes',
              avatar: `${Clone}`,
            },
            content: 'Vou criar um robô para saber quem é você!',
          },
          {
            id: 3,
            author: {
              name: 'Daniel Felizardo',
              avatar: `${Profile}`,
            },
            content: 'Me abstenho desta votação!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Container>
        <ul className="list">
          {posts.map(post => (
            <Post key={post} data={post} />
          ))}
        </ul>
      </Container>
    );
  }
}
