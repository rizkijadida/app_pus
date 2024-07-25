"use client";
import { MdEmojiEvents } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="m-5">
      <div className="flex gap-5 items-center">
        <MdEmojiEvents size={30} color="gold"/>
        <p className="font-medium">Event Kompetisi Online</p>
      </div>
    </div>
  );
};
  
export default Dashboard;
