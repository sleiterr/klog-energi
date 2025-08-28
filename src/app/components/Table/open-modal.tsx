//openModal
"use client";

import React, { useState } from "react";
import ProjectTable from "./Project-table";
import ProjectRow from "./Project-row";
import TbProjectModal from "./modal-text";
import MobilList from "./mob-Card";
// import { Status } from "./Status-label";

export default function OpenModal({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Project Table */}
      <div className="hidden md:block">
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
      </div>

      {/* Mobile View */}
      <div className="block px-4 md:hidden md:px-0">
        {projects.map((p) => (
          <MobilList key={p.id} project={p} />
        ))}
      </div>

      {/* Modal View */}
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
