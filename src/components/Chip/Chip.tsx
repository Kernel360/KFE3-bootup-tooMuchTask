import React from "react";

type ChipProps = {
  title: string;
  color?: "teal" | "rose" | "neutral";
};
export const Chip = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};
// export const Chip = ({ title, color = "neutral" }: ChipProps) => {
//   const colorMap = {
//     teal: "bg-teal-500",
//     rose: "bg-rose-500",
//     neutral: "bg-neutral-400",
//   };

//   return (
//     <div
//       className={`px-2 py-0.5 rounded-[20px] backdrop-blur-md inline-flex justify-center items-center gap-2.5 ${colorMap[color]}`}
//     >
//       <span className="text-white text-[8px] font-bold font-['Noto_Sans_KR']">
//         {title}
//       </span>
//     </div>
//   );
// };