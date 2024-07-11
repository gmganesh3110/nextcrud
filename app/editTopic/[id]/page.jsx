"use client";
import React, { useEffect, useState } from "react";

const EditTopic = ({ params }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = params;

  useEffect(() => {
    getTopicById();
  }, []);

  const getTopicById = async () => {
    try {
      const res = await fetch("/api/topics?id=" + id, {
        method: "GET",
      });
      const {topics} = await res.json();
      setTitle(topics[0].title);
      setDescription(topics[0].description);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTopic = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/topics?id=" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        console.log("Topic updated successfully");
      } else {
        console.log("Failed to update topic");
      }
    } catch (err) {
      debugger
      console.log(err);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={updateTopic}>
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
          placeholder="Topic Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="text-center">
          <button
            className="bg-green-500 text-white py-3 px-6 w-fit"
            type="submit"
          >
            Update Topic
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTopic;
