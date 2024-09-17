import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MessageComp from './components/MessageComp'
import LoadingComp from './components/LoadingComp'
import UserCard from './components/UserCard'

function App() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  // const isEmptyObject = (obj) => obj && Object.keys(obj).length === 0

  return (
    <main>
      {/* Header */}
      <header className='nav-bar'>
        <h3>GITHUB USERS FETCHER</h3>
      </header>

      {/* Search Bar */}
      <SearchBar setUserData={setUserData} setLoading={setLoading} />

      {/* Display */}
      {loading ? (
        <LoadingComp />
      ) : userData === null ? (
        <MessageComp />
      ) : (
        <UserCard userData={userData} />
      )}
    </main>
  )
}

export default App
