import React, { useState, useEffect, useRef } from 'react';
import Loader from '../../components/Loader';
import { useFirebase } from '../../store/firebase';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current.users().then((snapshot) => {
      const foundUsers = [];
      snapshot.forEach((doc) => {
        foundUsers.push(doc.data());
      });
      setUsers(foundUsers);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      <h3>Users:</h3>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.username} - {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
