import { Button } from '@/components/ui/button';
import React from 'react';
import { IoMdSearch } from "react-icons/io";

interface SearchButtonProps {
  onSearch: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onSearch }) => {
  return (
    <Button
      onClick={onSearch}
      className=" rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
    >
      <IoMdSearch color='white' size={25}/>
    </Button>
  );
};

export default SearchButton;
