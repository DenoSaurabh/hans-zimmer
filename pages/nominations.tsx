import { LegacyRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { Page } from '@layouts/index';
import { Heading, Information } from '@components/index';
import { Films, ImgDescription } from '@shared/nominations';

const Home = (): JSX.Element => {
  const filmsRef: LegacyRef<HTMLDivElement> | undefined = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (!filmsRef.current) return;
    if (router.query.to !== filmsRef.current.id) return;

    window.scrollTo(0, filmsRef.current.offsetTop);
  }, [filmsRef, router]);

  return (
    <Page
      seo={{
        title: 'Nominations',
        description: 'Hans Zimmer, Awards Nominations & Films'
      }}
    >
      <Heading
        mainTitle={{
          text: 'NOMINATION',
          fontSize: ['55px', '60px', '90px', '130px', '168px']
        }}
        subTitle={{
          text: 'ARCHIVE',
          justifySelfMobile: 'left',
          fontSize: ['60px', '90px', '100px', '130px', '168px']
        }}
        description={{
          top: 'RECOGNITION FOR',
          mid: 'HANS ZIMMER',
          bottom: '(SELECTION)',
          paddingTop: 4,
          fontSize: { base: 'xl', md: 'lg', lg: '2xl' }
        }}
      />
      <ImgDescription />
      <Films ref={filmsRef} />
      <Information />
    </Page>
  );
};

export default Home;
