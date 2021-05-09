import React, { useEffect, useRef, useState } from 'react';

import { useFirebase } from '../../services/firebase';
import GameList from './components/GameList';
import Layout from './components/Layout';
import Loader from './components/Loader';
import UserList from './components/UserList';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);

  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    const getUsers = async () => {
      const users = await firebaseRef.current.listUsers();
      setUsers(users);
    };

    const getGames = async () => {
      const games = await firebaseRef.current.listGames();
      setGames(games);
    };

    getUsers();
    getGames();

    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <UserList users={users} />
      <GameList games={games} />
    </Layout>
  );
};

export default Admin;
