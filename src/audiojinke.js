import React, { useState } from 'react';
import 'react-jinke-music-player/assets/index.css';
import ReactJkMusicPlayer from 'react-jinke-music-player';

const playlist = [
  {
    name: 'Track 1',
    singer: 'Artist 1',
    cover: 'https://source.unsplash.com/random/50x50',
    musicSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    name: 'Track 2',
    singer: 'Artist 2',
    cover: 'https://source.unsplash.com/random/50x50',
    musicSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    name: 'Track 3',
    singer: 'Artist 3',
    cover: 'https://source.unsplash.com/random/50x50',
    musicSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

const Audio = () => {
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleTrackChange = (trackIndex) => {
    setCurrentTrack(trackIndex);
  };

  return (
    <div>
      <div>
        <img src={playlist[currentTrack].cover} alt={playlist[currentTrack].name} style={{ width: '100px', height: '100px' }} />
        <div>{playlist[currentTrack].name}</div>
      </div>
      <ReactJkMusicPlayer
        audioLists={playlist}
        defaultPlayIndex={currentTrack}
        mode="full"
        onAudioListsChange={handleTrackChange}
        showDownload={false}
        autoPlay={false}
        style={{ backgroundColor: '#f2f2f2', borderRadius: '5px', padding: '10px' }}
      />
    </div>
  );
};

export default Audio;
