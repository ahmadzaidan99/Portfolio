import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Medium">
    <Container>
      <Title>
        Medium
      </Title>
      <P>
      Medium clone which is a blog website using NextJS, Tailwind CSS and Sanity CMS
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://medium-clone-theta.vercel.app/">
          https://medium-clone-theta.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Tailwind CSS, Sanity CMS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/medium.png" alt="medium" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
