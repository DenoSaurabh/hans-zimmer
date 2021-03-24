import { useState } from 'react';
import { Flex, GridItem, Heading, Text } from '@chakra-ui/react';
import { MotionFlex, MotionBox, MotionGrid } from '@components/index';

interface FilmBoxI {
  title: string;
  year: number;
  award: string;
  nomination: string;
  image: string;
  label: string;
}

const FilmBox = ({
  title,
  year,
  award,
  nomination,
  image,
  label
}: FilmBoxI) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <MotionGrid
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <GridItem
        rowStart={1}
        rowEnd={2}
        colStart={1}
        colEnd={2}
        alignSelf="center"
        justifySelf="center"
        w="100%"
        h="100%"
      >
        <Flex justifyContent="center" alignItems="center" w="100%" h="100%">
          <MotionBox
            width="100%"
            style={{ width: '100%' }}
            initial={{ height: '0' }}
            animate={isHovered ? { height: '100%' } : {}}
            transition={{ ease: 'linear', duration: 0.4 }}
            id={label}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              objectFit: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transformOrigin: 'center',
              alignSelf: 'center',
              justifySelf: 'center'
            }}
          />
        </Flex>
      </GridItem>
      <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={2}>
        <MotionFlex
          height="auto"
          justifyContent="space-between"
          paddingY="8"
          placeItems="center"
          borderTopWidth="thin"
          borderTopColor="grey.light"
          initial={{}}
          animate={
            isHovered
              ? {
                  paddingLeft: '32px',
                  paddingRight: '32px'
                }
              : {}
          }
          transition={{ ease: 'easeOut', duration: 0.4 }}
        >
          <Flex alignItems="center">
            <Heading
              fontSize={{ base: '4xl', lg: '6xl', xl: '8xl' }}
              marginRight="10%"
            >
              {year}&nbsp;/
            </Heading>
            <Text
              fontSize={{ base: 'md', lg: 'xl', xl: 'x-large' }}
              fontWeight="normal"
            >
              {award}
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="flex-end" textAlign="right">
            <Heading fontSize={{ base: '2xl', lg: '4xl', xl: '5xl' }}>
              {title}
            </Heading>
            <Text variant="semibold">{nomination}</Text>
          </Flex>
        </MotionFlex>
      </GridItem>
    </MotionGrid>
  );
};

export default FilmBox;
