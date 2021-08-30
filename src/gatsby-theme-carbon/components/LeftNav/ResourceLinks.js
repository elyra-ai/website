import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Elyra AI Github',
    href: 'https://github.com/elyra-ai',
  },
  {
    title: 'Elyra Canvas Github',
    href: 'https://github.com/elyra-ai/canvas',
  },
  
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
