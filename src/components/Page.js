import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device, layout } from '../themes';

const Page = (props) => {
  return <StyledPage>{props.children}</StyledPage>;
};

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - ${layout.headerHeight});
  padding: 1rem 0;

  @media all and (min-width: ${device.md}) {
    width: 80%;
    margin: 0 auto;
  }
`;

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
