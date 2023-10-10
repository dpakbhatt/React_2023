import React, { useMemo } from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("RUNNING");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <>
      <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>
      {sortedList.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </>
  );
};

export default React.memo(DemoOutput);
