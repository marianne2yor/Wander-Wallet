function Expenses({ expenses }) {
  return (
    <div>
      <h4 className="text-red-600 text-sm text-center">Total Expenses</h4>
      <h3 className="text-neutral-700 text-2xl text-left">Php{expenses ? expenses.toLocaleString() : '0.00'}</h3>
    </div>
  );
}

export default Expenses;