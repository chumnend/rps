import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { color, device } from '../themes';

// Styles =================================================
const StyledIcon = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  text-decoration: none;
  padding: 0.5rem;

  i {
    font-size: 1.5rem;
    padding: 0.3rem;
  }

  p {
    font-size: 0.8rem;
  }

  @media all and (min-width: ${device.md}) {
    i {
      font-size: 2rem;
    }
  }

  @media all and (min-width: ${device.md}) {
    i {
      font-size: 2rem;
    }
  }
`;

// Component ==============================================
const Icon = (props) => {
  return (
    <StyledIcon to={props.to}>
      <i className={props.classname} />
      <p>{props.title}</p>
    </StyledIcon>
  );
};

Icon.propTypes = {
  to: PropTypes.string,
  classname: PropTypes.string,
  title: PropTypes.string,
};

export default Icon;
