import { useEffect, useRef} from "react"
import Section from "./components/layout/section"
import Nav from "./components/layout/nav"
import Header1 from "./components/ui/header1"
import Footer from "./components/layout/footer"
import Paragraph from "./components/ui/paragraph"
import Button from "./components/ui/button"
import Header2 from "./components/ui/header2"
import TrustCard from "./components/ui/trustCard"
import PizzaCard from "./components/ui/pizzaCard"
import Logo from "./components/ui/logo"
import NavMenu from "./components/ui/navMenu"
// import { motion } from "framer-motion"



function App() {
  const divRef = useRef(null);
  let rotation = 0; // use a normal variable for tracking

  useEffect(() => {
    const interval = setInterval(() => {
    rotation += 90;

      if (divRef.current) {
        divRef.current.style.transform = `rotate(${rotation}deg)`;
        divRef.current.style.transition = "transform 0.5s ease-out"; // smooth transition
      }
    }, 8000); // every 10 seconds

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-full relative h-[max-content] flex flex-col overflow-x-hidden">
      <div className="absolute rotate-30 opacity-[0.8] drop-shadow-[4px_4px_5px_#00000030] w-[200px] top-[100px] right-[500px]  h-[200px]">
        <img src="chilli.png" alt="chilli" loading="lazy"/>
      </div>
      <div className="absolute rotate-23 opacity-[0.8] drop-shadow-[4px_4px_5px_#00000030] w-[200px] top-[1200px] right-[200px]  h-[200px]">
        <img src="chilli.png" alt="chilli" loading="lazy"/>
      </div>
      <div className="absolute rotate-90 opacity-[0.8] drop-shadow-[4px_4px_5px_#00000030] w-[200px] top-[800px] left-[300px]  h-[200px]">
        <img src="chilli.png" alt="chilli" loading="lazy"/>
      </div>
      <div className="absolute rotate-0 opacity-[0.8] drop-shadow-[4px_4px_5px_#00000030] w-[200px] top-[400px] right-[530px]  h-[200px]">
        <img src="chilli.png" alt="chilli" loading="lazy"/>
      </div>
      <div className="background flex items-center justify-center w-full absolute h-[100vh] min-h-[600px] overflow-hidden bg-[#E9D1A9] z-[-1]">
        <div ref={divRef} className="spin bg-[#ffffff40] opacity-[0.8] w-[900px] h-[900px] right-[-500px] absolute rounded-[50%]">
          <div className="img1 w-[350px] absolute top-[-100px] left-[275px] h-[350px] ">
            <img className="w-full h-full drop-shadow-[-2px_-2px_2px_black]" src="/veggies.png" alt=""  loading="lazy"/>
          </div>
          <div className="img2 w-[350px] absolute left-[-100px] top-[275px] h-[350px] ">
            <img className="w-full h-full drop-shadow-[-2px_2px_2px_black]" src="/pepperoni.png" alt="" loading="lazy"/>
          </div>
          <div className="img2 w-[350px] absolute right-[-100px] top-[275px] h-[350px] ">
            <img className="w-full h-full drop-shadow-[2px_-2px_2px_black]" src="/chicken-pizza.png" alt="" loading="lazy"/>
          </div>
          <div className="img2 w-[350px] absolute bottom-[-100px] left-[275px] h-[350px] ">
            <img className="w-full h-full drop-shadow-[2px_2px_2px_black]" src="/veggies.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
      <Nav>
        <div className="flex items-center justify-between">
          <Logo variant="dark"/>
          <NavMenu/>
        </div>
      </Nav>
      <main className='w-full flex flex-col h-[max-content]'>
        <Section variant="home">
          <div className="flex flex-col w-full relative p-2 border-lg h-full min-h-[400px] items-start gap-6 justify-center lg:bg-transparent bg-[#ffffff99] z-[2]">
            <div className="left w-full lg:w-[60%] gap-7 flex flex-col items-center justify-center h-full">
              <Header1 text="Fresh, Hot and Made Just for You" color="#111111"/>
              <Paragraph align={innerWidth > 768? "left" : "center"} text="Authentic, hand-tossed pizzas baked to perfection and delivered straight from our oven to your door" color="#444444" variant="large"/>
              <div className="w-full flex justify-center lg:justify-start max-w-[500px]">
                <Button text="Order now !" color="white" background ="#E6790A" variant="text-large" />
              </div>
            </div>
          </div>
        </Section>
        <Section variant="other" background="white">
          <div className="w-full h-[max-content]">
            <Header2 text="Why Choose Us" color="#111111"/>
            <div className="flex w-full flex-wrap justify-center align-center gap-3 lg:gap-5">
              <TrustCard text="Fresh Ingredients">
                <Paragraph variant="small" color="#555555" align="center" text="Only the best locally sourced produce and premium cheeses"/>
              </TrustCard>
              <TrustCard text="Authentic Recipes">
                <Paragraph variant="small" color="#555555" align="center" text="Traditional dough, slow-risen and stone-baked"/>
              </TrustCard>
              <TrustCard text="Fast Delivery">
                <Paragraph variant="small" color="#555555" align="center" text="Hot pizza delivered in 30 minutes or less"/>
              </TrustCard>
              <TrustCard text="Combo Deals">
                <Paragraph align="center" variant="small" color="#555555" text="Perfect pairings with drinks and sides"/>
              </TrustCard>
            </div>
          </div>
        </Section>
        <Section variant="other" background="black">
          <div>
            <Header2 color="white" text="Featured Pizzas"/>
            <div className="flex w-full flex-wrap h-[max-content] justify-center gap-5 items-center">
              <PizzaCard src="/pepperoni.png" text="Crispy crust, gooey cheese, and pepperoni that packs a punch—our Pepperoni Pizza is pure perfection in every bite!" header="Pepperoni Pizza" price="13,000"/>
              <PizzaCard src="/chicken-pizza.png" text="Crispy crust, gooey cheese, and pepperoni that packs a punch—our Pepperoni Pizza is pure perfection in every bite!" header="Margherita Pizza" price="17,500"/>
              <PizzaCard src="/bbq-chicken-pizza.png" text="Crispy crust, gooey cheese, and pepperoni that packs a punch—our Pepperoni Pizza is pure perfection in every bite!" header="BBQ Chicken Pizza" price="20,200"/>
              <PizzaCard src="/veggies.png" text="Crispy crust, gooey cheese, and pepperoni that packs a punch—our Pepperoni Pizza is pure perfection in every bite!" header="Veggie Supreme Pizza" price="18,700"/>
              <PizzaCard src="/chicken-pizza.png" text="Crispy crust, gooey cheese, and pepperoni that packs a punch—our Pepperoni Pizza is pure perfection in every bite!" header="Meat Lover’s Pizza" price="20,200"/>
              <PizzaCard src="/hawaiian.png" text="Crispy crust, gooey cheese, and pepperoni that packs a punch—our Pepperoni Pizza is pure perfection in every bite!" header="Hawaiian Pizza" price="18,700"/>
              <PizzaCard src="/cheese-pizza.png" text="Crispy crust, gooey cheese, and pepperoni that packs a punch—our Pepperoni Pizza is pure perfection in every bite!" header="Four Cheese Pizza" price="15,500"/>
              <PizzaCard src="/jalapenos.png" text="Crispy crust, gooey cheese, and pepperoni that packs a punch—our Pepperoni Pizza is pure perfection in every bite!" header="Spicy Jalapeño Pizza" price="15,500"/>
            </div>
          </div>
        </Section>
        <Section variant="stretch" background="#E6790A">
          <div className="w-full h-[max-content] relative flex flex-col justify-center overflow-hidden items-center">
            <div className="img1 w-[400px] absolute top-[-20px] left-[-200px] h-[400px] ">
              <img className="w-full h-full opacity-[0.7] drop-shadow-[-2px_-2px_2px_black]" src="/veggies.png" alt=""  loading="lazy"/>
            </div>
            <Header2 text="Special Offers" color="#111111"/>
            <div className="md:w-[600px] w-[320px] h-[300px] flex shadow-[2px_2px_1px_#00000030] flex-col justify-center items-center rounded-lg z-[2] bg-[white] p-7">
                <div className="py-5 border-b-[solid] border-b-[1px] border-b-[#dddddd]  w-full h-[50px]">
                  <Paragraph color="#444444" variant="medium" text="Buy 1 Get 1 Free Every Tuesday" align="center"/>
                </div>
                <div className="py-5 border-b-[solid] border-b-[1px] border-b-[#dddddd]  w-full h-[50px]">
                  <Paragraph color="#444444" variant="medium" text="Free Drink with large pizza order." align="center"/>
                </div>
                <div className="py-5 border-b-[solid] border-b-[1px] border-b-[#dddddd]  w-full h-[50px]">
                  <Paragraph color="#444444" variant="medium" text="10% Off First Online Order." align="center"/>
                </div>
                <div className="flex justify-center mt-10 w-full h-[max-content]">
                  <Button variant="text-large" color="white" background="#111111" text="Claim your offer now !"/>
                </div>
            </div>
          </div>
        </Section>
        <Footer background="#111111">
          <div className="flex gap-4 items-center">
             <p className="text-[white] text-[13px]">
              <>&copy; 2025</>
            </p>
            <Logo variant="light"/>
          </div>
          <Paragraph text="...Your Cravings. Our Pizza." variant="small" color="#FFFFFF90"/>
          <Paragraph text={
            <div className="mt-9 text-[11px] flex flex-col">
              <span>
                all pizza images sourced from <a href ="https://pngtree.com">pngtree.com</a>
              </span>
              <span>
                spices images sourced from <a href ="https://freepik.com">freepik.com</a>
              </span>
            </div>
          }
          color="white"
          variant="small"
          align="left"/>
        </Footer>
      </main>
    </div>
  )
}

export default App
