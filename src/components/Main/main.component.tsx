import { Box, Heading, Text } from '@chakra-ui/react'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <>
      <Box as="section">
        <Box
          maxW="3xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading
            my="4"
            as="h2"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="1.2"
          >
            Seja bem-vindo ao {' '}
            <Text
              display={{ base: 'block', lg: 'inline' }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              Scrum Poker{' '}
            </Text>
            de mindingo{' '}
          </Heading>
          <Text fontSize="lg" maxW="xl" mx="auto">
            Em breve...
          </Text>
        </Box>
      </Box>
    </>
  )
}

export { Main }
