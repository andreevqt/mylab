import * as React from 'react'
import {type HeadFC, type PageProps} from 'gatsby'
import {Layout} from '../layout'
import {Nav} from '../components/nav';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Рекламные технологии Яндекса</h1>
      <Nav.Container>
        <Nav.Item to="/banner/">Баннеры</Nav.Item>
        <Nav.Item to="/fullscreen/">Полноэкранный</Nav.Item>
        <Nav.Item to="/floor-ad/" >Floor Ad</Nav.Item>
        <Nav.Item to="/feed/">Лента</Nav.Item>
      </Nav.Container>
    </Layout>
  )
};

export default IndexPage;

export const Head: HeadFC = () => <title>Главная</title>;
