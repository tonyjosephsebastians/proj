import { useState } from 'react';
import API from '../api';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [domain, setDomain] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await API.post('/login', { username, password, domain });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full border mb-3 px-3 py-2 rounded"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border mb-3 px-3 py-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <select
          className="w-full border mb-4 px-3 py-2 rounded"
          value={domain}
          onChange={e => setDomain(e.target.value)}
        >
          <option value="">Select Domain</option>
          <option value="domain1">domain1</option>
          <option value="domain2">domain2</option>
        </select>
        <button className="w-full bg-green-700 text-white py-2 rounded" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
