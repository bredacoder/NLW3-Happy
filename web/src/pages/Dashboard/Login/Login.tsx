import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

import DashboardHappy from '../../../components/DashboardHappy';

import '../../../styles/pages/login.css'

function Login() {
  return (

    <main className="page-content">
      
      <DashboardHappy />
      
      <form className="login">
        <fieldset>
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