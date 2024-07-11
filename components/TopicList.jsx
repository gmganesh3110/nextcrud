import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicList = async () => {
  const getTopics = async () => {
    try {
      const res = await fetch(
        "https://nextcrud-p5hk8w5sc-ganeshgmpersonal1gmailcoms-projects.vercel.app/api/topics",
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
      return res.json();
    } catch (err) {
      console.log(err);
      return { topics: [] }; // Return an empty array on error
    }
  };

  const { topics } = await getTopics();

  return (
    <>
      {topics.length > 0 ? (
        topics.map((item) => (
          <div
            key={item._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div className="">
              <h2 className="font-bold text-2xl ">{item.title}</h2>
              <div className="">{item.description}</div>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={item._id} />
              <Link href={`/editTopic/${item._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No topics available.</p>
      )}
    </>
  );
};

export default TopicList;
