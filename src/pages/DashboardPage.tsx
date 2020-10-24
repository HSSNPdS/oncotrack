import React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import DashboardGrid from '../components/DashboardGrid';
import NavigationBar from '../components/NavigationBar';

import '../styles/pages/dashboard.css'

function DashboardPage() {
  return (
    <div id="dashboard-page-content">
      <NavigationBar/>
      <DashboardGrid/>
    </div>
  );
}

export default DashboardPage;