import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

function Examples() {
  const [selectedTab, setSelectedTab] = useState();

  const selectHandler = (selectedTab) => {
    setSelectedTab(selectedTab);
  };

  let tabContent = "Please select any tab";

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTab === "components"}
          onSelect={() => selectHandler("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTab === "jsx"}
          onSelect={() => selectHandler("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTab === "props"}
          onSelect={() => selectHandler("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTab === "state"}
          onSelect={() => selectHandler("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}

export default Examples;
