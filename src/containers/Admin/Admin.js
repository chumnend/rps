import React, { useState, useEffect, useRef } from 'react';
import Loader from '../../components/Loader';
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
    <div>
      <h1>Admin</h1>
      <h3>Users:</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.username} - {u.email}
          </li>
        ))}
      </ul>
      <h3>Games:</h3>
      <ul>
        {games.map((g) => (
          <li key={g.id}>
            {g.name} - {g.host.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
