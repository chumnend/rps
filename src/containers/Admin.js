import React, { useEffect, useRef, useState } from 'react';

import List from '../components/List';
import ListItem from '../components/ListItem';
import ListTitle from '../components/ListTitle';
import Loader from '../components/Loader';
import PageContent from '../components/PageContent';
import useFirebase from '../hooks/useFirebase';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);

  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current
      .getUsers()
      .get()
      .then((snapshot) => {
        const foundUsers = [];
        snapshot.forEach((doc) => {
          foundUsers.push(doc.data());
        });
        setUsers(foundUsers);
      });

    firebaseRef.current
      .getGames()
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

  const userList = users.map((u) => (
    <ListItem key={u.id}>
      {u.username} - {u.email}
    </ListItem>
  ));

  let gameList = <ListItem>No games have been created.</ListItem>;
  if (games.length > 0) {
    gameList = games.map((g) => (
      <ListItem key={g.id}>
        {g.name} - {g.host.username}
      </ListItem>
    ));
  }

  return (
    <PageContent>
      <List>
        <ListTitle>Users</ListTitle>
        {userList}
      </List>
      <br />
      <List>
        <ListTitle>Games</ListTitle>
        {gameList}
      </List>
    </PageContent>
  );
};

export default Admin;
