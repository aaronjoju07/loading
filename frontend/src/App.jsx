import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const details = { username, password };
    console.log(details);

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
      });

      const result = await response.json();
      setMessage(result.message); 

      console.log(result);  
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>{
    <h1>{message}</h1>
    }
    <div className="App">
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
          </>
  );
}

export default App;