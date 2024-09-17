import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MessageComp from './components/MessageComp'
import LoadingComp from './components/LoadingComp'
import UserCard from './components/UserCard'
import { FaUsers } from 'react-icons/fa'
function App() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState(false)
  const [displayMessage, setDisplayMessage] = useState({
    title: 'Welcome to the Github Database',
    text: 'Input your query parameters in the search box above to begin surfing through the GitHub Users database',
    icon: <FaUsers className='icon' />,
  })
  // console.log(userData)
  // const isEmptyObject = (obj) => obj && Object.keys(obj).length === 0

  return (
    <main>
      {/* Header */}
      <header className='nav-bar'>
        <h3>GITHUB USERS FETCHER</h3>
      </header>

      {/* Search Bar */}
      <SearchBar
        setUserData={setUserData}
        setLoading={setLoading}
        setQuery={setQuery}
        query={query}
        loading={loading}
        setResult={setResult}
        setError={setError}
        setDisplayMessage={setDisplayMessage}
        result={result}
      />

      {/* Display */}
      {loading ? (
        <LoadingComp />
      ) : userData === null || error ? (
        <MessageComp displayMessage={displayMessage} />
      ) : (
        <UserCard userData={userData} result={result} />
      )}
    </main>
  )
}

export default App
