import './SearchBar.css'

function SearchBar({setSearch, setPageNumber}) {
    return (
        <div className="search-bar mx-auto">
            <input className="form-control" type="text" placeholder="Search for characters" onChange={e=>{
                setPageNumber(1);
                setSearch(e.target.value);
            }}/>   
            <span>Search</span>
        </div>        
    );
}
export default SearchBar;