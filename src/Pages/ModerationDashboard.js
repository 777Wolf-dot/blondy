// src/pages/ModerationDashboard.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import '../Styles/ModerationDashboard.css';

const ModerationDashboard = () => {
  const [members, setMembers] = useState([]);

  // Fetch only pending members
  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching members:', error.message);
    } else {
      console.log('Fetched pending members:', data); // Debug
      setMembers(data);
    }
  };

  // Update member's status
  const handleStatusUpdate = async (memberId, newStatus) => {
    if (!memberId) {
      console.error('Invalid member ID');
      return;
    }

    console.log(`Updating member ID ${memberId} to status '${newStatus}'`);

    try {
      const { data, error } = await supabase
        .from('members')
        .update({ status: newStatus })
        .match({ id: memberId }) // safer than .eq
        .select(); // to view the updated row

      if (error) {
        console.error('Status update error:', error.message);
        alert(`Failed to update status: ${error.message}`);
      } else {
        console.log('Updated member:', data);
        alert(`Status updated to '${newStatus}'`);

        // Refresh members list after short delay
        setTimeout(() => {
          fetchMembers();
        }, 300);
      }
    } catch (err) {
      console.error('Unexpected error:', err.message);
      alert('Something went wrong.');
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="moderation-dashboard">
      <h2>Moderation Dashboard</h2>
      {members.length === 0 ? (
        <p>No pending members to review.</p>
      ) : (
        <table className="moderation-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>
                  {member.photo_url ? (
                    <img
                      src={member.photo_url}
                      alt="Profile"
                      className="member-photo"
                    />
                  ) : (
                    'No photo'
                  )}
                </td>
                <td>{member.full_name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.location}</td>
                <td>
                  <button
                    className="approve-btn"
                    onClick={() => handleStatusUpdate(member.id, 'approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleStatusUpdate(member.id, 'rejected')}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ModerationDashboard;
