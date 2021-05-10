import PropTypes from 'prop-types';

import * as Styles from './styles';

const UserList = ({ users, deleteUser }) => {
  return (
    <Styles.List>
      {users.map((u) => (
        <Styles.ListItem key={u.id}>
          <p>
            {u.username} {u.email}
          </p>
          <button onClick={() => deleteUser(u.id)}>Delete</button>
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
};

export default UserList;
