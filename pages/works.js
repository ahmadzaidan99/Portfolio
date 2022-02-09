import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbJnotebook from '../public/images/works/jnotebook.png';
import thumbTodo from '../public/images/works/todo.png';
import thumbGericht from '../public/images/works/gericht.png';
import thumbChatify from '../public/images/works/chatify.png';
import thumbAmazon from '../public/images/works/amazon.png';
import thumbAirbnb from '../public/images/works/airbnb.png';
import thumbLinked from '../public/images/works/linkedin.png';
import thumbCoinbase from '../public/images/works/coinbase.png';
import thumbMedium from '../public/images/works/medium.png';
import thumbNetflix from '../public/images/works/netflix.png';
import thumbJobify from '../public/images/works/jobify.png';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="jnotebook"
            title="Jnotebook"
            thumbnail={thumbJnotebook}
          >
            An online compiler for React.js and javascript
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="jobify" title="Jobify" thumbnail={thumbJobify}>
            A job tracking fullstack web application
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="todo" title="Todo App" thumbnail={thumbTodo}>
            An animated todo reactjs build
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="gericht" title="Gericht" thumbnail={thumbGericht}>
            A beautifully designed landing page for a restaurant
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="chatify" thumbnail={thumbChatify} title="Chatify">
            A real-time chatting web application
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Clones
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="linkedin" thumbnail={thumbLinked} title="Linkedin">
            Fully-Responsive Linkedin Clone
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="medium" thumbnail={thumbMedium} title="Medium">
            Medium blog Nextjs clone
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amazon" thumbnail={thumbAmazon} title="Amazon">
            Fully functional Amazon clone(E-commerce website)
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="airbnb" thumbnail={thumbAirbnb} title="Airbnb">
            Airbnb clone with mapbox integration
          </WorkGridItem>
        </Section>
        <Section delay={0.7}>
          <WorkGridItem
            id="coinbase"
            thumbnail={thumbCoinbase}
            title="Coinbase"
          >
            Coinbase clone with thirdWeb integration
          </WorkGridItem>
        </Section>
        <Section delay={0.7}>
          <WorkGridItem id="netflix" thumbnail={thumbNetflix} title="Netflix">
            Netflix clone with stripe and subscriptions
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from '../components/chakra';
