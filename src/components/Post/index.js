import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment';

import { Container, Content } from './styles';

export default class Post extends Component {
  static propTypes = {
    data: PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
      }),
      date: PropTypes.string,
      content: PropTypes.string,
      comments: PropTypes.array,
    }).isRequired,
  };

  render() {
    const { data } = this.props;
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
}
