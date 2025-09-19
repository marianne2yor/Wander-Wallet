import Balance from './components/Balance';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Income from './components/Income';
import LocName from './components/LocationAndName';
import Transactions from './components/Transactions';
import { useState } from 'react';
import BasicDialog from './components/BasicDialog';
import AddNew from './components/AddNew';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
