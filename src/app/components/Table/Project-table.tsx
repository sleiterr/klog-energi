"use client";
import React from "react";

export interface CompanyTableProps {
  children?: React.ReactNode;
}

const headers = ["Projekt", "Lokation", "Type", "Aktører", "Status"];

export default function ProjectTable({ children }: CompanyTableProps) {
  return (
    <section className="">
      <div className="md:py-[120px] md:mx-auto md:px-4 lg:max-w-7xl">
        <table className="table-auto md:w-full border-separate border-spacing-y-0 ">
          <thead>
            <tr className="">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="border-b-1 border-[#E4EADC] font-semibold text-xl text-primary px-4 pb-4 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </section>
  );
}
