export default function Container({children, variant}) {
  return (
    variant === "nav"? 
    <div className='w-full px-2 md:px-3 max-w-[1500px] lg:px-7 py-5 h-[max-content]'>
        {children}
    </div>:
    variant === "padded"?
    <div className='w-full p-12 px-3 max-w-[1500px] md:px-5 lg:px-7 h-[max-content] '>
        {children}
    </div>:
    <div className='w-full p-12 max-w-[1500px] px-0 h-[max-content] '>
        {children}
    </div>
  )
}
