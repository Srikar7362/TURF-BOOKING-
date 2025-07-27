// import { useState } from 'react';

// function Login({ onLogin, onRegister, users }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = users.find(u => u.username === username && u.password === password);
//     if (!user) {
//       setError('Invalid username or password');
//       return;
//     }
//     setError('');
//     onLogin(username);
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       background: 'linear-gradient(120deg, #38ef7d 0%, #11998e 100%)'
//     }}>
//       <div style={{
//         background: 'white',
//         padding: '40px 30px',
//         borderRadius: '18px',
//         boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
//         minWidth: '320px'
//       }}>
//         <h2 style={{ textAlign: 'center', color: '#11998e' }}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '8px',
//               border: '1px solid #38ef7d',
//               marginBottom: '12px',
//               fontSize: '1rem'
//             }}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '8px',
//               border: '1px solid #38ef7d',
//               marginBottom: '18px',
//               fontSize: '1rem'
//             }}
//           />
//           {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
//           <button
//             type="submit"
//             style={{
//               width: '100%',
//               padding: '10px',
//               background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '1.1rem',
//               cursor: 'pointer',
//               fontWeight: 600
//             }}
//           >
//             Login
//           </button>
//         </form>
//         <div style={{ marginTop: '16px', textAlign: 'center' }}>
//           <span>New user? </span>
//           <button
//             onClick={onRegister}
//             style={{
//               background: 'none',
//               border: 'none',
//               color: '#11998e',
//               textDecoration: 'underline',
//               cursor: 'pointer',
//               fontWeight: 600
//             }}
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Login;
import { useState } from 'react';

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Login successful!');
        onLogin(username);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch {
      setMessage('Server error');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(120deg, #38ef7d 0%, #11998e 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '48px 36px',
        minWidth: '340px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#11998e', marginBottom: '24px', fontSize: '2rem' }}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '1.5px solid #38ef7d',
              marginBottom: '16px',
              fontSize: '1rem'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '1.5px solid #38ef7d',
              marginBottom: '18px',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1.1rem',
              fontWeight: 700,
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            Login
          </button>
        </form>
        <div style={{ color: message.includes('success') ? 'green' : 'red', marginBottom: '10px', minHeight: '22px' }}>
          {message}
        </div>
        <div>
          <span>New user? </span>
          <button
            onClick={onRegister}
            style={{
              background: 'none',
              border: 'none',
              color: '#11998e',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;