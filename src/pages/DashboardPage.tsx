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
            url="https://datastudio.google.com/embed/reporting/1021bec8-8383-409c-b4aa-62391d99888a/page/1M%22%3E"
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
            url="https://datastudio.google.com/embed/reporting/b5375651-23ba-4ad8-b888-a0881d359341/page/1M%22%3E"
            width="550px"
            height="390px"
          />
          <Iframe
            className="score"
            url="https://datastudio.google.com/embed/reporting/a69e223a-5d84-452f-b357-ad6512e98099/page/1M"
            width="550px"
            height="390px"
          />
        </div>
      </div>    
    </div>
  );
}

export default DashboardPage;