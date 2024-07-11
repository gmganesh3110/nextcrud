"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
const RemoveBtn = ({id}) => {
  const router=useRouter()
  const handleDelete=async()=>{
    try {
      const confirmed=confirm('Are you sure?')
      if(confirmed){
        await fetch("http://localhost:3000/api/topics?id="+id,{
          method:"DELETE",
        })
        router.refresh()
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
        <button onClick={()=>handleDelete()} className='text-red-400'>
        <HiOutlineTrash size={24} />
        </button>
    </div>
  )
}

export default RemoveBtn