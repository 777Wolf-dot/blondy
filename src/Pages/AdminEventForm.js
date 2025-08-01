

// // src/pages/AdminEventForm.js
// import React, { useState } from 'react';
// import { supabase } from '../supabaseClient';
// import '../Styles/AdminEventForm.css';

// const AdminEventForm = () => {
//   const [title, setTitle] = useState('');
//   const [details, setDetails] = useState('');
//   const [date, setDate] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { error } = await supabase.from('events').insert([{ title, details, date }]);

//     if (error) {
//       setMessage('Failed to add event');
//       console.error(error);
//     } else {
//       setMessage('Event added successfully!');
//       setTitle('');
//       setDetails('');
//       setDate('');
//     }
//   };

//   return (
//     <div className="event-form-container">
//       <h2>Post New Event</h2>
//       <form onSubmit={handleSubmit} className="event-form">
//         <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         <textarea placeholder="Event Details" value={details} onChange={(e) => setDetails(e.target.value)} required />
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         <button type="submit">Post Event</button>
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default AdminEventForm;
