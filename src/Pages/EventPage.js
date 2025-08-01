// // src/pages/EventPage.js
// import React, { useEffect, useState } from 'react';
// import { supabase } from '../supabaseClient';
// import '../Styles/EventPage.css';

// const EventPage = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const { data, error } = await supabase.from('events').select('*').order('date', { ascending: true });
//       if (error) {
//         console.error(error);
//       } else {
//         setEvents(data);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="event-page">
//       <h2>Upcoming Events</h2>
//       {events.length === 0 ? (
//         <p>No upcoming events at the moment.</p>
//       ) : (
//         <ul className="event-list">
//           {events.map((event) => (
//             <li key={event.id} className="event-card">
//               <h3>{event.title}</h3>
//               <p>{event.details}</p>
//               <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default EventPage;
