import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Movie from '../components/Movie';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Header = styled.div`
  height: 40%;
  background: teal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
`;
const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  margin: 0px 25px;
  position: relative;
  top: -50px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo 2021</Title>
      </Header>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        data.movies && (
          <Movies>
            {data.movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                image={movie.medium_cover_image}
                isLiked={movie.isLiked}
              />
            ))}
          </Movies>
        )
      )}
    </Container>
  );
};

export default Home;
