import React, { useState } from 'react';

function AddNew({ onAdd, onClose }) {
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !category || !amount || isNaN(parseFloat(amount))) {
      alert('Please fill in all fields');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      type,
      date,
      category,
      amount: parseFloat(amount),
    };

    onAdd(newTransaction);
    onClose();
    setType('income');
    setDate('');
    setCategory('');
    setAmount('');
  };

  return (
    <div>
      <p className="text-lg font-semibold text-gray-900 mb-4">
        Add New Transaction
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Type:
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-full text-white ${
                type === 'income' ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onClick={() => setType('income')}
            >
              Income
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-full text-white ${
                type === 'expense' ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onClick={() => setType('expense')}
            >
              Expense
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date:
          </label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Category:
          </label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select a category</option>
            <option value="Salary">Salary</option>
            <option value="Allowance">Allowance</option>
            <option value="BankTransfer">BankTransfer</option>
            <option value="Transportation">Transportation</option>
            <option value="Food">Food</option>
            <option value="Education">Education</option>
            <option value="Gifts">Gifts</option>
            <option value="Souvenirs">Souvenirs</option>
            <option value="Donations">Donations</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Clothing">Clothing</option>
            <option value="Insurance">Insurance</option>
            <option value="HouseholdItemsSupplies">
              Household Supplies
            </option>
            <option value="Housing">Housing</option>
            <option value="Bills">Bills</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount:
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter amount"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNew;
