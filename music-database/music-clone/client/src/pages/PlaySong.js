import { useParams } from 'react-router-dom';

const songs = [{'title': 'Tum Hi Ho', 'artist': 'Arijit Singh', 'url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}, {'title': 'Raabta', 'artist': 'Arijit Singh', 'url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'}, {'title': 'Agar Tum Saath Ho', 'artist': 'Arijit Singh', 'url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'}];

function PlaySong() {
  const { id } = useParams();
  const song = songs[id];

  return (
    <div style={ padding: '2rem' }>
      <h2>Now Playing: {song.title}</h2>
      <p>By {song.artist}</p>
      <audio controls src={song.url} autoPlay style={ width: '100%' } />
    </div>
  );
}
export default PlaySong;
