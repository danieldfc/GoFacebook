import React, { Component } from 'react';

import Comment from '../Comment';

import { Container, Content } from './styles';

export default function Post({ data }) {
  return (
    <Container>
      <div className="poster">
        <Content>
          <img src={data.author.avatar} alt="Avatar" />
          <div>
            <strong>{data.author.name}</strong>
            <span>{data.date}</span>
          </div>
        </Content>
        <p>{data.content}</p>
      </div>
      <div className="comment">
        <ul>
          {data.comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
