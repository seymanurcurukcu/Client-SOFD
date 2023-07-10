import React from 'react'
import Content1 from '../../components/content1/Content1';
import Content2 from '../../components/content2/Content2';
import Content3 from '../../components/content3/Content3';
import ChartsButtons from '../../components/graphcontent/ChartsButtons';

const Home = () => {
 
  return (
    <>
      <div className='mb-4'>
        <Content1 />
      </div>
      <div className='mb-4'>
        <Content2 />
      </div>
      <div>
        <ChartsButtons/>
      </div>
      <div className='mb-4'>
        <Content3 />
      </div>
      
    </>
  )
}

export default Home