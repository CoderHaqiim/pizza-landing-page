export default function Paragraph({color, text, variant, align}) {
  return (
    variant === "small"?
    <p style={{color: color, textAlign:align}} className={` w-full font-[400] tracking-[0.3] text-[13.33px] leading-[1.3]`}>{text}</p>:
    variant === "medium"?
    <p style={{color: color, textAlign:align}} className='w-full font-[500] text-[16px] leading-[1.4]'>{text}</p>:
    variant === "large"?
    <p style={{color: color, textAlign:align}} className='w-full font-[500] lg:font-[400] md:text-[19.2px] md:max-w-[500px] leading-[1.4]'>{text}</p>:
    variant === "extra-large"?
    <p style={{color: color, textAlign:align}} className='w-full font-[500] text-[13px]  leading-[1.4]'>{text}</p>:
    null
  )
}