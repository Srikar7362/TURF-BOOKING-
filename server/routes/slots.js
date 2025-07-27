// // // filepath: server/routes/slots.js
// // import express from 'express';
// // import Slot from '../models/Slot.js';
// // import jwt from 'jsonwebtoken';

// // const router = express.Router();

// // // Middleware to check JWT
// // function auth(req, res, next) {
// //   const token = req.headers.authorization?.split(' ')[1];
// //   if (!token) return res.status(401).json({ message: 'No token' });
// //   try {
// //     req.user = jwt.verify(token, process.env.JWT_SECRET);
// //     next();
// //   } catch {
// //     res.status(401).json({ message: 'Invalid token' });
// //   }
// // }

// // // Get all slots for a date
// // router.get('/', async (req, res) => {
// //   const { date } = req.query;
// //   const slots = await Slot.find({ date });
// //   res.json(slots);
// // });

// // // Book a slot
// // router.post('/book', auth, async (req, res) => {
// //   const { slotId } = req.body;
// //   const slot = await Slot.findById(slotId);
// //   if (!slot) return res.status(404).json({ message: 'Slot not found' });
// //   if (slot.bookedBy) return res.status(400).json({ message: 'Slot already booked' });
// //   slot.bookedBy = req.user.id;
// //   await slot.save();
// //   res.json({ message: 'Slot booked' });
// // });

// // // Free expired slots (run this periodically or on fetch)
// // router.post('/free-expired', async (req, res) => {
// //   const now = new Date();
// //   const today = now.toISOString().slice(0, 10);
// //   await Slot.updateMany({ date: { $lt: today } }, { $set: { bookedBy: null } });
// //   res.json({ message: 'Expired slots freed' });
// // });

// // export default router;
// import express from 'express';
// import Slot from '../models/Slot.js';
// import jwt from 'jsonwebtoken';
// import nodemailer from 'nodemailer';

// const router = express.Router();

// // Middleware to check JWT
// function auth(req, res, next) {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'No token' });
//   try {
//     req.user = jwt.verify(token, process.env.JWT_SECRET);
//     next();
//   } catch {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// }

// // Create a new slot
// router.post('/create', async (req, res) => {
//   const { time, date } = req.body;
//   if (!time || !date) return res.status(400).json({ message: 'Time and date are required' });
//   const slot = new Slot({ time, date });
//   await slot.save();
//   res.json({ message: 'Slot created', slot });
// });

// // Get all slots for a date
// router.get('/', async (req, res) => {
//   const { date } = req.query;
//   const slots = await Slot.find({ date });
//   res.json(slots);
// });

// // Book a slot
// router.post('/book', auth, async (req, res) => {
//   const { slotId } = req.body;
//   const slot = await Slot.findById(slotId);
//   if (!slot) return res.status(404).json({ message: 'Slot not found' });
//   if (slot.bookedBy) return res.status(400).json({ message: 'Slot already booked' });
//   slot.bookedBy = req.user.id;
//   await slot.save();
//   res.json({ message: 'Slot booked' });
// });

// // Free expired slots (run this periodically or on fetch)
// router.post('/free-expired', async (req, res) => {
//   const now = new Date();
//   const today = now.toISOString().slice(0, 10);
//   await Slot.updateMany({ date: { $lt: today } }, { $set: { bookedBy: null } });
//   res.json({ message: 'Expired slots freed' });
// });

// export default router;
import express from 'express';
import Slot from '../models/Slot.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const router = express.Router();

// Middleware to check JWT
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Create a new slot
router.post('/create', async (req, res) => {
  const { time, date } = req.body;
  if (!time || !date) return res.status(400).json({ message: 'Time and date are required' });
  const slot = new Slot({ time, date });
  await slot.save();
  res.json({ message: 'Slot created', slot });
});

// Get all slots for a date
router.get('/', async (req, res) => {
  const { date } = req.query;
  const slots = await Slot.find({ date });
  res.json(slots);
});

// Book a slot (JWT protected)
router.post('/book', auth, async (req, res) => {
  const { slotId } = req.body;
  const slot = await Slot.findById(slotId);
  if (!slot) return res.status(404).json({ message: 'Slot not found' });
  if (slot.bookedBy) return res.status(400).json({ message: 'Slot already booked' });
  slot.bookedBy = req.user.id;
  await slot.save();
  res.json({ message: 'Slot booked' });
});

// Free expired slots (run this periodically or on fetch)
router.post('/free-expired', async (req, res) => {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  await Slot.updateMany({ date: { $lt: today } }, { $set: { bookedBy: null } });
  res.json({ message: 'Expired slots freed' });
});

// Send payment email and create pending booking
router.post('/request-payment', async (req, res) => {
  const { time, date, email } = req.body;
  if (!time || !date || !email) return res.status(400).json({ message: 'Missing data' });

  // Create pending booking
  const slot = new Slot({ time, date, status: 'pending', email });
  await slot.save();

  // Send email with verification link
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your gmail
      pass: process.env.EMAIL_PASS  // your app password
    }
  });

  const verifyUrl = `http://localhost:5000/api/slots/verify-payment/${slot._id}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Turf Booking Payment',
    html: `<p>Click <a href="${verifyUrl}">here</a> to verify your payment for slot ${time} on ${date}.</p>`
  });

  res.json({ message: 'Verification email sent. Please check your inbox.' });
});

// Verify payment (user clicks link in email)
router.get('/verify-payment/:id', async (req, res) => {
  const { id } = req.params;
  const slot = await Slot.findById(id);
  if (!slot) return res.status(404).send('Booking not found');
  slot.status = 'paid';
  await slot.save();
  res.send('<h2>Payment verified! You can now close this tab.</h2>');
});

export default router;