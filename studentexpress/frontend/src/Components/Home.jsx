import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [students,setStudents]=useState([])
    useEffect(()=>{
        getStudents();
    },[])
    const getStudents=async()=>{
        const {status,data}=await axios.get("http://localhost:3000/api/getstudents",{Headers:{"Content-Type":"application/json"}});
        setStudents([...data])
    }
    const deleteStudent=async(id)=>{
        const {status,data}=await axios.delete(`http://localhost:3000/api/deletestudent/${id}`,{Headers:{"Content-Type":"application/json"}});
        if (condition) {
            
        }
    }
  return (
    <>
        <div className='w-full h-20 bg-zinc-300 flex justify-between items-center'>
            <h1 className='font-serif text-3xl italic font-bold ml-7 text-teal-950'>WE Students</h1>
            <Link to={'/addstudent'}><button className='mr-7 p-3 rounded bg-teal-900 text-stone-100 hover:bg-teal-950' >Add Students</button></Link>
        </div> 
        <div className="container flex justify-start gap-4 m-5 ">
            {
                students.map((student,ind)=> <div className='w-60 bg-gray-200 rounded p-5 gap-3 flex flex-col justify-center items-center' key={ind}>
                    <h1 className='text-2xl  font-bold  text-teal-950'>{student.name}</h1>
                    <div>
                    <Link to={`/editstudent/${student._id}`}><button className=' px-3 py-1 rounded text-sm bg-teal-900 text-stone-100 hover:bg-teal-950' >Edit</button></Link>
                    <button className='ml-7 px-3 py-1  rounded bg-red-700 text-sm text-stone-100 hover:bg-red-750' onClick={()=>{deleteStudent(`${student._id}`)}}>Delete</button>
                    </div>
                </div>)
            }
        </div>
    </>
  )
}

export default Home
