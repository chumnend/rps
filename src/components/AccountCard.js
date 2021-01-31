import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, device } from '../themes';

// Styles =================================================
const StyledAccountCard = styled.div`
  width: 100%;
  background: ${color.white};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: ${device.md}) {
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
  }

  @media all and (min-width: ${device.lg}) {
    width: 60%;
    margin: 0 auto;
    border-radius: 5px;
  }
`;

// Component ==============================================
const AccountCard = (props) => {
  return (
    <StyledAccountCard>
      <h3>Account Details</h3>
      <p>Username: {props.user.username}</p>
      <p>Email: {props.user.email}</p>
      <br />
      <h3>Statistics</h3>
      <p>Wins: {props.user.wins}</p>
      <p>Losses: {props.user.losses}</p>
    </StyledAccountCard>
  );
};

AccountCard.propTypes = {
  user: PropTypes.object,
};

export default AccountCard;
