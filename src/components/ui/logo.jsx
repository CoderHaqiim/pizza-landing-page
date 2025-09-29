export default function Logo({variant}) {
  return (
    variant === "light"?
    <div className="w-[max-content] h-[max-content] text-[20px] tracking-[2px] drop-shadow-[1px_1px_1px_#00000050] font-freckle">
        <span className="font-[700] text-[white]">Pizza</span>
        <span className='font-[800] text-[#E6790A]'>Champs</span>
    </div>:
    <div className="w-[max-content] h-[max-content] text-[20px] tracking-[2px] drop-shadow-[1px_1px_1px_#00000050] font-freckle">
        <span className="font-[700]">Pizza</span>
        <span className='font-[800] text-[#E6790A]'>Champs</span>
    </div>
  )
}
