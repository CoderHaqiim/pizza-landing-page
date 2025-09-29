import Container from "../mixed/container"

export default function Footer({children, background}) {
  return (
     <footer style={{backgroundColor: background}} className='w-full flex justify-center items-center h-[max-content]'>
        <Container variant="padded">
            {children}
        </Container>
    </footer>
  )
}
