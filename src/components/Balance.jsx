function Balance({balance}) {
  return (
    <div className="my-5">
      <h4 className="text-yellow-500 text-sm text-center">Current Balance</h4>
      <h2 className="text-neutral-700 text-3xl text-left">Php{balance ? balance.toLocaleString() : '0.00'}</h2>
    </div>
  );
}

export default Balance;