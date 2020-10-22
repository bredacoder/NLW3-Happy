import React from 'react';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';

import DashboardHappy from '../../../components/DashboardHappy';

import '../../../styles/pages/login.css'

function Login() {
  const { goBack } = useHistory();

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
              id="email"
            />
          </div>
          
          <div className="input-block">
            <label htmlFor="password">Senha</label>
            <input 
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
            <Link to="">Esqueci minha senha</Link>
          </footer>

          <Button textButton={'Entrar'}/>
        </fieldset>
      </form>

    </main>
  );
};

export default Login;