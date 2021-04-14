import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { device } from '../themes';
import GamesListItem from './GamesListItem';

// Styles =================================================
const StyledGamesList = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media all and (min-width: ${device.sm}) {
    padding: 0 2rem;
  }

  @media all and (min-width: ${device.md}) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (min-width: ${device.lg}) {
    padding: 0;
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (min-width: ${device.xl}) {
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Component ==============================================
const GamesList = (props) => {
  if (props.games.length === 0) {
    return <p>No games have been created.</p>;
  }

  return (
    <StyledGamesList>
      {props.games.map((g) => (
        <GamesListItem
          key={g.id}
          id={g.id}
          name={g.name}
          handleJoin={props.handleJoin}
        />
      ))}
    </StyledGamesList>
  );
};

GamesList.propTypes = {
  games: PropTypes.array,
  handleJoin: PropTypes.func,
};

export default GamesList;
