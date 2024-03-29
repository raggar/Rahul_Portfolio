import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { portfolioTheme } from 'common/src/theme';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/Portfolio/portfolio.style';

import BannerSection from '../containers/Portfolio/Banner';
import Navbar from '../containers/Portfolio/Navbar';
import AwardsSection from '../containers/Portfolio/Awards';
import PortfolioShowcase from '../containers/Portfolio/PortfolioShowcase';
import ProcessSection from '../containers/Portfolio/Process';
import ClientsSection from '../containers/Portfolio/Clients';
import ContactSection from '../containers/Portfolio/Contact';
import Footer from '../containers/Portfolio/Footer';

export default () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Head>
        <title>Rahul Aggarwal</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#ec5555" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
          rel="stylesheet"
        />
      </Head>

      <ResetCSS />
      <GlobalStyle />

      <ContentWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </Sticky>
        <BannerSection />
        <PortfolioShowcase />
        <AwardsSection />
        <ProcessSection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
};
