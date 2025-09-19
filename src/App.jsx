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
