import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

const AUTH_URL =
  `https://accounts.spotify.com/authorize?show_dialog=true&client_id=038f5d24d4b14556892f7aaf2c9457ac&response_type=code&redirect_uri=https://musicify00.herokuapp.com/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return (
    <div  className="login-container">
      <a className="login-button" href={AUTH_URL}>
        <div className="spotify-login-icon">
          <FontAwesomeIcon icon={faSpotify} />
        </div>
        Login with Spotify
      </a>
    </div>
  )
}
