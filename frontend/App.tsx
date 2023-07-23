import React, { useEffect } from 'react';
import { Routes } from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/userAction';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications

function App() {
const dispatch = useDispatch()
const {user} = useSelector(state=>state.user)
useEffect(()=>{
  dispatch(loadUser())
},[dispatch])
  return (
      <Routes></Routes>
  );
}

export default App;
