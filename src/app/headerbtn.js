function Btn({ name , activation }) {
  return (
    <>
      {activation ? (
        <div className=" m-2 px-4 py-2 hover:bg-gray-300 active">{ `${name}` }</div>
      ) : (
        <div className="text-gray-600 m-2 px-4 py-2 hover:bg-gray-300 notActive">{`${name}`}</div>
      )}  
      <br className="hidden md:block"/>
    </>
  );
}
export default Btn;
