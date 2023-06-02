import './App.css';
import styled from "@emotion/styled/macro";
import Skeleton from './components/Skeleton';
import { useEffect, useState } from 'react';

const Base = styled.div`
  display:grid;
  width: 100%;
  grid-template-columns: repeat(5,1fr);
  column-gap: 12px;
  row-gap:24px;
`;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  box-shadow:rgb(0 0 0 /)
`;

const ImageWrapper = styled.div``;

const Image = styled.img``;

const Info = styled.div``;

const Title = styled.h4``;

const Description  = styled.p``;

const Placeholder: React.FC = () =>(
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height = {220}/>
    </ImageWrapper>
    <Info>
    <Skeleton width={150} height = {29} rounded/>
    <div style={{height:'8px'}}></div>
    <Skeleton width={200} height = {19} rounded/>
    </Info>
  </Container>
)

const Item: React.FC = ()=>{
  return(
    <Container>
      <ImageWrapper>
        <Image/>
      </ImageWrapper>
      <Info>
        <Title>Cat taking a nap</Title>
        <Description>zzzzzzzzzzzzzz</Description>
      </Info>
    </Container>
  )
}

function App() {

  const [loading,setLoading] = useState<boolean>(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),2000);
  },[])

  return (
    <Base>
      {
        loading ? Array.from({length:25}).map((_,idx)=>(
          <Placeholder key={idx}/>
        )) :
        Array.from({length:25}).map((_,idx)=>(
          <Item key={idx}/>
        ))
      }
    </Base>
  );
}

export default App;
