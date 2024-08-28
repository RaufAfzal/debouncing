import { useState } from "react"
import SearchInput from "./components/SearchInput"
import List from "./components/List"
import useDebounce from "./hooks/useDebounce"

function App() {
  const [searchTerm , setSearchTerm] = useState('')
  const useDebounceValue = useDebounce(searchTerm, 2000)

  return (
    <>
      <SearchInput 
      searchTerm = {searchTerm}
      setSearchTerm= {setSearchTerm}
      />
      <List searchTerm={useDebounceValue}/>

    </>
  )
} 

export default App
