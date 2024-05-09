import React from "react";

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black font-extrabold">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black font-extrabold">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "others" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black font-extrabold">Others</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={selectedGender === "others"}
            onChange={() => onCheckBoxChange("others")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
