import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
import thumbYouTube from '../public/images/links/youtube.png';
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Jordan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ahmad Zaidan
          </Heading>
          <p>Full-Stack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Ahmad.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Ahmad is a freelance full-stack developer based in Jordan with a
          passion for building digital services/stuff he wants. He has a knack
          for all things about launching products, from planning and designing all the
          way to solving real-life problems with code.
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="https://pdfhost.io/v/kHNOgJIaq_CV" target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Amman, Jordan.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Dynamics Innovations
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the Bachelor&apos;s Program in Computer Engineering
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Works as a freelance full-stack developer
        </BioSection>
        <BioSection>
          <BioYear>Dec 2021 to present</BioYear>
          Works as a React.js developer at Arcelik
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Sports, Trading, Machine Learning, Reading</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ahmadzaidan99" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @ahmadzaidan99
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ahmadzaidannn" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @ahmadzaidannn
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
