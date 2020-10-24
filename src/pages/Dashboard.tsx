import React from 'react';

import Logo from '../images/logo.png';
import '../styles/pages/dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-page-content">
      <aside>
        <img src={Logo} alt="Logo"/>
      </aside>
    </div>
  );
}

export default Dashboard;