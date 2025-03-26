function Income({ income }) {
  return (
    <div>
      <h4 className="text-cyan-600 text-sm text-center">Total Income</h4>
      <h3 className="text-neutral-700 text-2xl text-center">Php{income ? income.toLocaleString() : '0.00'}</h3>
    </div>
  );
}

export default Income;