import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Loading } from './styles';

export default class Comment extends Component {
  static propTypes = {
    data: PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
      }),
      content: PropTypes.string,
    }).isRequired,
  };

  state = {
    data: {},
    loading: true,
  };

  async componentDidMount() {
    const { data } = this.props;

    this.setState({ data, loading: false });
  }

  render() {
    const { loading, data } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

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
}
