import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddS = () => {
    const navigate=useNavigate();
    const [student,setStudent]=useState({
        name:"",
    rno:0,
    class:"",
    percentage:0,
    place:""
    })
    const handleChange=(e)=>{
        setStudent((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {status,data}=await axios.post("http://localhost:3000/api/addstudent",student,{Headers:{"Content-Type":"application/json"}});
        console.log(status);
        if(status===201){
          alert(data.msg);
          navigate('/')
        }
        else{
          alert(data.msg)
        }
    }
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Add Student Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name" 
              name="name"
              value={student.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">
              Class
            </label>
            <input
              type="text"
              id="class"
              name="class"
              value={student.class}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mb-4">
            <label htmlFor="rno" className="block text-sm font-medium text-gray-700">
              Roll Number
            </label>
            <input
              type="number"
              id="rno"
              name="rno"
              value={student.rno}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"  />
          </div>

          <div className="mb-4">
            <label htmlFor="place" className="block text-sm font-medium text-gray-700">
              Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              value={student.place}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"  />
          </div>

          <div className="mb-4">
            <label htmlFor="totalPercentage" className="block text-sm font-medium text-gray-700">
              Total Percentage
            </label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              value={student.percentage}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"  />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"   >
            Submit </button>
        </form>
      </div>
    </div>
  )
}

export default AddS
