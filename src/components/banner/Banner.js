import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ArrowRight20 } from '@carbon/icons-react';
import { Grid, Row, Column } from 'gatsby-theme-carbon';

import {
  column,
  row,
  grid,
  containerCta,
  cta,
  arrowContainer,
  ctaIcon,
} from './Banner.module.scss';

const StyledGrid = styled(Grid)`
  max-width: 100%;
  background-image: url(${(props) => props.image});
  background-position: ${(props) =>
    props.position ? props.position : 'center'};
`;

const HomepageBanner2 = ({ image, position, renderText }) => (
  <StyledGrid className={grid} position={position} image={image}>
    <Row className={row}>
      <Column colMd={4} colLg={6} className={column}>
        {renderText()}
      </Column>
      <Column colMd={2} colLg={3} colXl={3} colMax={3} className={containerCta}>
        <Link className={cta} to="/getting-started-ai/elyra-overview">
          <p>AI</p>
          <div className={arrowContainer}>
            <ArrowRight20 className={ctaIcon} />
          </div>
        </Link>
      </Column>
      <Column colMd={2} colLg={3} colXl={3} colMax={3} className={containerCta}>
        <Link className={cta} to="/getting-started/elyra-canvas-overview">
          <p>Canvas</p>
          <div className={arrowContainer}>
            <ArrowRight20 className={ctaIcon} />
          </div>
        </Link>
      </Column>
    </Row>
  </StyledGrid>
);

export default HomepageBanner2;