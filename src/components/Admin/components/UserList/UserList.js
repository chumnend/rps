import PropTypes from 'prop-types';

import * as Styles from './styles';

const UserList = ({ users }) => {
  return (
    <Styles.List>
      {users.map((u) => (
        <Styles.ListItem key={u.id}>
          {u.username} - {u.email}
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
};

export default UserList;
