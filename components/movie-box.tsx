import { Flex, Text, Image } from '@chakra-ui/react';
import { MotionHeading } from '@components/index';

interface MovieBoxProps {
  year: number;
  image: string;
  label: string;
  title: string;
  job: string;
  index: number;
}

const MovieBox = ({ year, image, title, job, label, index }: MovieBoxProps) => {
  return (
    <Flex
      height="auto"
      // templateColumns="repeat(3, max-content)"
      paddingY="6"
      borderBottomColor="grey.light"
      borderBottomWidth="thin"
      placeItems="center"
      borderTopWidth={index === 0 ? 'thin' : ''}
      borderTopColor={index === 0 ? 'grey.light' : ''}
    >
      <Text
        fontFamily="heading"
        fontSize="2xl"
        marginRight={{ base: '4%', sm: '5%', md: '10%' }}
      >
        {year}
      </Text>
      <Image
        htmlWidth="20%"
        htmlHeight="100%"
        objectFit="cover"
        justifySelf="flex-start"
        src={`/assets/${image}`}
        alt={label}
        marginRight={{ base: '10%', lg: '15%' }}
      />
      <Flex flexDirection="column">
        <MotionHeading
          wordBreak="break-all"
          fontSize={{ base: 'lg', sm: 'xl', lg: '4xl' }}
        >
          {title}
        </MotionHeading>
        <Text fontSize={{ base: 'xs', md: 'sm' }} variant="semibold">
          {job}
        </Text>
      </Flex>
    </Flex>
  );
};

export default MovieBox;
