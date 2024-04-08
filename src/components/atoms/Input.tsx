import React from "react";

type TSearchInput = {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};
const SearchInput = ({ country, setCountry }: TSearchInput) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="City"
        value={country}
        className="w-full border rounded shadow-dropShadow border-t09 px-5 py-[9px] outline-none text-lg text-t333"
        onChange={(e) => setCountry(e.target.value)}
      />
      <svg
        onClick={() => setCountry("")}
        width="14"
        height="14"
        className={`absolute cursor-pointer top-1/2 right-5 -translate-y-1/2 transition-all ${
          country === "" ? "hidden" : "block"
        }`}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.353553"
          y1="0.646447"
          x2="13.3536"
          y2="13.6464"
          stroke="black"
        />
        <line
          x1="0.646447"
          y1="13.6464"
          x2="13.6464"
          y2="0.646446"
          stroke="black"
        />
      </svg>
    </div>
  );
};

export default SearchInput;
