// src/pages/AdminProgramForm.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AdminProgramForm = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    const { error } = await supabase.from('daily_programs').insert([
      {
        title,
        details,
        date: new Date().toISOString().split('T')[0],
      },
    ]);

    if (error) {
      setMessage('Error: ' + error.message);
    } else {
      setMessage('Program successfully posted!');
      setTitle('');
      setDetails('');
    }

    setSubmitting(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Post Today’s Program</h2>
      {message && <p className="mb-2 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Program Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Program Details"
          className="w-full p-2 border rounded"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
        >
          {submitting ? 'Posting...' : 'Post Program'}
        </button>
      </form>
    </div>
  );
};

export default AdminProgramForm;
