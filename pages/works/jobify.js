import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Jobify">
    <Container>
      <Title>
        Jobify <Badge>2021-</Badge>
      </Title>
      <P>
        A MERN stack web application that allows you to track your job searching
        process
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jobify-deploy.herokuapp.com/">
            https://jobify-deploy.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, React ContextAPI, NodeJS, ExpressJS, Mongodb</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/jobify_landing.png" alt="jobify" />
      <WorkImage src="/images/works/jobify.png" alt="jobify" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
