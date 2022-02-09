import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Netflix">
    <Container>
      <Title>
        Netflix
      </Title>
      <P>
      Netflix Clone using React, styled components and Stripe
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://netflix-clone-flame-two.vercel.app/">
          https://netflix-clone-flame-two.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/netflix.png" alt="medium" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
