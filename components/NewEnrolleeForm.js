"use client"
// components/NewEnrolleeForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const NewEnrolleeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    enrolleeId: '',
    email: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };
   const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('/save-enrollee', formData);
      console.log(response.data.message);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        enrolleeId: '',
        email: '',
        profilePicture: null,
      });
      router.push('/enrollees')


    
    } catch (error) {
      console.error('Error saving enrollee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="enrolleeId" className="block text-gray-700 font-bold mb-2">Enrollee ID</label>
        <input
          type="text"
          id="enrolleeId"
          name="enrolleeId"
          value={formData.enrolleeId}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="profilePicture" className="block text-gray-700 font-bold mb-2">Profile Picture</label>
        <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          onChange={handleFileChange}
          className="w-full px-3 py-2 border rounded"
          accept="image/*"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default NewEnrolleeForm;