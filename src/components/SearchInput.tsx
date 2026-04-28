import React from "react";

type SearchInputProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

function SearchInput({ value, placeholder, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder ?? "Search..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
    />
  );
}

export default React.memo(SearchInput);
