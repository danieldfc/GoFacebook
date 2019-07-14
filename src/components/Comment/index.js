import React from 'react';

import { Container } from './styles';

export default function Comment({ data }) {
  return (
    <Container>
      <img src={data.author.avatar} alt="Avatar" />
      <div>
        <strong>
          {data.author.name}
          <span>{data.content}</span>
        </strong>
      </div>
    </Container>
  );
}
