import { Input } from "@/components/ui/input";
import React from "react";

interface SearchBarProps {
    isVisible: boolean;
  }

const SearchBar: React.FC<SearchBarProps> = ({isVisible}) => {
  return (
    <div className={`${isVisible ? 'block' : 'hidden'} mt-4`}>
      <Input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  )
}

export default SearchBar