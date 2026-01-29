import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const url = import.meta.env.VITE_BACKEND_URI;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getUsers = async () => {
    console.log('getusers url : ',url);
    
    try {
      const response = await axios.get(`${url}/users/all`);
      console.log('getusers response : ',response.data.users);
      setUsers(response.data.users);
    } catch (err) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Users</h1>

      {loading && (
        <p className="text-center text-gray-500">Loading users...</p>
      )}

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.length>0 && users.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition"
          >
            {/* <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
              {user.email.charAt(0).toUpperCase()}
            </div> */}

            <p className="text-gray-800 text-sm break-all">
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
