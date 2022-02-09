import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Linkedin">
    <Container>
      <Title>
        Linkedin
      </Title>
      <P>
      Linkedin clone using NextJS, Tailwind CSS, NextAuth, Middleware, JWT and Mongodb
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://linkedin-clone-iota-five.vercel.app/">
          https://linkedin-clone-iota-five.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Tailwind CSS, Mongodb</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/linkedin.png" alt="linkedin" />
      <WorkImage src="/images/works/linkedin_home.png" alt="linkedin" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
