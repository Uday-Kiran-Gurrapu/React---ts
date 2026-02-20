import React from "react";
type SearchInputProps = {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
};
function SearchInput({ value, placeholder, onChange }: SearchInputProps) {
    
    return (
        <div>
            <input
            type = "text"
            placeholder={placeholder ?? "Search..."}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
        </div>);
}export default React.memo(SearchInput);