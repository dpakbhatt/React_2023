import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  let tabContent = "Please select any tab";

  const selectHandler = (selectedTab) => {
    console.log("Running", selectedTab);
    setSelectedTab(selectedTab);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => selectHandler("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => selectHandler("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => selectHandler("props")}>Props</TabButton>
            <TabButton onSelect={() => selectHandler("state")}>State</TabButton>
          </menu>
          {!selectedTab && tabContent}
          {selectedTab && selectedTab}
        </section>
      </main>
    </div>
  );
}

export default App;
