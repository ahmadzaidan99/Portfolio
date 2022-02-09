import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Amazon">
    <Container>
      <Title>
        Amazon
      </Title>
      <P>
        A React clone for amazon with stripe integration
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://clone-ab4cb.web.app/">
          https://clone-ab4cb.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, Redux, Firebase, Stripe</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/amazon_home.png" alt="amazon" />
      <WorkImage src="/images/works/amazon_basket.png" alt="amazon" />
      <WorkImage src="/images/works/amazon_checkout.png" alt="amazon" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
