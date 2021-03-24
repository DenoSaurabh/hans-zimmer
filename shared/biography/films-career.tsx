import { Heading, Flex, Image, Text } from '@chakra-ui/react';
import { MotionFlex, MotionImage } from '@components/index';

const FilmsCareer = () => {
  return (
    <MotionFlex direction="column">
      <Heading fontSize="7xl" marginBottom={16} fontWeight="light">
        FILMS / <br />
        CAREER
      </Heading>
      <Flex
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <MotionFlex width={{ base: '90%', md: '40%' }} direction="column">
          <MotionImage src="/assets/hans-zimmer-award.jpeg" marginBottom="8" />
        </MotionFlex>
        <MotionFlex
          width={{ base: '60%', md: '40%' }}
          marginTop={{ base: 12, md: 0 }}
          alignSelf={{ base: 'flex-end', md: 'unset' }}
          direction="column"
        >
          <MotionImage
            src="/assets/hans-zimmer-glasses.jpeg"
            marginBottom={8}
          />
        </MotionFlex>
      </Flex>

      <Flex
        marginTop={52}
        marginBottom={52}
        justifyContent="center"
        textAlign="center"
      >
        <Heading fontSize="4xl">
          HANS ZIMMER HAS SCORED MORE THAN 200 PROJECTS <br /> ACROSS ALL
          MEDIUMS, WHICH, COMBINED HAVE <br /> GROSSED MORE THAN 28 BILLION
          DOLLARS AT THE <br /> WORLD WIDE BOX OFFICE
        </Heading>
      </Flex>

      <Flex
        justifyContent="center"
        position="relative"
        h={{ base: 'xl', md: '4xl' }}
      >
        <Image
          w={{ base: '80%', md: '60%' }}
          h="full"
          roundedTopLeft="full"
          roundedTopRight="full"
          objectFit="cover"
          src="/assets/hans-zimmer-piano.jpeg"
        />
        <Flex
          position="absolute"
          top="35%"
          left={{ base: '0%', md: '10%' }}
          alignItems="center"
        >
          <Heading
            fontSize={{ base: '4xl', md: '5xl', lg: '8xl' }}
            marginRight={4}
          >
            11&nbsp;/
          </Heading>
          <Text
            fontWeight="normal"
            fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
          >
            OSCAR <br />
            NOMINATIONS
          </Text>
        </Flex>
        <Flex
          position="absolute"
          top="15%"
          right={{ base: '0%', md: '20%' }}
          alignItems="center"
        >
          <Heading
            fontSize={{ base: '4xl', md: '5xl', lg: '8xl' }}
            marginRight={4}
          >
            18&nbsp;/
          </Heading>
          <Text
            fontWeight="normal"
            fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
          >
            GRAMMY <br />
            NOMINATIONS
          </Text>
        </Flex>
        <Flex position="absolute" top="75%" left="45%" alignItems="center">
          <Heading
            fontSize={{ base: '4xl', md: '5xl', lg: '8xl' }}
            marginRight={4}
          >
            14&nbsp;/
          </Heading>
          <Text
            fontWeight="normal"
            fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
          >
            GOLDEN GLOBES <br />
            NOMINATIONS
          </Text>
        </Flex>
      </Flex>
    </MotionFlex>
  );
};

export default FilmsCareer;