import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Time to get started!">
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
    </Section>
  );
}

export default CoreConcepts;
