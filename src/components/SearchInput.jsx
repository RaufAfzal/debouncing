const SearchInput = ({searchTerm, setSearchTerm}) => {
  return (
    <div>
    <input
        className="search-input"
        autoFocus
        type="text"
        placeholder="Search an item"
        value= {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value) }

    />
     
    </div>
  )
}

export default SearchInput
