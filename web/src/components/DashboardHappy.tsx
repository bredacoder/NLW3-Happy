import React from 'react';

import loginLogo from '../images/login-logo.svg'

import '../styles/components/dashboard-happy.css'

function DashboardHappy() {
  return (
    <div className="content-wrapper">
      <img src={loginLogo} alt="Happy Logo" />
        <strong>Primavera do Leste</strong>
        <span>Mato Grosso</span>
    </div>
  );
}

export default DashboardHappy;