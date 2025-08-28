// Modal Text
"use client";
import React from "react";
import Modal, { ModalProps } from "./modal";
import StatusLabel from "./Status-label";
import { Status, labelByStatus } from "../../utils/statusLabels";

interface Project {
  id: number;
  projekt: string;
  lokation: string;
  type: boolean;
  aktorer: string[];
  status: Status;
}

interface TbProjectModalProps {
  project: Project;
  onClose: () => void;
  show?: boolean;
}

export default function TbProjectModal({
  project,
  show,
  onClose,
}: TbProjectModalProps) {
  if (!show) return null;
  console.log("Modal render:", project, show);
  return (
    <Modal show={!!show} onClose={onClose}>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-[1rem] right-0 translate-x-1/2 text-lg font-bold cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-white w-9 h-9 hover:text-gray-300 transition-colors duration-300"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="flex flex-col gap-2 py-12">
          <h2 className="text-white">{project.projekt}</h2>
          <p className="text-white">Location: {project.lokation}</p>
          <p className="text-white">
            Type: {project.type ? "Vindenergi" : "Energitype"}
          </p>
          <p className="text-white">Aktører: {project.aktorer.join(", ")}</p>
          <p className="flex items items-center gap-2 text-white">
            Status:
            <StatusLabel status={project.status}>
              {labelByStatus[project.status]}
            </StatusLabel>
          </p>
        </div>
      </div>
    </Modal>
  );
}
