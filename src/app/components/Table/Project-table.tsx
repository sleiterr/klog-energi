"use client";
import React from "react";

export interface CompanyTableProps {
  children?: React.ReactNode;
}

const headers = ["Projekt", "Lokation", "Type", "Aktører", "Status"];

export default function ProjectTable({ children }: CompanyTableProps) {
  return (
    <section className="py-[60px] px-4 lg:py-[120px] lg:mx-auto lg:px-50 lg:max-w-5x1">
      <div className="">
        <table className="table-auto w-full border-separate border-spacing-y-0 ">
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
