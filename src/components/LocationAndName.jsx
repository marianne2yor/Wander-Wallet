function LocName({name, location}) {
  return (
    <div className="my-5">
      <p className="text-neutral-400 text-sm text-center">{location}</p>
      <p className="text-neutral-600 text-base text-center">{name}</p>
    </div>
  );
}

export default LocName;
