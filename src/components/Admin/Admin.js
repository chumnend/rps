import React, { useEffect, useRef, useState } from 'react';

import Loader from '../../common/components/Loader';
import { useFirebase } from '../../services/firebase';
import Layout from './components/Layout';
import List from './components/List';
import ListItem from './components/ListItem';
import ListTitle from './components/ListTitle';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);

  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    const getUsers = async () => {
      const users = await firebaseRef.current.findUsers();
      setUsers(users);
    };

    const getGames = async () => {
      const games = await firebaseRef.current.findGames();
      setGames(games);
    };

    getUsers();
    getGames();

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
    <Layout>
      <List>
        <ListTitle>Users</ListTitle>
        {userList}
      </List>
      <br />
      <List>
        <ListTitle>Games</ListTitle>
        {gameList}
      </List>
    </Layout>
  );
};

export default Admin;
