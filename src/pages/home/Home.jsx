import React from 'react'
import Content1 from '../../components/content1/Content1';
import Content2 from '../../components/content2/Content2';
import Content3 from '../../components/content3/Content3';
import ChartsButtons from '../../components/graphcontent/ChartsButtons';
import { Container } from 'react-bootstrap';
import Content4 from '../../components/content4/Content4';
import Graphcontent from '../../components/graphcontent/Graphcontent';
import Content5 from '../../components/content5/Content5';

const Home = () => {
 
  return (
    <>
      <div className='mb-4'>
        <Content1 />
      </div>
      <div className='py-4'></div>   
      <div className='my-4'>
        <Content3 />
      </div>
      <div className='my-4'>
        <Content2 />
      </div>
      <div className='py-4'></div>

      <Container className='my-4'>

        <Graphcontent/>
      </Container>
      <div className='py-4'></div>
      <Content5/>
      <div className='py-4'></div>

   
      <div className='my-4'>
        <Content4 />
      </div>
      
    </>
  )
}

export default Home