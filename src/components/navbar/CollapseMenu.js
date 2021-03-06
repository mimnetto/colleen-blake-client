import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const {open} = useSpring({
    open: props.navbarState
      ? 0
      : 1
  });

  if (props.navbarState === true) {
    return (<CollapseWrapper style={{
        transform: open.interpolate({
          range: [
            0, 0.2, 0.3, 1
          ],
          output: [0, -20, 0, -200]
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
      }}>
        <NavLinks>
          <li>
            <AnchorLink className="burg" offset={() => 100} href='#story' onClick={props.handleNavbar}>Our Story</AnchorLink>
          </li>
          <li>
            <AnchorLink className="burg" offset={() => 100} href='#travel' onClick={props.handleNavbar}>Travel</AnchorLink>
          </li>
          <li>
            <AnchorLink className="burg" offset={() => 100} href='#hotel' onClick={props.handleNavbar}>Accommodations</AnchorLink>
          </li>
          <li>
            <AnchorLink className="burg" offset={() => 100} href='#party' onClick={props.handleNavbar}>Party</AnchorLink>
          </li>
          <li>
            <AnchorLink className="burg" offset={() => 100} href='#reg' onClick={props.handleNavbar}>Registry</AnchorLink>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: linear-gradient(135deg, rgba(48,3,7,0.9015938395415473) 0%, rgba(106,21,28,0.9044591690544412) 51%, rgba(102,14,22,0.8987285100286533) 100%);
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #cec79f;
      border-bottom: 1px solid #cec79f;
    }
  }
`;
