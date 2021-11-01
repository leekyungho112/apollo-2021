import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LIKE_MOVIE = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) @client
  }
`;

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  border-radius: 7px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  background: red;
`;

const Movie = ({ id, image, isLiked }) => {
  const [liked] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Image bg={image} />
      </Link>
      <Button onClick={liked}>{isLiked ? 'Unliked' : 'liked'}</Button>
    </Container>
  );
};

export default Movie;
