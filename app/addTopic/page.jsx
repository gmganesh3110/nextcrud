'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router=useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res= await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Context-type": "application/json",
        },
        body: JSON.stringify({ title, description   }),
      });
      if(!res.ok){
        console.log('Failed to add')
      }
      else{
        router.push('/')
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          value={description}
          placeholder="Topic Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-6 w-fit "
          >
            Add Topic
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTopic;
