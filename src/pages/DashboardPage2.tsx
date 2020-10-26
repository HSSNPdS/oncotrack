import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Iframe from 'react-iframe';

import '../styles/pages/dashboard.css';
import '../styles/components/gridTemplate.css';

function DashboardPage() {
  return (
    <div id="dashboard-page-content">
      <NavigationBar/>
  
      <div>
        <header>
          <h1>Dashboard: Oncologia Infantil</h1>
        </header>
        <div id="grid">
          <Iframe 
            className="Map"
            url="https://datastudio.google.com/embed/reporting/4b6b00d6-4309-4a05-a565-bc4819131a65/page/1M"
            width="550px"
            height="330px"
          />
          <Iframe
            className="help"
            url="https://datastudio.google.com/embed/reporting/e43b07ac-636d-4ef6-a622-d32786181ca7/page/1M%22%3E"
            width="550px"
            height="330px"
          />
          <Iframe 
            className="data"
            url="https://datastudio.google.com/embed/reporting/7e48ba42-27a1-48e2-ae4d-9f3df31921dc/page/1M"
            width="550px"
            height="390px"
          />
          <Iframe 
            className="score"
            url="https://datastudio.google.com/embed/reporting/2d6d9c42-c9e9-4172-8978-edb7416e11cd/page/1M"
            width="550px"
            height="390px"
          />
        </div>
      </div>    
    </div>
  );
}

export default DashboardPage;