import { useState } from 'react'
import logo from '../assets/img/logo.png'

const ProfileCard = ({ profile, onClick }) => {
  const [profileName, setProfileName] = useState(
    profile.shortcut_name ? profile.shortcut_name : profile.name
  )

  return profile.id === '-1' ? (
    <div className="border border-dashed border-gray-400 profile-container py-4" onClick={onClick}>
      <input
        type="text"
        placeholder="Profile name"
        value="Add"
        className="rounded-t-lg text-center"
        readOnly
      />
      <div className="w-20 h-20 bg-gray-800 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
        </svg>
      </div>
    </div>
  ) : (
    <div className="border border-gray-400/50 profile-container py-4" onClick={onClick}>
      <input
        type="text"
        placeholder="Profile name"
        value={profileName}
        className="rounded-t-lg text-center"
        /* onChange={(e) => setProfileName(e.target.value)}
        onBlur={() =>
          window.electron.ipcRenderer.send(
            'modify-profile-name',
            profile.shortcut_name,
            profileName
          )
        } */
        readOnly
        /* onClick={(e) => e.stopPropagation()} */
      />
      <div className="w-20 h-20 bg-gray-800 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
        </svg>
      </div>
    </div>
  )
}

export default ProfileCard
