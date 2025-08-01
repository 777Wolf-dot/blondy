// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient'; // Make sure this path is correct

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Membership from './Pages/Membership';
import Signup from './Pages/Signup';
import ViewMembers from './Pages/ViewMembers';
import ModerationDashboard from './Pages/ModerationDashboard';
import Login from './Pages/Login';
import AdminProgramForm from './Pages/AdminProgramForm';
import ProgramOfTheDay from './Pages/ProgramOfTheDay';
import Contact from './Pages/Contacts';
import AdminEventForm from './Pages/AdminEventForm';
import EventPage from './Pages/EventPage';

// Admin Route Protection
const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .single();

      setIsAdmin(data?.role === "admin");
      setLoading(false);
    };

    checkRole();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!isAdmin) return <p>Access Denied</p>;

  return children;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/viewmembers" element={<ViewMembers />} />
        <Route path="/moderation" element={<ModerationDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/programoftheday" element={<ProgramOfTheDay />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin-only routes */}
        <Route
          path="/adminprogramform"
          element={
            <AdminRoute>
              <AdminProgramForm />
            </AdminRoute>
          }
        />
        <Route
          path="/adminevents"
          element={
            <AdminRoute>
              <AdminEventForm />
            </AdminRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
