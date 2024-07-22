"use client";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";
import DatePicker from "react-datepicker";

interface DateInputProps {
  label: string;
  initialDate?: Date | null;
}

const DateInput: React.FC<DateInputProps> = ({ label, initialDate }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    initialDate ?? null,
  );
  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div>
      {label && (
        <Label className="block text-xs font-medium text-gray-700">
          {label}
        </Label>
      )}
      <DatePicker
        id="dob"
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        customInput={
          <Input
            placeholder="Select a date"
            type="date"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        }
        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
      />
    </div>
  );
};

export default DateInput;
