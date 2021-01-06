import React, { useState, useEffect, useRef } from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import ListTitle from '../../components/ListTitle';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import { useFirebase } from '../../store/firebase';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);

  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current
      .users()
      .get()
      .then((snapshot) => {
        const foundUsers = [];
        snapshot.forEach((doc) => {
          foundUsers.push(doc.data());
        });
        setUsers(foundUsers);
      });

    firebaseRef.current
      .games()
      .get()
      .then((snapshot) => {
        const foundGames = [];
        snapshot.forEach((doc) => {
          foundGames.push(doc.data());
        });
        setGames(foundGames);
      });

    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Page>
      <List>
        <ListTitle>Users</ListTitle>
        {users.map((u) => (
          <ListItem key={u.id}>
            {u.username} - {u.email}
          </ListItem>
        ))}
      </List>
      <List>
        <ListTitle>Games</ListTitle>
        {games.map((g) => (
          <ListItem key={g.id}>
            {g.name} - {g.host.username}
          </ListItem>
        ))}
      </List>
    </Page>
  );
};

export default Admin;
