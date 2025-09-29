import Container from '../mixed/container'

export default function Section({children, variant, background}) {
  return (
    variant === "home"?
    <section className='w-full flex justify-center items-center h-[100vh]'>
        <Container variant="padded">
            {children}
        </Container>
    </section>:
    variant === "stretch"?
    <section style={{backgroundColor: background}} className='w-full items-center justify-center flex h-[max-content]'>
        <Container variant="other">
            {children}
        </Container>
    </section>:
    <section style={{backgroundColor: background}} className='w-full justify-center items-center flex h-[max-content]'>
        <Container variant="padded">
            {children}
        </Container>
    </section>
  )
}
