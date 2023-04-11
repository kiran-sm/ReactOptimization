const Test = () => {
  const ids = [1, 2, 3, 4, 5, 6];
  const listEle = ids.map((id) => {
    return <li key={id.toString()}>{id}</li>;
  });
  return <>{listEle}</>;
};
export default Test;
