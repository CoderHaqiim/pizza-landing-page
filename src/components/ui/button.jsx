export default function Button({text, variant, background, color}) {

  return (
    variant === "text-large"?
    <button style={{
        backgroundColor: background,
       color: color
      }} className={`button flex items-center justify-center cursor-pointer hover:scale-[0.98] transition-[0.3] w-[300px] h-[48px] font-[700] rounded-lg z-[2] relative shadow-lg`}>
        {text}
    </button>:
    variant === "card-btn"?
    <button style={{
      backgroundColor: background,
      color: color
    }} className={`button2 cursor-pointer hover:scale-[0.98] w-[100px] flex font-[700] z-[2] relative items-center justify-center h-[33px] text-[12px] rounded-md shadow-lg`}>
        {text}
    </button>:
    <button>{text}</button>
  )
}
