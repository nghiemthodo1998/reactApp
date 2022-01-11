import React, { useState } from 'react';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      navigate('/dashboard/products');
    }
  };
  return (
    <div className="login-overview">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              autoFocus
            />
          </div>

          <div>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </div>

          <br />
          <Button
            className="submit-btn"
            onClick={handleSubmit}
            type="primary"
            block
            shape="round"
            icon={<MailOutlined />}
            size="large"
            disabled={!email || password.length < 5}
          >
            Login with Email/Password
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
