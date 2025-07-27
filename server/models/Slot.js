// import mongoose from 'mongoose';

// const slotSchema = new mongoose.Schema({
//   time: String,
//   date: String, // e.g. '2025-07-23'
//   bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
  
// });

// export default mongoose.model('Slot', slotSchema);
import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema({
  time: String,
  date: String, // e.g. '2025-07-23'
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  email: String, // Add this line for storing user's email
  status: { type: String, default: 'pending' } // Add this line for payment status
});

export default mongoose.model('Slot', slotSchema);
