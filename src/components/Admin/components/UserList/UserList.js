import PropTypes from 'prop-types';

import * as Styles from './styles';

const UserList = ({ users, deleteUser }) => {
  return (
    <Styles.List>
      {users.map((u) => (
        <Styles.ListItem key={u.id}>
          <Styles.Card>
            <p>{u.username}</p>
            <p>{u.email}</p>
          </Styles.Card>
          <Styles.Button onClick={() => deleteUser(u.id)}>Delete</Styles.Button>
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
