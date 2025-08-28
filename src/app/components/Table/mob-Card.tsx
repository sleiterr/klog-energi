"use client";

import React from "react";
import { Status } from "../../utils/statusLabels";
import StatusLabel from "./Status-label";

export interface Project {
  id: number;
  projekt: string;
  lokation: string;
  type: boolean;
  aktorer: string[];
  status: Status;
}

interface MobCardProps {
  project: Project;
}

export default function MobCard({ project }: MobCardProps) {
  return (
    <div className="bg-card shadow-md rounded-2xl p-4 mb-4">
      {/* Project Title and Status */}
      <div className="flex items-center justify-between w-full mb-2">
        <span className="font-normal text-xs text-text-card text-left">
          Project
        </span>
        <StatusLabel status={project.status} withText={false} />
      </div>
      <div className="flex items-center justify-between w-full border-b-2 border-gray-300 pb-2">
        <h2 className="font-semibold text-xl text-card-context">
          {project.projekt}
        </h2>
      </div>
      {/* Location */}
      <div className="flex items-center justify-between w-full py-2">
        <p className="font-medium text-text-card text-sm">Lokation</p>
        <p className="text-card-context text-normal">{project.lokation}</p>
      </div>
      <div className="flex items-center justify-between w-full border-t-2 border-gray-300 border-b-2 border-b-gray-300 py-2">
        <p className="font-medium text-text-card text-sm">Aktører</p>
        <div className="">
          {project.aktorer.map((a, i) => (
            <p className="text-right text-card-context" key={i}>
              {a}
            </p>
          ))}
        </div>
      </div>
      {/* Type */}
      <div className="flex items-center justify-between w-full border-b-2 border-gray-300 py-2">
        <p className="font-medium text-text-card text-sm">Type</p>
        <p>{project.type ? "Vindenergi" : "Energitype"}</p>
      </div>
    </div>
  );
}
