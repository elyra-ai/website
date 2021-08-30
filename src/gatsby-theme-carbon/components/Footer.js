import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import pageContext from '../pageContext';
import cdaiConfig from '../../../cdai-config.json';


const Content = ({ buildTime }) => (
  <>
    <p>
      Most recently updated: {buildTime}
    </p>
    <p><a href={`https://github.com/${cdaiConfig.repo}/editor/?page=src/pages${pageContext.relativePagePath}`}>Edit this page</a></p>
  </>
);

const links = {
  firstCol: [
  ],
  secondCol: [
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
