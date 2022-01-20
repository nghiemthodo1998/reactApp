import React, { useState } from 'react';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getInfoUser } from '../../Redux/userSlice';

const initialUser = {
  email: 'nghiemthodo1998@gmail.com',
  password: '111111',
};

function Login() {
  const [user, setUser] = useState(initialUser);
  const listUser = useSelector((state) => state.users.listUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const infoUser = listUser.find((item) => {
      if (item.email === user.email && item.password === user.password) {
        return item;
      }
    });
    if (
      infoUser &&
      infoUser.email === user.email &&
      infoUser.password === user.password
    ) {
      if (infoUser.role === 'admin') {
        toast.success('Tài khoản admin đã đăng nhập thành công.');
        dispatch(getInfoUser(infoUser));
        navigate('/dashboard/products');
      } else {
        toast.success(`Tài khoản ${user.email} đã đăng nhập thành công.`);
        dispatch(getInfoUser(infoUser));
        navigate('/');
      }
    } else toast.warning('Bạn đã điền sai thông tin đăng nhập.');
  };

  return (
    <div className="login-overview">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              className="form-input"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Your email"
              autoFocus
            />
          </div>

          <div>
            <input
              type="password"
              className="form-input"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Your password"
            />
          </div>

          <br />
          <Button
            className="submit-btn"
            onClick={(e) => handleSubmit(e)}
            type="primary"
            block
            shape="round"
            icon={<MailOutlined />}
            size="large"
            disabled={!user.email || user.password.length < 6}
          >
            Login with Email/Password
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
