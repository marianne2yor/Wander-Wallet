import { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '../assets/WanderWalletLogo.png';

function HomePage() {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [balance, setBalance] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!location.trim()) {
      newErrors.location = 'Location is required.';
    }

    if (!balance.trim()) {
      newErrors.balance = 'Balance is required.';
    } else if (isNaN(balance) || parseFloat(balance) <= 0) {
      newErrors.balance = 'Balance must be a positive number.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name,location,balance)

    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      localStorage.setItem('name', name);
      localStorage.setItem('location', location);
      localStorage.setItem('balance', balance);
      localStorage.setItem('financeState', JSON.stringify({  
          isDialogOpen: false,
          transactions: [],
          income: 0,
          expenses: 0,
          balance: balance,}))

    console.log('Saved to localStorage:', {
      name,
      location,
      balance,
    });

    navigate('/MainPage');
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-300 to-orange-500 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What is your name?
            </label>
            <input
              type="text"
              placeholder="Full Name or Nickname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Where are we going?
            </label>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How much is your budget?
            </label>
            <input
              type="text"
              placeholder="Enter Amount"
              value={balance}
              onChange={(e) => {
                const value = e.target.value;
                if (!isNaN(value) || value === '') {
                  setBalance(value);
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.balance && <p className="text-red-500 text-sm mt-1">{errors.balance}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium"
          >
            Let's go!
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;