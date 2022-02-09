import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="airbnb">
    <Container>
      <Title>Airbnb</Title>
      <P>A React clone for Airbnb with search functionality</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://airbnb-clone-7fe6e.web.app/">
            https://airbnb-clone-7fe6e.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/airbnb_home.png" alt="airbnb" />
      <WorkImage src="/images/works/airbnb_search.png" alt="airbnb" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
