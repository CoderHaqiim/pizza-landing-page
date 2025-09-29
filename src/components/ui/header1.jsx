export default function Header1({text, color}) {
  return (
    <h1 style={{color: color}} className='w-full mb-2 md:max-w-[500px] z-[2] font-rubik leading-[1.2] text-center lg:text-left text-[32.44px] md:text-[38px] lg:text-[47.78px]'>{text}</h1>
  )
}
