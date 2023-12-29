import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const Search = () => {
    return (
        <div className="search-bar">
            <form
                className="search-form d-flex align-items-center"
                method="POST"
                action="#"
            >
                <input
                    type="text"
                    name="query"
                    placeholder="Search"
                    title="Enter search keyword"
                />
                <button type="submit" title="Search">
                    <IoIosSearch />
                </button>
            </form>
        </div>
    )
}

export default Search