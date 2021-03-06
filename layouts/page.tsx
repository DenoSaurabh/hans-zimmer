import { NextSeo } from 'next-seo';

import PageTransition from '@layouts/page-transition';
import SmoothScroll from '@layouts/smooth-scroll';
import { Header, Footer } from '@components/index';

interface PageI {
  children: JSX.Element[];
  seo: Record<string, unknown>;
}

const Page = ({ children, seo }: PageI) => {
  return (
    <>
      <NextSeo {...seo} titleTemplate="%s | Hans Zimmer" />
      <PageTransition />
      <Header />
      <SmoothScroll>{children}</SmoothScroll>
      <Footer />
    </>
  );
};

export default Page;
