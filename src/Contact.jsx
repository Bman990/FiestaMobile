
import './StyleSheet/Contact.css'
import InstagramSvg from './InstagramSvg';
import TwitterSvg from './TwitterSvg';
import TiktokSvg from './TikTokSvg';
import FacebookSvg from './FacebookSvg';
import socialImage from '/bgMexico.jpg'

export default function Contact(){

  return (
    <section id="contactSection" className="contactContainer">
    <div className='contentContainer'>

    <div className='socialContainer'>

    <div className='socialLogoDiv'>
    <h1 className='followText'>Follow us, keep up with the Fiesta !</h1>

    <div className='iconDiv'>
    <InstagramSvg />
    <TwitterSvg />
    <TiktokSvg />
    <FacebookSvg />
    </div>


    <div className='moreInfoDiv'>
    <p className='numberText'>555-342-8688</p>
    <p className='emailText'>info@fiestamobile.com</p>
    </div>
    </div>


    <div className='socialImage'>

    <img src={socialImage} width={600} height={600}/>

    </div>

    </div>

    </div>
    </section>
  );
}