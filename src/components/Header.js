import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import * as ROUTES from '../constants/routes';
import styled from 'styled-components';
import { device, layout } from '../themes';

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Icon classname="fas fa-home" title="Home" to={ROUTES.LANDING} />
        <StyledNav>
          <StyledUl>
            {props.auth.user && (
              <StyledLi>
                <Icon
                  classname="fas fa-user"
                  title="Account"
                  to={ROUTES.ACCOUNT}
                />
              </StyledLi>
            )}
            {props.auth.user && props.auth.user.admin && (
              <StyledLi>
                <Icon
                  classname="fas fa-user-shield"
                  title="Admin"
                  to={ROUTES.ADMIN}
                />
              </StyledLi>
            )}
            {props.auth.user && (
              <StyledLi>
                <Icon
                  classname="fas fa-sign-out-alt"
                  title="Sign Out"
                  to={ROUTES.LOGOUT}
                />
              </StyledLi>
            )}

            {!props.auth.user && (
              <StyledLi>
                <Icon
                  classname="fas fa-user-plus"
                  title="Sign Up"
                  to={ROUTES.SIGN_UP}
                />
              </StyledLi>
            )}
            {!props.auth.user && (
              <StyledLi>
                <Icon
                  classname="fas fa-sign-in-alt"
                  title="Sign In"
                  to={ROUTES.SIGN_IN}
                />
              </StyledLi>
            )}
          </StyledUl>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: ${layout.headerHeight};
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
`;

const StyledContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  height: 100%;
`;

const StyledUl = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;

  @media all and (min-width: ${device.lg}) {
    gap: 1rem;
  }
`;

const StyledLi = styled.li`
  height: 100%;
`;

Header.propTypes = {
  auth: PropTypes.object,
};

export default Header;
