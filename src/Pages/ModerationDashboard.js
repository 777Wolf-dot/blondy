import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import '../Styles/ModerationDashboard.css';

const ModerationDashboard = () => {
  const [members, setMembers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setIsAdmin(false);
        return;
      }

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching role:', error);
        setIsAdmin(false);
      } else {
        setIsAdmin(data?.role === 'admin');
      }
    };

    checkAdmin();
  }, []);

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error('Error fetching members:', error);
    else setMembers(data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleStatusUpdate = async (memberId, newStatus) => {
    try {
      const { error } = await supabase
        .from('members')
        .update({ status: newStatus })
        .eq('id', memberId);

      if (error) {
        console.error("Status update error:", error.message || error);
        alert(`Failed to update status: ${error.message}`);
      } else {
        alert('Status updated successfully.');
        fetchMembers(); // Refresh list
      }
    } catch (err) {
      console.error("Unexpected error:", err.message || err);
      alert("Something went wrong while updating status.");
    }
  };

  const filteredMembers = members.filter(member =>
    member.full_name?.toLowerCase().includes(search.toLowerCase())
  );

  if (!isAdmin) return <p>You do not have permission to view this page.</p>;

  return (
    <div className="moderation-container">
      <h2>Moderation Dashboard</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {filteredMembers.length === 0 ? (
        <p>No members found.</p>
      ) : (
        filteredMembers.map(member => (
          <div key={member.id} className="moderation-card">
            <img
              src={member.photo_url || 'https://via.placeholder.com/100'}
              alt={member.full_name}
            />
            <h3>{member.full_name}</h3>
            <p><strong>Email:</strong> {member.email}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span
                className={
                  member.status === 'approved'
                    ? 'status-approved'
                    : member.status === 'rejected'
                    ? 'status-rejected'
                    : 'status-pending'
                }
              >
                {member.status || 'pending'}
              </span>
            </p>
            <div className="moderation-actions">
              <button onClick={() => handleStatusUpdate(member.id, 'approved')}>
                ✅ Approve
              </button>
              <button onClick={() => handleStatusUpdate(member.id, 'rejected')}>
                ❌ Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ModerationDashboard;
