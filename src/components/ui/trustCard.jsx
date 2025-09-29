import Header3 from './header3'

export default function TrustCard({text, children}) {
  return (
    <div className='lg:w-[200px] z-[2] w-[160px] rounded-lg  justify-center flex-wrap flex-shrink-0 items-center flex flex-col h-[max-content] min-h-[150px] p-4 border-[1px] border-[solid] border-[#c1c1c1]'>
        <Header3 align="center" text={text} color="#333333"/>
        {children}
    </div>
  )
}
