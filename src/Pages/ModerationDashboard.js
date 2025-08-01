import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const ModerationDashboard = () => {
  const [members, setMembers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true); // To delay rendering until check complete

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error('Failed to get user:', userError);
        setIsAdmin(false);
        setCheckingAdmin(false);
        return;
      }

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Role fetch error:', error);
        setIsAdmin(false);
      } else {
        setIsAdmin(data?.role === 'admin');
      }
      setCheckingAdmin(false);
    };

    checkAdmin();
  }, []);

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

  const updateStatus = async (id, newStatus) => {
    const { error } = await supabase
      .from('members')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating status:', error);
    } else {
      // Refresh members list
      const { data, error: refetchError } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

      if (refetchError) {
        console.error('Refetch error:', refetchError);
      } else {
        setMembers(data);
      }
    }
  };

  if (checkingAdmin) return <p>Checking access...</p>;
  if (!isAdmin) return <p>You do not have permission to view this page.</p>;

  return (
    <div className="moderation-container" style={{ padding: '20px' }}>
      <h2>Moderation Dashboard</h2>
      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        members.map(member => (
          <div key={member.id} className="moderation-card" style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '15px',
            marginBottom: '15px',
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
          }}>
            <img
              src={member.photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.full_name)}&background=random`}
              alt={member.full_name}
              width="80"
              height="80"
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <h3>{member.full_name}</h3>
              <p><strong>Email:</strong> {member.email}</p>
              <p><strong>Status:</strong> {member.status || 'pending'}</p>
              <div style={{ marginTop: '10px' }}>
                <button onClick={() => updateStatus(member.id, 'approved')} style={{ marginRight: '10px' }}>Approve</button>
                <button onClick={() => updateStatus(member.id, 'rejected')}>Reject</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ModerationDashboard;
