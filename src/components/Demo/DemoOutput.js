import { Fragment } from "react";

const DemoOutput = (props) => {
  return (
    <Fragment>
      <p>{props.show ? "This is new!" : ""}</p>
    </Fragment>
  );
};

export default DemoOutput;
