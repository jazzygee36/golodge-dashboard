"use client";
import { useState } from "react";

const SwitchToggle = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
      />
      <div className="w-[53px] h-[28px] bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#3F6FB9] rounded-full peer peer-checked:bg-[#3F6FB9]"></div>
      <div className="absolute left-0 top-0 bg-white w-[26px] h-[26px] rounded-full transition-transform peer-checked:translate-x-full"></div>
    </label>
  );
};

export default SwitchToggle;
