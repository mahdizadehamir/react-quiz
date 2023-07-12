//Api
import { useEffect, useState } from "react";
import { fetchApi } from "../../Services/Api";
function Question() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApi(
        "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple"
      );
      setData(data);
      setLoading(false);
    };
    fetchData();
    console.log(data);
  }, []);
  return <>{loading ? <h3>Loading ...</h3> : <div></div>}</>;
}

export default Question;
