import React, { useState } from 'react';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';

import DashboardHappy from '../../../components/DashboardHappy';

import '../../../styles/pages/login.css'

function Login() {
  const { goBack } = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (

    <main className="page-content">
      
      <DashboardHappy />
      
      <form className="login">
        <fieldset>
          <button type="button" className="btn-back"onClick={goBack}>
            <FiArrowLeft size={24} color="#15C3D6" />
          </button>

          <legend>Fazer login</legend>

          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input
              className={ email ? 'active' : '' }
              onChange={(e) => {setEmail(e.target.value)}}
              id="email"
            />
          </div>
          
          <div className="input-block">
            <label htmlFor="password">Senha</label>
            <input 
              className={ password ? 'active' : '' }
              onChange={(e) => {setPassword(e.target.value)}}
              id="password"
            />
          </div>

          <footer>
            <div className="remember-checkbox">
              <input 
                type="checkbox"
                id="remember"
              />
            <label htmlFor="remember">
              <span>
                <FiCheck color="#FFF" size={16} />
              </span>
                Lembrar-me
              </label>
            </div>
            <Link to="forgot-password">Esqueci minha senha</Link>
          </footer>

          <Button 
            active={email && password ? 'active' : ''} 
            textButton={'Entrar'}
          />
        </fieldset>
      </form>

    </main>
  );
};

export default Login;