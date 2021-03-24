import React from 'react';

import { Page } from '@layouts/index';
import { Heading, Information } from '@components/index';

import { ImgDescription, Releases, Latests } from '@shared/home/index';

const Home = () => {
  return (
    <Page>
      <Heading
        mainTitle={{ text: 'HANS' }}
        subTitle={{ text: 'ZIMMER' }}
        description={{
          top: 'A GERMAN BORN FILM',
          mid: 'SCORE COMPOSER AND',
          bottom: 'RECORD PRODUCER',
          paddingTop: '4'
        }}
      />
      <ImgDescription />
      <Releases />
      <Latests />
      <Information />
    </Page>
  );
};

export default Home;
