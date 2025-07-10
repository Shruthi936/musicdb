import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <input placeholder="Email" /><br />
      <input placeholder="Password" type="password" /><br />
      <button onClick={() => navigate('/home')}>Login</button>
      <p onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>Register</p>
    </div>
  );
}
export default Login;
