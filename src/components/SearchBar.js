import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function SearchBar({ setUserData, setLoading }) {
  const [query, setQuery] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    if (query === '') {
      return toast.warning('Please input a GitHub username')
    }
    setLoading(true)

    console.log(query)
    axios
      .get(`${process.env.REACT_APP_GITHUBAPI_URL}/${query}`)
      .then(function (response) {
        setLoading(false)
        setUserData(response?.data)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <section className='section-center'>
      <form className='search-form' onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Please input Github user name here'
          className='input-search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      <ToastContainer />
    </section>
  )
}

export default SearchBar
