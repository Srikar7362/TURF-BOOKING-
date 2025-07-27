// // function Home({ onBookNow }) {
// //   return (
// //     <div style={{ textAlign: 'center', marginTop: '50px' }}>
// //       <h1>Welcome to Football Turf Booking</h1>
// //       <button onClick={onBookNow} style={{ fontSize: '1.2rem', padding: '10px 30px' }}>
// //         Book Now
// //       </button>
// //     </div>
// //   );
// // }

// // export default Home;
// function Home({ onBookNow, user }) {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome {user ? user : 'to Football Turf Booking'}!</h1>
//       <button onClick={onBookNow} style={{ fontSize: '1.2rem', padding: '10px 30px' }}>
//         Book Now
//       </button>
//     </div>
//   );
// }

// export default Home;
function Home({ onBookNow, user }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(120deg, #38ef7d 0%, #11998e 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '48px 36px',
        textAlign: 'center',
        minWidth: '340px'
      }}>
        <h1 style={{
          color: '#11998e',
          fontSize: '2.8rem',
          marginBottom: '12px',
          letterSpacing: '2px'
        }}>
          ⚽ Football Turf Booking
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '30px' }}>
          {user ? `Welcome, ${user}!` : 'Book your slot and play!'}
        </p>
        <button
          onClick={onBookNow}
          style={{
            background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '14px 38px',
            fontSize: '1.2rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Home;