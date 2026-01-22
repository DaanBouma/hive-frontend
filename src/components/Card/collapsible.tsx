import React from "react";
import { useCollapse } from "react-collapsed";

export default function Demo() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div>
      <button {...getToggleProps()}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      <section {...getCollapseProps()}> </section>
    </div>
  );
}


