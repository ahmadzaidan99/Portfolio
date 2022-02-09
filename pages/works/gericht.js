import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Gericht">
    <Container>
      <Title>
        Gericht 
      </Title>
      <P>
        A React landing page implementation based on an open-source figma design
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="gericht-landing-page.vercel.app">
          gericht-landing-page.vercel.app <ExternalLinkIcon mx="2px" />
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
      <WorkImage src="/images/works/gericht.png" alt="gericht" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
