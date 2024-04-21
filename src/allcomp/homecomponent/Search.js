import React from 'react'

const Search = () => {
    return (
        <>
            <form className='relative'>
                <input type="text" placeholder='What are you looking for?' className='px-3 py-2 w-64 md:w-96 border rounded-md placeholder:text-gray-600 text-md text-black' />
                <i className="fa fa-search text-black absolute top-3 right-3" aria-hidden="true"></i>
            </form>
        </>
    )
}

export default Search;