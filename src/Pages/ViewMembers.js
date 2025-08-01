// src/pages/ViewMembers.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import '../Styles/ViewMembers.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching members:', error);
      } else {
        setMembers(data);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="members-container">
      <h2>Our Members</h2>
      <div className="members-grid">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <img
              src={member.photo_url || 'https://via.placeholder.com/150'}
              alt={member.full_name}
              className="member-photo"
            />
            <h3>{member.full_name}</h3>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
            <p><strong>Location:</strong> {member.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;
