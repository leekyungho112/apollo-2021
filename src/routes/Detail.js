import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Movie from '../components/Movie';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      language
      medium_cover_image
      description_intro
      genres
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

const DetailContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
`;
const Info = styled.div`
  margin-left: 10px;
  width: 50%;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`;
const Wrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Lang = styled.span`
  margin-right: 10px;
`;
const Rating = styled.span``;
const Desc = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 40px;
`;
const Genre = styled.ul`
  display: flex;
`;
const Genr = styled.li`
  margin-right: 15px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  width: 40%;
  height: 60%;
`;

const Suggest = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 100%;
  height: 20%;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) },
  });

  return (
    <Container>
      <DetailContainer>
        {loading ? (
          <Loading>loading...</Loading>
        ) : (
          data.movie && (
            <>
              <Info>
                <Title>
                  {data.movie.title}{' '}
                  {data.movie.isLiked ? '좋아요' : '별로입니다'}
                </Title>
                <Wrap>
                  <Lang>{data.movie.language}</Lang>
                  <Rating>{data.movie.rating}</Rating>
                </Wrap>

                <Desc>{data.movie.description_intro}</Desc>
                <Genre>
                  {data.movie?.genres.map((g, index) => (
                    <Genr key={index}>{g}</Genr>
                  ))}
                </Genre>
              </Info>
              <Image bg={data.movie.medium_cover_image} />
            </>
          )
        )}
      </DetailContainer>
      <Suggest>
        {data?.suggestions?.map((item, index) => (
          <Movie
            key={index}
            isLiked={item.isLiked}
            id={item.id}
            image={item.medium_cover_image}
          />
        ))}
      </Suggest>
    </Container>
  );
};

export default Detail;
