import React from 'react';
import './Dashboard.css';
import Searchbar from './Searchbar';
import Button from './Button';
import List from './List';

let Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-navbar">
        <Searchbar />
        <Button />
        <Button />
        <Button />
      </div>
      <List />
    </div>
  );
}

export default Dashboard;