import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import './App.css';

const playlist = [
  {
    id: 1,
    title: 'Track 1',
    artist: 'Artist 1',
    thumbnail: 'https://source.unsplash.com/random/50x50',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 2,
    title: 'Track 2',
    artist: 'Artist 2',
    thumbnail: 'https://source.unsplash.com/random/50x50',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 3,
    title: 'Track 3',
    artist: 'Artist 3',
    thumbnail: 'https://source.unsplash.com/random/50x50',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

const Audio = () => {
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);

  const handleTrackChange = (track) => {
    setCurrentTrack(track);
  };

  const thumbnailStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
    cursor: 'pointer',
  };

  const trackList = playlist.map((track) => (
    <div key={track.id} onClick={() => handleTrackChange(track)} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <img src={track.thumbnail} alt={track.title} style={thumbnailStyle} />
      <span style={{ fontSize: '14px' }}>{track.title}</span>
    </div>
  ));

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <img src={currentTrack.thumbnail} alt={currentTrack.title} style={{ ...thumbnailStyle, width: '100px', height: '100px', marginBottom: '10px' }} />
        <div style={{ fontSize: '16px', marginBottom: '10px' }}>{currentTrack.title}</div>
        <div style={{ backgroundColor: '#f1f1f1', borderRadius: '4px', padding: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AudioPlayer src={currentTrack.audioSrc} controlsList="nodownload" controls />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ textAlign: 'left' }}>{trackList}</div>
      </div>
    </div>
  );
};

export default Audio;



