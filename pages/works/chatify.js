import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Chatify">
    <Container>
      <Title>Chatify</Title>
      <P>
        A realtime chat application using chatengine with private rooms and
        attachments upload functionality
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://chatify-zeta.vercel.app/">
            https://chatify-zeta.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, Chatengine</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/chatify.png" alt="chatify" />
      <WorkImage src="/images/works/chatify_chat.png" alt="chatify" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
