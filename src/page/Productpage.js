import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Productpage = () => {
    let [query, setQuery] = useSearchParams()
    console.log("11",query)
    console.log("22",query.get("page"))
  return (
    <div>
      <h1>Show all products</h1>
    </div>
  )
}

export default Productpage
