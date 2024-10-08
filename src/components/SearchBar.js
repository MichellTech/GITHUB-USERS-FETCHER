import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaUserSlash } from 'react-icons/fa'
import debounce from 'lodash/debounce'

function SearchBar({
  setUserData,
  setLoading,
  setQuery,
  query,
  loading,
  setResult,
  setError,
  setDisplayMessage,
  result,
}) {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const debouncedSearch = debounce((query) => {
      if (query === '') {
        return toast.warning('Please input a GitHub username')
      }
      setLoading(true)
      setError(false)
      axios
        .get(`${process.env.REACT_APP_GITHUBAPI_URL}/${query}`)
        .then((response) => {
          setLoading(false)
          setUserData(response?.data)
          setResult(query)

          setHistory((prevHistory) => [...new Set([query, ...prevHistory])])
        })
        .catch((error) => {
          setLoading(false)
          setError(true)
          setDisplayMessage({
            title: 'User Not Found',
            text: `We couldn’t find any GitHub User named '${query}'. Please adjust your search parameters to get more results.`,
            icon: <FaUserSlash className='icon' />,
          })
          console.log(error)
        })
    }, 500)

    if (query) {
      debouncedSearch(query)
    }

    return () => debouncedSearch.cancel()
  }, [query, setLoading, setError, setUserData, setResult, setDisplayMessage])

  return (
    <section className='section-center'>
      <form className='search-form'>
        <label htmlFor='query'>GitHub Username</label>
        <input
          type='text'
          aria-label='GitHub Username'
          placeholder='Please input GitHub username here'
          className='input-search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          list='search-history'
        />
      </form>

      <datalist id='search-history'>
        {history.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>

      <ToastContainer />
    </section>
  )
}

export default SearchBar
