function Question({ loading, data }) {
  return <>{loading ? <h3>Loading ...</h3> : <div> {data[0].question}</div>}</>;
}

export default Question;
