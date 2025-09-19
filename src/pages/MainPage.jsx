import Balance from '../components/Balance';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import Income from '../components/Income';
import LocName from '../components/LocationAndName';
import Transactions from '../components/Transactions';
import { useReducer, useEffect } from 'react';
import BasicDialog from '../components/BasicDialog';
import AddNew from '../components/AddNew';
import { useNavigate } from 'react-router';
import financeReducer from '../reducers/financeReducer';
import ResetButton from '../assets/gear.png';

function MainPage() {
  const navigate = useNavigate();

  const name = localStorage.getItem('name') || '';
  const tripLocation = localStorage.getItem('location') || '';

  const initialState = JSON.parse(localStorage.getItem('financeState'));

  const [state, dispatch] = useReducer(financeReducer, initialState);

  useEffect(() => {
    localStorage.setItem('financeState', JSON.stringify(state));
  }, [state]);

  const handleDeleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the app?')) {
      localStorage.clear();
      dispatch({ type: 'RESET_STATE' });
      navigate('/');
    }
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-r from-orange-300 to-orange-500 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col justify-center items-center">
        <div className="flex flex-row space-x-60">
          <Header />
          <button>
            <img
              src={ResetButton}
              width={25}
              height={25}
              alt="reset button"
              onClick={handleReset}
            />
          </button>
        </div>
        <LocName name={name} location={tripLocation} />
        <Balance balance={state.balance} />
        <div className="flex flex-row space-x-20">
          <Income income={state.income} />
          <Expenses expenses={state.expenses} />
        </div>
        <div className="flex justify-between items-center px-4">
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 my-8 px-24 py-1 rounded-full text-base text-white"
            onClick={() => dispatch({ type: 'OPEN_DIALOG' })}
          >
            Add New Transaction
          </button>
        </div>
        <BasicDialog
          isOpen={state.isDialogOpen}
          onClose={() => dispatch({ type: 'CLOSE_DIALOG' })}
        >
          <AddNew
            onAdd={(newTransaction) =>
              dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction })
            }
            onClose={() => dispatch({ type: 'CLOSE_DIALOG' })}
          />
        </BasicDialog>
        <Transactions
          transactions={state.transactions}
          onDelete={handleDeleteTransaction}
        />
      </div>
    </main>
  );
}

export default MainPage;
