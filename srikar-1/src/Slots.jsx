// // // // // import { useState } from 'react';

// // // // // const initialSlots = [
// // // // //   { time: '6:00 AM - 7:00 AM', available: true },
// // // // //   { time: '7:00 AM - 8:00 AM', available: false },
// // // // //   { time: '8:00 AM - 9:00 AM', available: true },
// // // // //   { time: '5:00 PM - 6:00 PM', available: true },
// // // // //   { time: '6:00 PM - 7:00 PM', available: false },
// // // // // ];

// // // // // function TurfBanner() {
// // // // //   return (
// // // // //     <div style={{
// // // // //       background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// // // // //       color: 'white',
// // // // //       padding: '30px 0 20px 0',
// // // // //       borderRadius: '0 0 30px 30px',
// // // // //       marginBottom: '30px',
// // // // //       boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
// // // // //     }}>
// // // // //       <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>⚽ Football Turf Booking</h1>
// // // // //       <p style={{ margin: 0, fontSize: '1.2rem' }}>Book your slot and play!</p>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function SlotCard({ slot, onBook }) {
// // // // //   return (
// // // // //     <div style={{
// // // // //       display: 'flex',
// // // // //       alignItems: 'center',
// // // // //       justifyContent: 'space-between',
// // // // //       background: '#f9f9f9',
// // // // //       borderRadius: '16px',
// // // // //       boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
// // // // //       padding: '18px 28px',
// // // // //       margin: '18px auto',
// // // // //       maxWidth: '400px',
// // // // //       borderLeft: slot.available ? '6px solid #38ef7d' : '6px solid #ff4e50'
// // // // //     }}>
// // // // //       <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>
// // // // //         {slot.available ? '🟢' : '🔴'} {slot.time}
// // // // //       </span>
// // // // //       {slot.available ? (
// // // // //         <button
// // // // //           style={{
// // // // //             background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// // // // //             color: 'white',
// // // // //             border: 'none',
// // // // //             borderRadius: '8px',
// // // // //             padding: '8px 22px',
// // // // //             fontSize: '1rem',
// // // // //             cursor: 'pointer',
// // // // //             transition: 'background 0.2s'
// // // // //           }}
// // // // //           onClick={onBook}
// // // // //         >
// // // // //           Book
// // // // //         </button>
// // // // //       ) : (
// // // // //         <span style={{ color: '#ff4e50', fontWeight: 600, fontSize: '1rem' }}>Booked</span>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function Slots({ onBack }) {
// // // // //   const [slots, setSlots] = useState(initialSlots);

// // // // //   const handleBook = (index) => {
// // // // //     setSlots((prev) =>
// // // // //       prev.map((slot, i) =>
// // // // //         i === index ? { ...slot, available: false } : slot
// // // // //       )
// // // // //     );
// // // // //     alert('Slot booked successfully!');
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ minHeight: '100vh', background: '#e9f7ef', paddingBottom: '40px' }}>
// // // // //       <TurfBanner />
// // // // //       <h2 style={{ textAlign: 'center', color: '#11998e', marginBottom: '10px' }}>Available Slots</h2>
// // // // //       <div>
// // // // //         {slots.map((slot, idx) => (
// // // // //           <SlotCard
// // // // //             key={slot.time}
// // // // //             slot={slot}
// // // // //             onBook={() => handleBook(idx)}
// // // // //           />
// // // // //         ))}
// // // // //       </div>
// // // // //       <div style={{ textAlign: 'center', marginTop: '30px' }}>
// // // // //         <button
// // // // //           onClick={onBack}
// // // // //           style={{
// // // // //             background: 'white',
// // // // //             color: '#11998e',
// // // // //             border: '2px solid #11998e',
// // // // //             borderRadius: '8px',
// // // // //             padding: '8px 28px',
// // // // //             fontSize: '1rem',
// // // // //             cursor: 'pointer',
// // // // //             fontWeight: 600,
// // // // //             boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
// // // // //           }}
// // // // //         >
// // // // //           ⬅ Back
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Slots;
// // // // import { useState } from 'react';

// // // // const timeSlots = [
// // // //   '10:00 AM - 11:00 AM',
// // // //   '11:00 AM - 12:00 PM',
// // // //   '12:00 PM - 1:00 PM',
// // // //   '1:00 PM - 2:00 PM',
// // // //   '2:00 PM - 3:00 PM',
// // // //   '3:00 PM - 4:00 PM',
// // // //   '4:00 PM - 5:00 PM',
// // // //   '5:00 PM - 6:00 PM',
// // // //   '6:00 PM - 7:00 PM',
// // // //   '7:00 PM - 8:00 PM'
// // // // ];

// // // // function TurfBanner() {
// // // //   return (
// // // //     <div style={{
// // // //       background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// // // //       color: 'white',
// // // //       padding: '30px 0 20px 0',
// // // //       borderRadius: '0 0 30px 30px',
// // // //       marginBottom: '30px',
// // // //       boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
// // // //     }}>
// // // //       <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>⚽ Football Turf Booking</h1>
// // // //       <p style={{ margin: 0, fontSize: '1.2rem' }}>Book your slot and play!</p>
// // // //     </div>
// // // //   );
// // // // }

// // // // function SlotCard({ slot, booked, onBook }) {
// // // //   return (
// // // //     <div style={{
// // // //       display: 'flex',
// // // //       alignItems: 'center',
// // // //       justifyContent: 'space-between',
// // // //       background: '#f9f9f9',
// // // //       borderRadius: '16px',
// // // //       boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
// // // //       padding: '18px 28px',
// // // //       margin: '18px auto',
// // // //       maxWidth: '400px',
// // // //       borderLeft: booked ? '6px solid #ff4e50' : '6px solid #38ef7d',
// // // //       opacity: booked ? 0.6 : 1,
// // // //       transition: 'opacity 0.2s'
// // // //     }}>
// // // //       <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>
// // // //         {booked ? '🔴' : '🟢'} {slot}
// // // //       </span>
// // // //       {booked ? (
// // // //         <span style={{ color: '#ff4e50', fontWeight: 600, fontSize: '1rem' }}>Booked</span>
// // // //       ) : (
// // // //         <button
// // // //           style={{
// // // //             background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// // // //             color: 'white',
// // // //             border: 'none',
// // // //             borderRadius: '8px',
// // // //             padding: '8px 22px',
// // // //             fontSize: '1rem',
// // // //             cursor: 'pointer',
// // // //             transition: 'background 0.2s'
// // // //           }}
// // // //           onClick={onBook}
// // // //         >
// // // //           Book
// // // //         </button>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // function Slots({ onBack }) {
// // // //   const [selectedDate, setSelectedDate] = useState('');
// // // //   const [bookedSlots, setBookedSlots] = useState({}); // { 'YYYY-MM-DD': [slotIndex, ...] }
// // // //   const [message, setMessage] = useState('');

// // // //   const today = new Date().toISOString().split('T')[0];

// // // //   const handleBook = (slotIdx) => {
// // // //     if (!selectedDate) {
// // // //       setMessage('Please select a date first!');
// // // //       return;
// // // //     }
// // // //     setBookedSlots(prev => {
// // // //       const prevForDate = prev[selectedDate] || [];
// // // //       return { ...prev, [selectedDate]: [...prevForDate, slotIdx] };
// // // //     });
// // // //     setMessage('Slot booked successfully!');
// // // //   };

// // // //   return (
// // // //     <div style={{ minHeight: '100vh', background: '#e9f7ef', paddingBottom: '40px' }}>
// // // //       <TurfBanner />
// // // //       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
// // // //         <label style={{ fontWeight: 600, fontSize: '1.1rem', marginRight: '10px' }}>
// // // //           Select Date:
// // // //         </label>
// // // //         <input
// // // //           type="date"
// // // //           min={today}
// // // //           value={selectedDate}
// // // //           onChange={e => {
// // // //             setSelectedDate(e.target.value);
// // // //             setMessage('');
// // // //           }}
// // // //           style={{
// // // //             padding: '8px 14px',
// // // //             borderRadius: '8px',
// // // //             border: '1px solid #38ef7d',
// // // //             fontSize: '1rem'
// // // //           }}
// // // //         />
// // // //       </div>
// // // //       <h2 style={{ textAlign: 'center', color: '#11998e', marginBottom: '10px' }}>Available Slots</h2>
// // // //       {message && (
// // // //         <div style={{ textAlign: 'center', color: message.includes('success') ? 'green' : 'red', marginBottom: '10px' }}>
// // // //           {message}
// // // //         </div>
// // // //       )}
// // // //       <div>
// // // //         {timeSlots.map((slot, idx) => (
// // // //           <SlotCard
// // // //             key={slot}
// // // //             slot={slot}
// // // //             booked={selectedDate && bookedSlots[selectedDate]?.includes(idx)}
// // // //             onBook={() => handleBook(idx)}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //       <div style={{ textAlign: 'center', marginTop: '30px' }}>
// // // //         <button
// // // //           onClick={onBack}
// // // //           style={{
// // // //             background: 'white',
// // // //             color: '#11998e',
// // // //             border: '2px solid #11998e',
// // // //             borderRadius: '8px',
// // // //             padding: '8px 28px',
// // // //             fontSize: '1rem',
// // // //             cursor: 'pointer',
// // // //             fontWeight: 600,
// // // //             boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
// // // //           }}
// // // //         >
// // // //           ⬅ Back
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Slots;
// // // import { useState } from 'react';

// // // const timeSlots = [
// // //   '08:00 AM - 09:00 AM',
// // //   '09:00 AM - 10:00 AM',
// // //   '10:00 AM - 11:00 AM',
// // //   '11:00 AM - 12:00 PM',
// // //   '12:00 PM - 01:00 PM',
// // //   '01:00 PM - 02:00 PM',
// // //   '02:00 PM - 03:00 PM',
// // //   '03:00 PM - 04:00 PM',
// // //   '04:00 PM - 05:00 PM',
// // //   '05:00 PM - 06:00 PM',
// // //   '06:00 PM - 07:00 PM',
// // //   '07:00 PM - 08:00 PM'
// // // ];

// // // function TurfBanner() {
// // //   return (
// // //     <div style={{
// // //       background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// // //       color: 'white',
// // //       padding: '30px 0 20px 0',
// // //       borderRadius: '0 0 30px 30px',
// // //       marginBottom: '30px',
// // //       boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
// // //       display: 'flex',
// // //       alignItems: 'center',
// // //       justifyContent: 'center',
// // //       gap: '18px'
// // //     }}>
// // //       <span style={{
// // //         fontSize: '2.5rem',
// // //         background: 'white',
// // //         borderRadius: '50%',
// // //         padding: '8px',
// // //         boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
// // //       }}>⚽</span>
// // //       <div>
// // //         <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>Football Turf Booking</h1>
// // //         <p style={{ margin: 0, fontSize: '1.2rem' }}>Book your slot and play!</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function SlotCard({ slot, booked, onBook }) {
// // //   return (
// // //     <div style={{
// // //       display: 'flex',
// // //       alignItems: 'center',
// // //       justifyContent: 'space-between',
// // //       background: '#fff',
// // //       borderRadius: '18px',
// // //       boxShadow: booked
// // //         ? '0 2px 16px rgba(255,78,80,0.10)'
// // //         : '0 2px 16px rgba(56,239,125,0.10)',
// // //       padding: '20px 32px',
// // //       margin: '18px auto',
// // //       maxWidth: '420px',
// // //       borderLeft: booked ? '8px solid #ff4e50' : '8px solid #38ef7d',
// // //       opacity: booked ? 0.6 : 1,
// // //       transition: 'opacity 0.2s, box-shadow 0.2s'
// // //     }}>
// // //       <span style={{
// // //         fontSize: '1.25rem',
// // //         fontWeight: 600,
// // //         color: booked ? '#ff4e50' : '#11998e',
// // //         letterSpacing: '1px'
// // //       }}>
// // //         {booked ? '🔴' : '🟢'} {slot}
// // //       </span>
// // //       {booked ? (
// // //         <span style={{ color: '#ff4e50', fontWeight: 700, fontSize: '1.1rem' }}>Booked</span>
// // //       ) : (
// // //         <button
// // //           style={{
// // //             background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// // //             color: 'white',
// // //             border: 'none',
// // //             borderRadius: '8px',
// // //             padding: '10px 28px',
// // //             fontSize: '1.1rem',
// // //             cursor: 'pointer',
// // //             fontWeight: 600,
// // //             boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
// // //             transition: 'background 0.2s'
// // //           }}
// // //           onClick={onBook}
// // //         >
// // //           Book
// // //         </button>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // function Slots({ onBack }) {
// // //   const [selectedDate, setSelectedDate] = useState('');
// // //   const [bookedSlots, setBookedSlots] = useState({}); // { 'YYYY-MM-DD': [slotIndex, ...] }
// // //   const [message, setMessage] = useState('');

// // //   const today = new Date().toISOString().split('T')[0];

// // // //   const handleBook = (slotIdx) => {
// // // //     if (!selectedDate) {
// // // //       setMessage('Please select a date first!');
// // // //       return;
// // // //     }
// // // //     setBookedSlots(prev => {
// // // //       const prevForDate = prev[selectedDate] || [];
// // // //       return { ...prev, [selectedDate]: [...prevForDate, slotIdx] };
// // // //     });
// // // //     setMessage('Slot booked successfully!');
// // // //     setTimeout(() => setMessage(''), 1500);
// // // //   };
// // // const handleBook = async (slotIdx) => {
// // //   if (!selectedDate) {
// // //     setMessage('Please select a date first!');
// // //     return;
// // //   }
// // //   const slotTime = timeSlots[slotIdx];
// // //   try {
// // //     const res = await fetch('http://localhost:5000/api/slots/create', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({
// // //         time: slotTime,
// // //         date: selectedDate
// // //       })
// // //     });
// // //     const data = await res.json();
// // //     if (res.ok) {
// // //       setBookedSlots(prev => {
// // //         const prevForDate = prev[selectedDate] || [];
// // //         return { ...prev, [selectedDate]: [...prevForDate, slotIdx] };
// // //       });
// // //       setMessage('Slot booked and saved!');
// // //     } else {
// // //       setMessage(data.message || 'Booking failed');
// // //     }
// // //   } catch (err) {
// // //     setMessage('Server error');
// // //   }
// // //   setTimeout(() => setMessage(''), 1500);
// // // };

// // //   return (
// // //     <div style={{ minHeight: '100vh', background: '#e9f7ef', paddingBottom: '40px' }}>
// // //       <TurfBanner />
// // //       <div style={{
// // //         textAlign: 'center',
// // //         marginBottom: '24px',
// // //         display: 'flex',
// // //         flexDirection: 'column',
// // //         alignItems: 'center'
// // //       }}>
// // //         <label style={{
// // //           fontWeight: 700,
// // //           fontSize: '1.15rem',
// // //           marginBottom: '8px',
// // //           color: '#11998e'
// // //         }}>
// // //           Select Date:
// // //         </label>
// // //         <input
// // //           type="date"
// // //           min={today}
// // //           value={selectedDate}
// // //           onChange={e => {
// // //             setSelectedDate(e.target.value);
// // //             setMessage('');
// // //           }}
// // //           style={{
// // //             padding: '10px 18px',
// // //             borderRadius: '10px',
// // //             border: '2px solid #38ef7d',
// // //             fontSize: '1.1rem',
// // //             outline: 'none',
// // //             marginBottom: '10px'
// // //           }}
// // //         />
// // //       </div>
// // //       <h2 style={{
// // //         textAlign: 'center',
// // //         color: '#11998e',
// // //         marginBottom: '18px',
// // //         fontWeight: 700,
// // //         fontSize: '2rem'
// // //       }}>
// // //         Available Slots
// // //       </h2>
// // //       {message && (
// // //         <div style={{
// // //           textAlign: 'center',
// // //           color: message.includes('success') ? 'green' : 'red',
// // //           marginBottom: '14px',
// // //           fontWeight: 600,
// // //           fontSize: '1.1rem'
// // //         }}>
// // //           {message}
// // //         </div>
// // //       )}
// // //       <div>
// // //         {timeSlots.map((slot, idx) => (
// // //           <SlotCard
// // //             key={slot}
// // //             slot={slot}
// // //             booked={selectedDate && bookedSlots[selectedDate]?.includes(idx)}
// // //             onBook={() => handleBook(idx)}
// // //           />
// // //         ))}
// // //       </div>
// // //       <div style={{ textAlign: 'center', marginTop: '36px' }}>
// // //         <button
// // //           onClick={onBack}
// // //           style={{
// // //             background: 'white',
// // //             color: '#11998e',
// // //             border: '2px solid #11998e',
// // //             borderRadius: '10px',
// // //             padding: '10px 32px',
// // //             fontSize: '1.1rem',
// // //             cursor: 'pointer',
// // //             fontWeight: 700,
// // //             boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
// // //             transition: 'background 0.2s'
// // //           }}
// // //         >
// // //           ⬅ Back
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Slots;
// // import { useState } from 'react';

// // const timeSlots = [
// //   '08:00 AM - 09:00 AM',
// //   '09:00 AM - 10:00 AM',
// //   '10:00 AM - 11:00 AM',
// //   '11:00 AM - 12:00 PM',
// //   '12:00 PM - 01:00 PM',
// //   '01:00 PM - 02:00 PM',
// //   '02:00 PM - 03:00 PM',
// //   '03:00 PM - 04:00 PM',
// //   '04:00 PM - 05:00 PM',
// //   '05:00 PM - 06:00 PM',
// //   '06:00 PM - 07:00 PM',
// //   '07:00 PM - 08:00 PM'
// // ];

// // function TurfBanner() {
// //   return (
// //     <div style={{
// //       background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// //       color: 'white',
// //       padding: '30px 0 20px 0',
// //       borderRadius: '0 0 30px 30px',
// //       marginBottom: '30px',
// //       boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       gap: '18px'
// //     }}>
// //       <span style={{
// //         fontSize: '2.5rem',
// //         background: 'white',
// //         borderRadius: '50%',
// //         padding: '8px',
// //         boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
// //       }}>⚽</span>
// //       <div>
// //         <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>Football Turf Booking</h1>
// //         <p style={{ margin: 0, fontSize: '1.2rem' }}>Book your slot and play!</p>
// //       </div>
// //     </div>
// //   );
// // }

// // function SlotCard({ slot, booked, onBook }) {
// //   return (
// //     <div style={{
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'space-between',
// //       background: '#fff',
// //       borderRadius: '18px',
// //       boxShadow: booked
// //         ? '0 2px 16px rgba(255,78,80,0.10)'
// //         : '0 2px 16px rgba(56,239,125,0.10)',
// //       padding: '20px 32px',
// //       margin: '18px auto',
// //       maxWidth: '420px',
// //       borderLeft: booked ? '8px solid #ff4e50' : '8px solid #38ef7d',
// //       opacity: booked ? 0.6 : 1,
// //       transition: 'opacity 0.2s, box-shadow 0.2s'
// //     }}>
// //       <span style={{
// //         fontSize: '1.25rem',
// //         fontWeight: 600,
// //         color: booked ? '#ff4e50' : '#11998e',
// //         letterSpacing: '1px'
// //       }}>
// //         {booked ? '🔴' : '🟢'} {slot}
// //       </span>
// //       {booked ? (
// //         <span style={{ color: '#ff4e50', fontWeight: 700, fontSize: '1.1rem' }}>Booked</span>
// //       ) : (
// //         <button
// //           style={{
// //             background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
// //             color: 'white',
// //             border: 'none',
// //             borderRadius: '8px',
// //             padding: '10px 28px',
// //             fontSize: '1.1rem',
// //             cursor: 'pointer',
// //             fontWeight: 600,
// //             boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
// //             transition: 'background 0.2s'
// //           }}
// //           onClick={onBook}
// //         >
// //           Book
// //         </button>
// //       )}
// //     </div>
// //   );
// // }

// // function Slots({ onBack }) {
// //   const [selectedDate, setSelectedDate] = useState('');
// //   const [bookedSlots, setBookedSlots] = useState({});
// //   const [message, setMessage] = useState('');

// //   const today = new Date().toISOString().split('T')[0];

// //   const handleBook = async (slotIdx) => {
// //     if (!selectedDate) {
// //       setMessage('Please select a date first!');
// //       return;
// //     }
// //     const slotTime = timeSlots[slotIdx];
// //     try {
// //       const res = await fetch('http://localhost:5000/api/slots/create', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           time: slotTime,
// //           date: selectedDate
// //         })
// //       });
// //       const data = await res.json();
// //       if (res.ok) {
// //         setBookedSlots(prev => {
// //           const prevForDate = prev[selectedDate] || [];
// //           return { ...prev, [selectedDate]: [...prevForDate, slotIdx] };
// //         });
// //         setMessage('Slot booked and saved!');
// //       } else {
// //         setMessage(data.message || 'Booking failed');
// //       }
// //     } catch (err) {
// //       setMessage('Server error');
// //     }
// //     setTimeout(() => setMessage(''), 1500);
// //   };

// //   return (
// //     <div style={{
// //       minHeight: '100vh',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       background: '#e9f7ef',
// //       padding: '40px 0'
// //     }}>
// //       <div style={{
// //         width: '100%',
// //         maxWidth: '600px',
// //         background: 'white',
// //         borderRadius: '24px',
// //         boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
// //         padding: '36px 24px',
// //         margin: '0 auto'
// //       }}>
// //         <TurfBanner />
// //         <div style={{
// //           textAlign: 'center',
// //           marginBottom: '24px',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           alignItems: 'center'
// //         }}>
// //           <label style={{
// //             fontWeight: 700,
// //             fontSize: '1.15rem',
// //             marginBottom: '8px',
// //             color: '#11998e'
// //           }}>
// //             Select Date:
// //           </label>
// //           <input
// //             type="date"
// //             min={today}
// //             value={selectedDate}
// //             onChange={e => {
// //               setSelectedDate(e.target.value);
// //               setMessage('');
// //             }}
// //             style={{
// //               padding: '10px 18px',
// //               borderRadius: '10px',
// //               border: '2px solid #38ef7d',
// //               fontSize: '1.1rem',
// //               outline: 'none',
// //               marginBottom: '10px'
// //             }}
// //           />
// //         </div>
// //         <h2 style={{
// //           textAlign: 'center',
// //           color: '#11998e',
// //           marginBottom: '18px',
// //           fontWeight: 700,
// //           fontSize: '2rem'
// //         }}>
// //           Available Slots
// //         </h2>
// //         {message && (
// //           <div style={{
// //             textAlign: 'center',
// //             color: message.includes('success') ? 'green' : 'red',
// //             marginBottom: '14px',
// //             fontWeight: 600,
// //             fontSize: '1.1rem'
// //           }}>
// //             {message}
// //           </div>
// //         )}
// //         <div>
// //           {timeSlots.map((slot, idx) => (
// //             <SlotCard
// //               key={slot}
// //               slot={slot}
// //               booked={selectedDate && bookedSlots[selectedDate]?.includes(idx)}
// //               onBook={() => handleBook(idx)}
// //             />
// //           ))}
// //         </div>
// //         <div style={{ textAlign: 'center', marginTop: '36px' }}>
// //           <button
// //             onClick={onBack}
// //             style={{
// //               background: 'white',
// //               color: '#11998e',
// //               border: '2px solid #11998e',
// //               borderRadius: '10px',
// //               padding: '10px 32px',
// //               fontSize: '1.1rem',
// //               cursor: 'pointer',
// //               fontWeight: 700,
// //               boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
// //               transition: 'background 0.2s'
// //             }}
// //           >
// //             ⬅ Back
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Slots;
// import { useState } from 'react';

// const timeSlots = [
//   '08:00 AM - 09:00 AM',
//   '09:00 AM - 10:00 AM',
//   '10:00 AM - 11:00 AM',
//   '11:00 AM - 12:00 PM',
//   '12:00 PM - 01:00 PM',
//   '01:00 PM - 02:00 PM',
//   '02:00 PM - 03:00 PM',
//   '03:00 PM - 04:00 PM',
//   '04:00 PM - 05:00 PM',
//   '05:00 PM - 06:00 PM',
//   '06:00 PM - 07:00 PM',
//   '07:00 PM - 08:00 PM'
// ];

// function TurfBanner() {
//   return (
//     <div style={{
//       background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
//       color: 'white',
//       padding: '30px 0 20px 0',
//       borderRadius: '0 0 30px 30px',
//       marginBottom: '30px',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '18px'
//     }}>
//       <span style={{
//         fontSize: '2.5rem',
//         background: 'white',
//         borderRadius: '50%',
//         padding: '8px',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
//       }}>⚽</span>
//       <div>
//         <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>Football Turf Booking</h1>
//         <p style={{ margin: 0, fontSize: '1.2rem' }}>Book your slot and play!</p>
//       </div>
//     </div>
//   );
// }

// function SlotCard({ slot, booked, onBook }) {
//   return (
//     <div style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       background: '#fff',
//       borderRadius: '18px',
//       boxShadow: booked
//         ? '0 2px 16px rgba(255,78,80,0.10)'
//         : '0 2px 16px rgba(56,239,125,0.10)',
//       padding: '20px 32px',
//       margin: '18px auto',
//       maxWidth: '420px',
//       borderLeft: booked ? '8px solid #ff4e50' : '8px solid #38ef7d',
//       opacity: booked ? 0.6 : 1,
//       transition: 'opacity 0.2s, box-shadow 0.2s'
//     }}>
//       <span style={{
//         fontSize: '1.25rem',
//         fontWeight: 600,
//         color: booked ? '#ff4e50' : '#11998e',
//         letterSpacing: '1px'
//       }}>
//         {booked ? '🔴' : '🟢'} {slot}
//       </span>
//       {booked ? (
//         <span style={{ color: '#ff4e50', fontWeight: 700, fontSize: '1.1rem' }}>Booked</span>
//       ) : (
//         <button
//           style={{
//             background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             padding: '10px 28px',
//             fontSize: '1.1rem',
//             cursor: 'pointer',
//             fontWeight: 600,
//             boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
//             transition: 'background 0.2s'
//           }}
//           onClick={onBook}
//         >
//           Book
//         </button>
//       )}
//     </div>
//   );
// }

// function Slots({ onBack, userEmail }) {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [bookedSlots, setBookedSlots] = useState({});
//   const [message, setMessage] = useState('');
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [pendingSlotIdx, setPendingSlotIdx] = useState(null);

//   const today = new Date().toISOString().split('T')[0];

//   // When Book is clicked, show modal
//   const handleBook = (slotIdx) => {
//     if (!selectedDate) {
//       setMessage('Please select a date first!');
//       return;
//     }
//     setPendingSlotIdx(slotIdx);
//     setShowPaymentModal(true);
//   };

//   // When Proceed with Payment is clicked
//   const handleProceedPayment = async () => {
//     setShowPaymentModal(false);
//     setMessage('Sending payment verification email...');
//     const slotTime = timeSlots[pendingSlotIdx];
//     try {
//       const res = await fetch('http://localhost:5000/api/slots/request-payment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           time: slotTime,
//           date: selectedDate,
//           email: userEmail // Pass the logged-in user's email here
//         })
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setBookedSlots(prev => {
//           const prevForDate = prev[selectedDate] || [];
//           return { ...prev, [selectedDate]: [...prevForDate, pendingSlotIdx] };
//         });
//         setMessage(data.message || 'Check your email for verification.');
//       } else {
//         setMessage(data.message || 'Booking failed');
//       }
//     } catch (err) {
//       setMessage('Server error');
//     }
//     setTimeout(() => setMessage(''), 3000);
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       background: '#e9f7ef',
//       padding: '40px 0'
//     }}>
//       <div style={{
//         width: '100%',
//         maxWidth: '600px',
//         background: 'white',
//         borderRadius: '24px',
//         boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
//         padding: '36px 24px',
//         margin: '0 auto'
//       }}>
//         <TurfBanner />
//         <div style={{
//           textAlign: 'center',
//           marginBottom: '24px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center'
//         }}>
//           <label style={{
//             fontWeight: 700,
//             fontSize: '1.15rem',
//             marginBottom: '8px',
//             color: '#11998e'
//           }}>
//             Select Date:
//           </label>
//           <input
//             type="date"
//             min={today}
//             value={selectedDate}
//             onChange={e => {
//               setSelectedDate(e.target.value);
//               setMessage('');
//             }}
//             style={{
//               padding: '10px 18px',
//               borderRadius: '10px',
//               border: '2px solid #38ef7d',
//               fontSize: '1.1rem',
//               outline: 'none',
//               marginBottom: '10px'
//             }}
//           />
//         </div>
//         <h2 style={{
//           textAlign: 'center',
//           color: '#11998e',
//           marginBottom: '18px',
//           fontWeight: 700,
//           fontSize: '2rem'
//         }}>
//           Available Slots
//         </h2>
//         {message && (
//           <div style={{
//             textAlign: 'center',
//             color: message.includes('success') ? 'green' : 'red',
//             marginBottom: '14px',
//             fontWeight: 600,
//             fontSize: '1.1rem'
//           }}>
//             {message}
//           </div>
//         )}
//         <div>
//           {timeSlots.map((slot, idx) => (
//             <SlotCard
//               key={slot}
//               slot={slot}
//               booked={selectedDate && bookedSlots[selectedDate]?.includes(idx)}
//               onBook={() => handleBook(idx)}
//             />
//           ))}
//         </div>
//         <div style={{ textAlign: 'center', marginTop: '36px' }}>
//           <button
//             onClick={onBack}
//             style={{
//               background: 'white',
//               color: '#11998e',
//               border: '2px solid #11998e',
//               borderRadius: '10px',
//               padding: '10px 32px',
//               fontSize: '1.1rem',
//               cursor: 'pointer',
//               fontWeight: 700,
//               boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
//               transition: 'background 0.2s'
//             }}
//           >
//             ⬅ Back
//           </button>
//         </div>
//       </div>
//       {/* Payment Modal */}
//       {showPaymentModal && (
//         <div style={{
//           position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
//           background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
//         }}>
//           <div style={{
//             background: 'white', padding: 32, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.15)', textAlign: 'center'
//           }}>
//             <h2>Proceed with Payment?</h2>
//             <p>Click below to receive a verification email.</p>
//             <button
//               style={{
//                 background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
//                 color: 'white', border: 'none', borderRadius: 10, padding: '12px 32px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'
//               }}
//               onClick={handleProceedPayment}
//             >
//               Proceed with Payment
//             </button>
//             <br /><br />
//             <button onClick={() => setShowPaymentModal(false)} style={{ color: '#11998e', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Slots;
import { useState } from 'react';

const timeSlots = [
  '08:00 AM - 09:00 AM',
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM',
  '06:00 PM - 07:00 PM',
  '07:00 PM - 08:00 PM'
];

function TurfBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
      color: 'white',
      padding: '30px 0 20px 0',
      borderRadius: '0 0 30px 30px',
      marginBottom: '30px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '18px'
    }}>
      <span style={{
        fontSize: '2.5rem',
        background: 'white',
        borderRadius: '50%',
        padding: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
      }}>⚽</span>
      <div>
        <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>Football Turf Booking</h1>
        <p style={{ margin: 0, fontSize: '1.2rem' }}>Book your slot and play!</p>
      </div>
    </div>
  );
}

function SlotCard({ slot, booked, onBook }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#fff',
      borderRadius: '18px',
      boxShadow: booked
        ? '0 2px 16px rgba(255,78,80,0.10)'
        : '0 2px 16px rgba(56,239,125,0.10)',
      padding: '20px 32px',
      margin: '18px auto',
      maxWidth: '420px',
      borderLeft: booked ? '8px solid #ff4e50' : '8px solid #38ef7d',
      opacity: booked ? 0.6 : 1,
      transition: 'opacity 0.2s, box-shadow 0.2s'
    }}>
      <span style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        color: booked ? '#ff4e50' : '#11998e',
        letterSpacing: '1px'
      }}>
        {booked ? '🔴' : '🟢'} {slot}
      </span>
      {booked ? (
        <span style={{ color: '#ff4e50', fontWeight: 700, fontSize: '1.1rem' }}>Booked</span>
      ) : (
        <button
          style={{
            background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 28px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            transition: 'background 0.2s'
          }}
          onClick={onBook}
        >
          Book
        </button>
      )}
    </div>
  );
}

function Slots({ onBack }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [bookedSlots, setBookedSlots] = useState({});
  const [message, setMessage] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleBook = async (slotIdx) => {
    if (!selectedDate) {
      setMessage('Please select a date first!');
      return;
    }
    const slotTime = timeSlots[slotIdx];
    try {
      const res = await fetch('http://localhost:5000/api/slots/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          time: slotTime,
          date: selectedDate
        })
      });
      const data = await res.json();
      if (res.ok) {
        setBookedSlots(prev => {
          const prevForDate = prev[selectedDate] || [];
          return { ...prev, [selectedDate]: [...prevForDate, slotIdx] };
        });
        setMessage('Slot booked successfully!');
      } else {
        setMessage(data.message || 'Booking failed');
      }
    } catch (err) {
      setMessage('Server error');
    }
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#e9f7ef',
      padding: '40px 0'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '36px 24px',
        margin: '0 auto'
      }}>
        <TurfBanner />
        <div style={{
          textAlign: 'center',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <label style={{
            fontWeight: 700,
            fontSize: '1.15rem',
            marginBottom: '8px',
            color: '#11998e'
          }}>
            Select Date:
          </label>
          <input
            type="date"
            min={today}
            value={selectedDate}
            onChange={e => {
              setSelectedDate(e.target.value);
              setMessage('');
            }}
            style={{
              padding: '10px 18px',
              borderRadius: '10px',
              border: '2px solid #38ef7d',
              fontSize: '1.1rem',
              outline: 'none',
              marginBottom: '10px'
            }}
          />
        </div>
        <h2 style={{
          textAlign: 'center',
          color: '#11998e',
          marginBottom: '18px',
          fontWeight: 700,
          fontSize: '2rem'
        }}>
          Available Slots
        </h2>
        {message && (
          <div style={{
            textAlign: 'center',
            color: message.includes('success') ? 'green' : 'red',
            marginBottom: '14px',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}>
            {message}
          </div>
        )}
        <div>
          {timeSlots.map((slot, idx) => (
            <SlotCard
              key={slot}
              slot={slot}
              booked={selectedDate && bookedSlots[selectedDate]?.includes(idx)}
              onBook={() => handleBook(idx)}
            />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            onClick={onBack}
            style={{
              background: 'white',
              color: '#11998e',
              border: '2px solid #11998e',
              borderRadius: '10px',
              padding: '10px 32px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              fontWeight: 700,
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              transition: 'background 0.2s'
            }}
          >
            ⬅ Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slots;