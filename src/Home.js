import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <img className='home__image' src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg' alt=''/>

      <div className="home__row">
        <Product id='1' title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={11.96} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'/>
        <Product id='2' title="DEWALT 20V Max Impact Driver Kit, 1/4-Inch (DCF885C1)" price={97.99} rating={5} image='https://m.media-amazon.com/images/I/61wxsNtabJL._AC_SY355_.jpg'/>
      </div>
      <div className="home__row">
        <Product id='3' title="Jabra Elite 85h Wireless Noise-Canceling Headphones, Titanium Black – Over Ear Bluetooth Headphones Compatible with iPhone & Android - Built-in Microphone, Long Battery Life - Rain & Water Resistant" price={149.99 } rating={4} image='https://m.media-amazon.com/images/I/41IOi6N9TwL.jpg'/>
        <Product id='4' title="OneOdio Over Ear Headphone, Wired Bass Headsets with 50mm Driver, Foldable Lightweight Headphones with Shareport and Mic for Recording Monitoring Podcast Guitar PC TV - (Red)" price={30.99} rating={5} image='https://m.media-amazon.com/images/I/818p9H8LGNL._AC_SX466_.jpg'/>
        <Product id='5' title="Logitech G502 Lightspeed Wireless Gaming Mouse with Hero 25K Sensor, PowerPlay Compatible, Tunable Weights and Lightsync RGB - Black" price={69.00} rating={5} image='https://m.media-amazon.com/images/I/718b9wK3eaL._AC_SX679_.jpg'/>
      </div>
      <div className="home__row">
        <Product id='6' title="SAMSUNG Odyssey G7 Series 27-Inch WQHD (2560x1440) Gaming Monitor, 240Hz, Curved, 1ms, HDMI, G-Sync, FreeSync Premium Pro (LC27G75TQSNXZA)" price={499.99} rating={5} image='https://m.media-amazon.com/images/I/61Sz-1cB+PL._AC_SX679_.jpg'/>
      </div>
    </div>
  )
}

export default Home
