// // import { useState } from 'react';

// // function Register({ onRegister, onBack, users }) {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!username || !password) {
// //       setError('All fields are required');
// //       setSuccess('');
// //       return;
// //     }
// //     if (users.some(u => u.username === username)) {
// //       setError('Username already exists');
// //       setSuccess('');
// //       return;
// //     }
// //     setError('');
// //     setSuccess('Registration successful! You can now login.');
// //     onRegister({ username, password });
// //   };

// //   return (
// //     <div style={{
// //       minHeight: '100vh',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       background: 'linear-gradient(120deg, #38ef7d 0%, #11998e 100%)'
// //     }}>
// //       <div style={{
// //         background: 'white',
// //         padding: '40px 30px',
// //         borderRadius: '18px',
// //         boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
// //         minWidth: '320px'
// //       }}>
// //         <h2 style={{ textAlign: 'center', color: '#11998e' }}>Register</h2>
// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             value={username}
// //             onChange={e => setUsername(e.target.value)}
// //             style={{
// //               width: '100%',
// //               padding: '10px',
// //               borderRadius: '8px',
// //               border: '1px solid #38ef7d',
// //               marginBottom: '12px',
// //               fontSize: '1rem'
// //             }}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={e => setPassword(e.target.value)}
// //             style={{
// //               width: '100%',
// //               padding: '10px',
// //               borderRadius: '8px',
// //               border: '1px solid #38ef7d',
// //               marginBottom: '18px',
// //               fontSize: '1rem'
// //             }}
// //           />
// //           {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
// //           {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}
// //           <button
// //             type="submit"
// //             style={{
// //               width: '100%',
// //               padding: '10px',
// //               background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// //               color: 'white',
// //               border: 'none',
// //               borderRadius: '8px',
// //               fontSize: '1.1rem',
// //               cursor: 'pointer',
// //               fontWeight: 600
// //             }}
// //           >
// //             Register
// //           </button>
// //         </form>
// //         <div style={{ marginTop: '16px', textAlign: 'center' }}>
// //           <button
// //             onClick={onBack}
// //             style={{
// //               background: 'none',
// //               border: 'none',
// //               color: '#11998e',
// //               textDecoration: 'underline',
// //               cursor: 'pointer',
// //               fontWeight: 600
// //             }}
// //           >
// //             Back to Login
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;
// import { useState } from 'react';

// function Register({ onRegister, onBack }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           username,
//           password
//         })
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage('Registration successful! You can now login.');
//         if (onRegister) onRegister({ username, password });
//       } else {
//         setMessage(data.message || 'Registration failed');
//       }
//     } catch (err) {
//       setMessage('Server error');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister} style={{ display: 'inline-block', textAlign: 'left' }}>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             required
//             style={{ marginBottom: '10px', width: '200px', padding: '8px' }}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//             style={{ marginBottom: '10px', width: '200px', padding: '8px' }}
//           />
//         </div>
//         <button type="submit" style={{ width: '100%', padding: '8px' }}>Register</button>
//       </form>
//       <div style={{ marginTop: '10px', color: message.includes('success') ? 'green' : 'red' }}>
//         {message}
//       </div>
//       <button onClick={onBack} style={{ marginTop: '10px' }}>Back to Login</button>
//     </div>
//   );
// }

// export default Register;
import { useState } from 'react';

function Register({ onRegister, onBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Registration successful! You can now login.');
        if (onRegister) onRegister({ username, password });
      } else {
        setMessage(data.message || 'Registration failed');
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
        <h2 style={{ color: '#11998e', marginBottom: '24px', fontSize: '2rem' }}>Register</h2>
        <form onSubmit={handleRegister}>
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
            Register
          </button>
        </form>
        <div style={{ color: message.includes('success') ? 'green' : 'red', marginBottom: '10px', minHeight: '22px' }}>
          {message}
        </div>
        <button
          onClick={onBack}
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
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;
