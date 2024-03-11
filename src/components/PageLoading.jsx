import React from "react";
import Button from "@mui/joy/Button";
import LoopIcon from "@mui/icons-material/Loop";
const PageLoading = () => {
  return (
    <div className="w-full min-h-[80vh] text-[32px] gap-3 fon-[700] text-main  flex items-center justify-center">
      <LoopIcon
        className="!text-[52px]    animate-spin rotate-180  object-contain"
        alt=""
      />
      Ýüklenýär...
    </div>
  );
};

export default PageLoading;
