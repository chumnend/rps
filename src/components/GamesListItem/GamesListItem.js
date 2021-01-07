import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import * as Styles from './styles';

const GamesListItem = (props) => {
  const handleClick = () => {
    props.handleJoin(props.id);
  };

  return (
    <Styles.GamesListItem>
      <p>{props.name}</p>
      <Button theme="secondary" onClick={handleClick}>
        Join
      </Button>
    </Styles.GamesListItem>
  );
};

GamesListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  handleJoin: PropTypes.func,
};

export default GamesListItem;
