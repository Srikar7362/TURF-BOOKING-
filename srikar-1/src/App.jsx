// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//    const [count, setCount] = useState(0)
//   // let count=0;
//   const increase = () => {
//     // count=count+1;
//     if(count >= 10) {
//       // alert("Count cannot exceed 10");
//       // return;
//       setCount(count=10);
//     }
//     else{
//       setCount(count + 1);
//     }
    
    
//   };
//   const decrease = () => {
//     // count=count-1;
//     if(count <= 0) {
//       // alert("Count cannot be less than 0");
//       // return;
//       setCount(count=0);
//     }
//     else{
//       // setCount(count - 1);
//         setCount(count - 1);
//     }
    
//   };
//   return (
//     <>
//        <h1>hello</h1>
//        <h2>counter</h2>
//        <div>Count: {count}</div>
//        <button onClick={increase}> increase :{count}</button>
//        <br />
//        <button onClick={decrease}> decrease :{count}</button>
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App
// import { useState } from 'react';
// import Home from './Home';
// import Slots from './Slots';

// function App() {
//   const [page, setPage] = useState('home');
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   return (
//     <>
//       {page === 'home' && <Home onBookNow={() => setPage('slots')} />}
//       {page === 'slots' && (
//         <Slots
//           selectedSlot={selectedSlot}
//           setSelectedSlot={setSelectedSlot}
//           onBack={() => setPage('home')}
//         />
//       )}
//     </>
//   );
// }

// export default App;
// import { useState } from 'react';
// import Login from './Login';
// import Home from './Home';
// import Slots from './Slots';

// function App() {
//   const [page, setPage] = useState('login');
//   const [user, setUser] = useState('');
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   const handleLogin = (username) => {
//     setUser(username);
//     setPage('home');
//   };

//   return (
//     <>
//       {page === 'login' && <Login onLogin={handleLogin} />}
//       {page === 'home' && <Home onBookNow={() => setPage('slots')} user={user} />}
//       {page === 'slots' && (
//         <Slots
//           selectedSlot={selectedSlot}
//           setSelectedSlot={setSelectedSlot}
//           onBack={() => setPage('home')}
//           user={user}
//         />
//       )}
//     </>
//   );
// }

// export default App;
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Slots from './Slots';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([
    // Example: { username: 'test', password: '1234' }
  ]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
    setPage('home');
  };

  const handleRegister = (newUser) => {
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <>
      {page === 'login' && (
        <Login
          onLogin={handleLogin}
          onRegister={() => setPage('register')}
          users={users}
        />
      )}
      {page === 'register' && (
        <Register
          onRegister={userObj => {
            handleRegister(userObj);
            setPage('login');
          }}
          onBack={() => setPage('login')}
          users={users}
        />
      )}
      {page === 'home' && <Home onBookNow={() => setPage('slots')} user={user} />}
      {page === 'slots' && (
        <Slots
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          onBack={() => setPage('home')}
          user={user}
        />
      )}
    </>
  );
}

export default App;