import React from "react";
import clsx from "clsx";
import { Status } from "../../utils/statusLabels";

// export enum Status {
//   Active = "I drift",
//   Pending = "Under udvikling",
//   NotActive = "Planlagt",
// }

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
  className?: string;
}

export default function StatusLabel({
  children,
  status,
  disabled = false,
  className = "",
}) {
  return (
    <div className={clsx("flex items-center gap-4 justify-start", className)}>
      <div
        className={clsx(
          "rounded-3xl w-5 h-5",
          status === Status.Active && "bg-green-800",
          status === Status.Pending && "bg-yellow-500",
          status === Status.NotActive && "bg-red-500",
          {
            ["opacity-75 cursor-not-allowed"]: disabled,
          }
        )}
      >
        <span className="w-1 h-1 rounded-full bg-current" />
      </div>
      <p className="font-light text-lg text-primary text-left m-0 group-hover:text-hover">
        {children}
      </p>
    </div>
  );
}
