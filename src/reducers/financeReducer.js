const financeReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return { ...state, isDialogOpen: true };

    case 'CLOSE_DIALOG':
      return { ...state, isDialogOpen: false };

    case 'ADD_TRANSACTION':
      if (action.payload.type === 'income') {
        
        return {
          ...state,
          transactions: [...state.transactions, action.payload],
          balance: Number(state.balance) + action.payload.amount,
          income: state.income + action.payload.amount,
        };
      } else if (action.payload.type === 'expense') {
        return {
          ...state,
          transactions: [...state.transactions, action.payload],
          balance: Number(state.balance) - action.payload.amount,
          expenses: state.expenses + action.payload.amount,
        };
      }
      return state;

      case 'DELETE_TRANSACTION': {
        const updatedTransactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        );
      
        const income = updatedTransactions
          .filter((transaction) => transaction.type === 'income')
          .reduce((total, transaction) => total + transaction.amount, 0);
      
        const expenses = updatedTransactions
          .filter((transaction) => transaction.type === 'expense')
          .reduce((total, transaction) => total + transaction.amount, 0);
      
        return {
          ...state,
          transactions: updatedTransactions,
          income,
          expenses,
          balance: income - expenses,
        };
      }
      
    case 'RESET_STATE':
      return {
        isDialogOpen: false,
        transactions: [],
        income: 0,
        expenses: 0,
        balance: 0,
      };
    default:
      return state;
  }
};

export default financeReducer;
