"use client"
// pages/enrollees.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EnrolleesTable from '@/components/EnrolleesTable';

const EnrolleesPage = () => {
  const [enrollees, setEnrollees] = useState([]);

  useEffect(() => {
    const fetchEnrollees = async () => {
      try {
        const response = await axios.get('/get-enrollee');
        console.log(response)
        setEnrollees(response.data.enrollees);
      } catch (error) {
        console.error('Error fetching enrollees:', error);
      }
    };

    fetchEnrollees();
  }, []);

  const handleDelete = (enrolleeId) => {
    setEnrollees(enrollees.filter(enrollee => enrollee.enrolleeId !== enrolleeId));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <EnrolleesTable enrollees={enrollees} onDelete={handleDelete} />
    </div>
  );

};






export default EnrolleesPage;