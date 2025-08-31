//Project-row
import React from "react";
import clsx from "clsx";
import { Status, labelByStatus } from "../../utils/statusLabels";
import StatusLabel from "./Status-label";
import { motion } from "motion/react";

export interface ProjectRowProps {
  id: number;
  projekt: string;
  lokation: string;
  type: boolean;
  aktorer: string[];
  status: Status;
  onClick?: () => void;
}

// const labelByStatus = {
//   [Status.Active]: "I drift",
//   [Status.Pending]: "Under udvikling",
//   [Status.NotActive]: "Planlagt",
// };

export default function ProjectRow({
  id,
  projekt,
  lokation,
  type,
  aktorer,
  status,
  onClick,
}: ProjectRowProps) {
  return (
    <>
      <motion.tr
        id=""
        // onClick={onClick}
        onClick={() => {
          console.log("CLICK on row:", projekt);
          if (onClick) onClick();
        }}
        className="h-14 text-center cursor-pointer group hover:bg-[#E4EADC] transition-colors duration-300"
      >
        <td
          className="font-medium text-lg text-primary text-left px-4 border-b-1 border-[#E4EADC] group-hover:text-hover transition-colors duration-300"
          id="project"
        >
          {projekt}
        </td>
        <td
          className="font-light text-lg text-primary text-left pr-12 border-b-1 border-[#E4EADC] group-hover:text-hover transition-colors duration-300"
          id="location"
        >
          {lokation}
        </td>
        <td className="pr-12 border-b-1 border-[#E4EADC] group-hover:text-hover transition-colors duration-300">
          <p
            className={clsx(
              "font-light text-lg text-primary text-left",
              "group-hover:text-hover transition-colors duration-300"
            )}
          >
            {type ? "Vindenergi" : "Energitype"}
          </p>
        </td>
        <td className="pr-12 py-2 border-b-1 border-[#E4EADC] ">
          {aktorer.map((aktor, index) => (
            <p
              key={index}
              className="flex flex-col items-start justify-center font-light text-lg text-primary text-left group-hover:text-hover transition-colors duration-300"
            >
              {aktor}
            </p>
          ))}
        </td>
        <td className=" border-b-1 border-[#E4EADC]">
          <StatusLabel status={status} />
        </td>
      </motion.tr>
    </>
  );
}
