import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Coinbase">
    <Container>
      <Title>
        Coinbase
      </Title>
      <P>
      Coinbase clone using thirdweb,Sanity CMS,NextJS and styled components
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://coinbase-clone-topaz.vercel.app/">
          https://coinbase-clone-topaz.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, thirdweb, Sanity CMS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/coinbase_home.png" alt="coinbase" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
