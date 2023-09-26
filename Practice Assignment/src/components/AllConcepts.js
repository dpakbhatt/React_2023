import KeyConcept from "./KeyConcept";

const AllConcept = (props) => {
  return (
    <ul id="concepts">
      <KeyConcept
        title={props.concepts[0].title}
        image={props.concepts[0].image}
        description={props.concepts[0].description}
      ></KeyConcept>
      <KeyConcept
        title={props.concepts[1].title}
        image={props.concepts[1].image}
        description={props.concepts[1].description}
      ></KeyConcept>
      <KeyConcept
        title={props.concepts[2].title}
        image={props.concepts[2].image}
        description={props.concepts[2].description}
      ></KeyConcept>
    </ul>
  );
};

export default AllConcept;
