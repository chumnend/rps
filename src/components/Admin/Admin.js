import React, { useEffect, useRef, useState } from 'react';

import { useFirebase } from '../../services/firebase';
import { useToast } from '../../services/toast';
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
  const toast = useToast();

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

  const deleteUser = async (id) => {
    toast.addMessage('This feature is not implemented');
  };

  const deleteGame = async (id) => {
    const success = await firebase.deleteGame(id);

    if (success) {
      window.location.reload();
    } else {
      toast.addMessage('Failed to delete game');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <UserList users={users} deleteUser={deleteUser} />
      <br />
      <GameList games={games} deleteGame={deleteGame} />
    </Layout>
  );
};

export default Admin;
