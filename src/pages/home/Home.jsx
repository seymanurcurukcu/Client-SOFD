import React from 'react'
import Content1 from '../../components/content1/Content1';
import Content2 from '../../components/content2/Content2';
import Content3 from '../../components/content3/Content3';
import ChartsButtons from '../../components/graphcontent/ChartsButtons';
import { Container, Row, Col } from 'react-bootstrap';
import Content4 from '../../components/content4/Content4';
import Graphcontent from '../../components/graphcontent/Graphcontent';
import ViopMessage from '../../components/graphcontent/viop';

import Content5 from '../../components/content5/Content5';
import Feeds from '../../components/Feed/Feeds';
import ProjectTables from '../../components/ProjectTable/ProjectTable'

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

        <ViopMessage/>
      </Container>
      <div className='py-4'></div>
      {/* <Content5/>
      <div className='py-4'></div>

    */}
      <div className='my-4'>
        <Container fluid className='px-4'>
          <Row>
            <Col lg={7} xxl={8} md={12}>
              <ProjectTables />
            </Col>
            <Col md={12} lg={5} xxl={4}>
              <Feeds />
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Home