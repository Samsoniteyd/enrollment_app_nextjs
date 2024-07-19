"use client"
// components/EnrolleesTable.js
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const EnrolleesTable = ({ enrollees, onDelete }) => {
    console.log(enrollees)
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleDelete = async (enrolleeId) => {
    try {
      const response = await axios.delete('/delete-enrollee', { data: { enrolleeId } });
      console.log(response.data.message);
      onDelete(enrolleeId);
    } catch (error) {
      console.error('Error deleting enrollee:', error);
    }
  };



  const filteredEnrollees = enrollees.filter((enrollee) =>
    enrollee?.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollee?.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollee?.enrolleeId?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded shadow-md">
         {/* add new enrollee button */}
      <div className="flex float-end mb-3">
      
      <Link className="bg-blue-500 text-white px-4 py-2 rounded" href={"/"}>Add new Enrollee</Link>
    
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or ID"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Enrollee ID</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnrollees.map((enrollee) => (
            <tr key={enrollee.enrolleeId}>
              <td className="py-2 px-4 border-b">{enrollee.firstName}</td>
              <td className="py-2 px-4 border-b">{enrollee.lastName}</td>
              <td className="py-2 px-4 border-b">{enrollee.enrolleeId}</td>
              <td className="py-2 px-4 border-b">{enrollee.email}</td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => {handleDelete(enrollee.enrolleeId)}} className="bg-red-500 text-white px-4 py-2 rounded">delete</button>
              </td>


            </tr>

          ))}
        </tbody>
      </table>
   
    </div>
  );
};

export default EnrolleesTable;