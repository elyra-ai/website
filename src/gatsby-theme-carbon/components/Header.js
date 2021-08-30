import React, { useContext } from 'react';
import {
  Header as ShellHeader,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SkipToContent,
} from 'carbon-components-react';
import cx from 'classnames';

import GlobalSearch from 'gatsby-theme-carbon/src/components/GlobalSearch';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';

import {
  collapsed,
  header,
  headerButton,
  skipToContent,
} from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';
import { useRef, useEffect } from 'react';
import elyraConfig from '../../../cdai-config.json';

const Title = () => <>Elyra</>;
const titleUrl = 'https://quarryboy.github.io/elyra-ai-site/';

const redirect = param => e => {
  if (window) {
    window.location.href = titleUrl + param;
  }
}

const NavMenu = () => {
  const styleEl = useRef();
  useEffect(() => {
    const idx = {'/ai':1,'/canvas':2}[elyraConfig.repo.replace('elyra','')];
    styleEl.current.innerHTML = `<style>
.bx--header__menu-bar > li > a:not(:focus) { border-left-width: 0; border-right-width: 0; padding: 0 calc(1rem + 2px); }
.bx--header__menu-bar > li:nth-child(${idx}) > a:not(:focus) { border-bottom: 2px solid #4589ff; }
</style>`}, [styleEl]);

  // NOTE: UPDATE THE ABOVE OBJECT AS WELL
  return (<>
  <div ref={styleEl}></div>

  <HeaderNavigation aria-label="Versions">
 
  
  </HeaderNavigation>
</>);
}

// START COPY FROM https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/gatsby-theme-carbon/src/components/Header/Header.js#L27
const Header = () => {
  const {
    leftNavIsOpen,
    toggleNavState,
    searchIsOpen,
  } = useContext(NavContext);
  const { isSearchEnabled } = useMetadata();

  return (
    <>
      <ShellHeader aria-label="Header" className={header}>
        <SkipToContent href="#main-content" className={skipToContent} />
        <HeaderMenuButton
          className={cx('bx--header__action--menu', headerButton)}
          aria-label="Open menu"
          onClick={() => {
            toggleNavState('leftNavIsOpen');
            toggleNavState('switcherIsOpen', 'close');
          }}
          isActive={leftNavIsOpen}
        />

        <HeaderName href={titleUrl} prefix="" className={cx({
          [collapsed]: searchIsOpen,
        })}>
          <Title></Title>
        </HeaderName>

        <NavMenu />

        <HeaderGlobalBar>
          {isSearchEnabled && <GlobalSearch />}
         
        </HeaderGlobalBar>
      </ShellHeader>
    </>
  );
};

const DefaultHeaderText = () => (
  <>
    Cloud &amp; Cognitive&nbsp;<span>Design</span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;