// src/pages/ProgramOfTheDay.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const ProgramOfTheDay = () => {
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProgram = async () => {
    const today = new Date().toISOString().split('T')[0];

    const { data, error } = await supabase
      .from('daily_programs')
      .select('*')
      .eq('date', today)
      .single();

    if (error) {
      setProgram(null);
    } else {
      setProgram(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProgram();
  }, []);

  if (loading) return <p className="p-4">Loading program...</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Today's Program</h2>
      {program ? (
        <div className="bg-white p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">{program.title}</h3>
          <p className="mt-2">{program.details}</p>
          <p className="mt-4 text-sm text-gray-500">Posted on {program.date}</p>
        </div>
      ) : (
        <p className="text-center text-gray-500">No program posted for today.</p>
      )}
    </div>
  );
};

export default ProgramOfTheDay;
