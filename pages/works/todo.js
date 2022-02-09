import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Todo">
    <Container>
      <Title>
        Todo <Badge>2021-</Badge>
      </Title>
      <P>
        A beautifully animated todo app using React,Redux and framer-motion
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://todo-app-sepia-tau.vercel.app/">
          https://todo-app-sepia-tau.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux, Framer-Motion</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/todo.png" alt="todo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
