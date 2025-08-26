//openModal
"use client";

import React, { useState } from "react";
import ProjectTable from "./Project-table";
import ProjectRow from "./Project-row";
import TbProjectModal from "./modal-text";
// import { Status } from "./Status-label";

export default function OpenModal({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <ProjectTable>
        {projects.map((p) => (
          <ProjectRow
            key={p.id}
            {...p}
            onClick={() => {
              console.log("Row clicked:", p);
              setSelectedProject(p);
            }}
          />
        ))}
      </ProjectTable>
      {selectedProject && (
        <TbProjectModal
          project={selectedProject}
          onClose={() => {
            console.log("Modal closed");
            setSelectedProject(null);
          }}
          show={!!selectedProject}
        />
      )}
    </>
  );
}
