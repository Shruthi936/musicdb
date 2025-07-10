import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div style={ padding: '2rem' }>
      <h1>Welcome to Arijit’s Songs</h1>
      <div style={ display: 'flex', gap: '1rem', flexWrap: 'wrap' }>
        
          <div style={ backgroundColor: "#111", padding: "1rem", borderRadius: "10px", width: "200px" }>
            <h3>Tum Hi Ho</h3>
            <p>Arijit Singh</p>
            <button onClick={() => navigate("/song/0")}>Play</button>
          </div>
          
          <div style={ backgroundColor: "#111", padding: "1rem", borderRadius: "10px", width: "200px" }>
            <h3>Raabta</h3>
            <p>Arijit Singh</p>
            <button onClick={() => navigate("/song/1")}>Play</button>
          </div>
          
          <div style={ backgroundColor: "#111", padding: "1rem", borderRadius: "10px", width: "200px" }>
            <h3>Agar Tum Saath Ho</h3>
            <p>Arijit Singh</p>
            <button onClick={() => navigate("/song/2")}>Play</button>
          </div>
          
      </div>
    </div>
  );
}
export default Home;
