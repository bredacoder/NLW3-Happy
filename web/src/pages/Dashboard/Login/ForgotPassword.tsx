import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import DashboardHappy from '../../../components/DashboardHappy';

import '../../../styles/pages/forgot-password.css'

export default function ForgotPassword() {
  const { goBack } = useHistory();
  const [email, setEmail] = useState('');

  return (
    <main className="page-content">
      <DashboardHappy />

      <form className="forgot-password">
      <fieldset>
          <button type="button" className="btn-back"onClick={goBack}>
            <FiArrowLeft size={24} color="#15C3D6" />
          </button>

          <legend>Esqueci a senha</legend>
          
          <p>Sua redefinição de senha será enviada
          para o e-mail cadastrado.
          </p>

          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input 
              onChange={(e) => {setEmail(e.target.value)}}
              className={ email ? 'active' : '' }
              id="email"
            />
          </div>
        
          <Button active={ email && 'active' } textButton={'Enviar'}/>
        </fieldset>
      </form>
    </main>
  )
}