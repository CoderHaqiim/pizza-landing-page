import Paragraph from "./paragraph"
import Header3 from "./header3"
import Button from "./button"

export default function PizzaCard({src, text, header, price}) {
  return (
    <div className='w-[250px] flex flex-col gap-2 h-[max-height] justify-center items-center p-7 rounded-lg bg-[#ffffff09]'>
        <div className="w-[110px] h-[110px]">
            <img loading="lazy" className="w-full h-full" src={src} alt="" />
        </div>
        <div className="w-full h-[max-content]">
             <Header3 align="center" color="#ffffff" text={header}/>
            <Paragraph text={text} color="#ffffff95" variant="small" align="center"/>
            <div className="w-full h-[max-content] mt-3 flex items-center justify-center">
                 <div className="text-[white] bg-[#f8bd8220] px-2 rounded-tl-md leading-[1] rounded-bl-md py-1 flex items-center font-[800]">N{price}</div>
                 <Button background ="#E6790A" color="white" variant="card-btn" text="Order now!"/>
            </div>
        </div>
    </div>
  )
}
