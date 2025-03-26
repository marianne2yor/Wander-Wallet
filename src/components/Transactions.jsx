import React from 'react';
import SalaryAllowanceBankTransferIcon from '../assets/icons/SalaryAllowanceBankTransfer.png';
import TransportationIcon from '../assets/icons/Transportation.png';
import FoodIcon from '../assets/icons/Food.png';
import EducationIcon from '../assets/icons/Education.png';
import GiftsSouvenirsDonationsIcon from '../assets/icons/GiftsSouvenirsDonations.png';
import EntertainmentIcon from '../assets/icons/Entertainment.png';
import UtilitiesIcon from '../assets/icons/Utilities.png';
import ClothingIcon from '../assets/icons/Clothing.png';
import InsuranceIcon from '../assets/icons/Insurance.png';
import HouseholdItemsSuppliesIcon from '../assets/icons/HouseholdItemsSupplies.png';
import HousingIcon from '../assets/icons/Housing.png';
import BillsIcon from '../assets/icons/Bills.png';
import OthersIcon from '../assets/icons/Others.png';

function Transactions({transactions, onDelete}) {

  const categoryIcons = {
    Salary: SalaryAllowanceBankTransferIcon,
    Allowance: SalaryAllowanceBankTransferIcon,
    BankTransfer: SalaryAllowanceBankTransferIcon,
    Transportation: TransportationIcon,
    Food: FoodIcon,
    Education: EducationIcon,
    Gifts: GiftsSouvenirsDonationsIcon,
   Souvenirs: GiftsSouvenirsDonationsIcon,
   Donations: GiftsSouvenirsDonationsIcon,
    Entertainment: EntertainmentIcon,
    Utilities: UtilitiesIcon, 
    Clothing: ClothingIcon, 
    Insurance: InsuranceIcon,
    HouseholdSupplies: HouseholdItemsSuppliesIcon, 
    Housing: HousingIcon,
    Bills: BillsIcon, 
    Others: OthersIcon, 
  };

  return (
    <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
      <h5 className="text-neutral-500 text-sm font-medium mb-4">Transaction History</h5>
      {transactions.length === 0 ? (
        <p className="text-gray-500 text-sm">No transactions yet</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex justify-center items-center rounded-full">
                  <img
                    src={categoryIcons[transaction.category] || categoryIcons.Others}
                    alt={`${transaction.category} Icon`}
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <p className="text-gray-800 font-normal">{transaction.category}</p>
                  <p className="text-gray-500 text-sm">{transaction.date}</p>
                </div>
              </div>
              <p
                className={`font-normal ${
                  transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'}Php{transaction.amount.toFixed(2)}
              </p>
              <button
                  type="button"
                  className=" text-neutral-400 hover:text-red-500 text-sm font-semibold"
                  onClick={() => onDelete(transaction.id)}
                >
                  x
                </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Transactions;