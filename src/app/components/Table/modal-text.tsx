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
      <div>
        <div className="">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-lg font-bold"
          >
            X
          </button>
        </div>
        <div className="">
          <h2>{project.projekt}</h2>
          <p>Location: {project.lokation}</p>
          <p>Type: {project.type ? "Vindenergi" : "Energitype"}</p>
          <p>Aktører: {project.aktorer.join(", ")}</p>
          <p>
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
