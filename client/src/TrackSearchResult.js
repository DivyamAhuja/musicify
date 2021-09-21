import React from "react"

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <div
      className="track"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} className="track_image" alt={track.title}/>
      <div className="track_details">
        <div className="track_title">{track.title}</div>
        <div className="track_artist">{track.artist}</div>
      </div>
    </div>
  )
}
