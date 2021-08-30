import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import Carbon from '../../images/homepage-01.svg';
import Banner from '../../components/banner/Banner.js'

const FirstLeftText = () => <p>Elyra AI and Elyra Canvas</p>;

const FirstRightText = () => (
  <p>
    The Elyra experience is used to visualize relational systems. Elyra AI builds and simplifies pipelines and the Elyra Canvas creates a node-based visual that allows for connection and property configuration.
    <a
      className={calloutLink}
      href="/what-is-this">
      Learn more →
    </a>
  </p>
);

const SecondLeftText = () => <p>Contribute</p>;

const SecondRightText = () => (
  <p>
     Would you like to add to the Elyra experience? Join our community. You can submit contributions by clicking below.
     <a
      className={calloutLink}
      href="/what-is-this">
      Submit →
    </a>
  
  </p>
);

const BannerText = () => <h1>Welcome to Elyra</h1>;

const customProps = {
  Banner: <Banner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="black"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#393939"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
