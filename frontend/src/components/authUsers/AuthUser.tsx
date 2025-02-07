import React,{ useState } from "react";
import "../../assets/css/AuthUser.css"
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      ;
    } else {
      ;
    }
  };

  return (
    <div className="container">
      <form className="childContainer" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Register"}</h2>
          {
            !isLogin && (
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="auth-input"
              />
            )
          }
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        {message && <p className="auth-message">{message}</p>}
          
        <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Register"}
        </button>
        {
          isLogin && (
            <div>
              {/* <ResetPassword email={email} setEmail={setEmail} /> */}
            </div>
          )
        }
        <button type="button" onClick={() => setIsLogin(!isLogin)} className="auth-toggle">
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </button>
      </form>
    </div>
  );
}
