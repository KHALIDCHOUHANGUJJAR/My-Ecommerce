/* eslint-disable react/prop-types */
const Buttons = ({text,onClick}) => {
  return (
    <div className="mt-8">
      <button    onClick={onClick} className="p-2  rounded text-white font-bold bg-red-500 " >
       {text}
      </button>
    </div>
  );
};

export default Buttons;
