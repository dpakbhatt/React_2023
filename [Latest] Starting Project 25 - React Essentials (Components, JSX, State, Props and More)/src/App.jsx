import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  const selectHandler = (selectedTab) => {
    console.log("Running", selectedTab);
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
