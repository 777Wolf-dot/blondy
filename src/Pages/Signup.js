import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import '../Styles/Signup.css'; // if using custom styles

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    photo: null,
  });

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setMessage('');

    let photoUrl = '';

    if (formData.photo) {
      const fileExt = formData.photo.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
  .from('profile-photos')
  .upload(filePath, formData.photo, {
    contentType: formData.photo.type,
    upsert: false,
  });


      if (uploadError) {
        setMessage('Image upload failed');
        setUploading(false);
        return;
      }

      const { data: imageData } = supabase
        .storage
        .from('profile-photos')
        .getPublicUrl(filePath);

      photoUrl = imageData.publicUrl;
    }

    // Store user data in Supabase
  const { error } = await supabase
  .from('members')
  .insert([{
    full_name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    location: formData.location,
    photo_url: photoUrl,
  }]);


    if (error) {
      console.error(error);
      setMessage('Signup failed');
    } else {
      setMessage('Signup successful!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        photo: null,
      });
    }

    setUploading(false);
  };

  return (
    <div className="signup-container">
      <h2>Membership Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
