export default function Header3({text, color, align}) {
  return (
    <h3 style={{color: color, textAlign: align}} className='w-full text-center font-[700] mb-2 leading-[0.9] text-[16px] lg:text-[16]'>{text}</h3>
  )
}
