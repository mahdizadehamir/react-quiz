//Api
import { useEffect } from "react"
import { fetchApi } from "./Services/Api"

function App() {
useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApi("https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple")
      console.log(data)
    }
    fetchData()
},[])
  return (
    <>
      App
    </>
  )
}

export default App
