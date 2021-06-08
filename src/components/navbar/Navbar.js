import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const Barbot = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 900,
    config: config.wobbly,
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });


  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <AnchorLink offset='110' href='#wedding'>Wedding</AnchorLink>
            <AnchorLink offset='120' href='#travel'>Travel</AnchorLink>
            <AnchorLink offset='120' href='#hotel'>Accommodations</AnchorLink>
            <AnchorLink offset='120' href='#story'>Our Story</AnchorLink>
            <AnchorLink offset='120' href='#party'>Party</AnchorLink>
            <AnchorLink offset='120' href='#registry'>Registry</AnchorLink>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(48,3,7) 0%, rgba(106,21,28) 51%, rgba(102,14,22) 100%);
  z-index: 10;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 3.5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: inherit;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-size: 62.5%;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 .5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #cec79f;
      border-bottom: 1px solid #cec79f;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
