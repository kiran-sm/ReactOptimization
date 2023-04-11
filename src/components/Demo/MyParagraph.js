import { Fragment } from "react";

const MyParagraph = (props) => {
  return (
    <Fragment>
      <p> {props.children}</p>
    </Fragment>
  );
};
export default MyParagraph;
