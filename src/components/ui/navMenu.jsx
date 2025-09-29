export default function NavMenu() {
  return (
    <div>
        <div className='flex md:hidden w-[40px] flex-col bg-[#ffffff95] rounded-[8px] justify-between items-center h-[40px] p-1 py-[10px]'>
            <div className='w-full h-[2px] bg-[#111111]'></div>
            <div className='w-full h-[2px] bg-[#111111]'></div>
            <div className='w-full h-[2px] bg-[#111111]'></div>
        </div>
        <ul className="w-max-content text-[14px] text-[#222222] font-[700] hidden md:flex gap-5 md:gap-10">
            <li className="h-full" >Home</li>
            <li>Menu</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
