import React from 'react'
function UserCard({ result, userData }) {
  return (
    <section className='card-section'>
      <h1 className='query-text'>
        Showing result for : <span>{result}</span>{' '}
      </h1>
      <div className='card'>
        {/* image */}
        <div className='  '>
          <img
            src={userData?.avatar_url}
            alt={`${userData.name}'s profile avatar`}
            className=' card-image'
          />
        </div>
        {/* text */}
        <div className='card-text'>
          <div className='card-text-header'>
            <h1>
              {userData?.name === null ? 'Not-Available' : userData?.name}
            </h1>
            <p>
              {userData?.location === null
                ? 'Not-Available'
                : userData?.location}{' '}
              | {userData?.followers} Followers
            </p>
          </div>
          {/* bio */}
          <p className='card-text-paragraph'>
            {userData?.bio === null ? 'Not-Available' : userData?.bio}
          </p>
        </div>
        {/* button */}
        <button
          onClick={() => window.open(`${userData?.html_url}`, '_blank')}
          className='card-button'
        >
          Visit Profile Page
        </button>
      </div>
    </section>
  )
}

export default UserCard
