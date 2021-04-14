import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { device, layout } from '../themes';

// Styles =================================================
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

// Component ==============================================
const Page = (props) => {
  return <StyledPage {...props}>{props.children}</StyledPage>;
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
