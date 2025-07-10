import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Register</h1>
      <input placeholder="Email" /><br />
      <input placeholder="Password" type="password" /><br />
      <button onClick={() => navigate('/')}>Register</button>
    </div>
  );
}
export default Register;
