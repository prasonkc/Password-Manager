// Button Component
function Button({btnTxt}) {
    return (
      <button className="cursor-pointer bg-sky-500 hover:bg-sky-600 text-white w-20 h-10 rounded-sm text-center">
        {btnTxt}
      </button>
    );
  }

  export default Button