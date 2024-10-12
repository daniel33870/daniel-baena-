import Icon from "./icon";

function Search(){
    return(
        <>
        <li className="search-box">
        <Icon className='icon' type="search"
        />
        <input type="search" placeholder="Search..." />
        </li>
        
        </>
    )
}

export default Search;