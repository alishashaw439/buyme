import React from 'react';
import { Routes } from './Routes';
import { LogBox } from 'react-native';

function App() {
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
      <Routes></Routes>
  );
}

export default App;
