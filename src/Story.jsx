import './StyleSheet/Story.css'
import picMexico from '/bg2Mexico.jpg'


export default function Story(){
    return(
        <div id="storySection" className="storyContainer">
            <div className="storyContent">

                <div className="storyHead">
                <img src={picMexico} />
                </div>
                
                <div className="storyInfo">
                <h1>Somewhere in Mexico...</h1>

                <p> Our journey began with a simple dream—to bring the <span className='span1'>lively</span> and <span className='span2'>vibrant</span> atmosphere of a fiesta directly to you. We envisioned a mobile haven of flavor, where the craft of the fiesta is rolled into every taco we serve. With wheels turning and spices sizzling, Fiesta Mobile emerged, a taco truck like no other.
                <br /><br />
                What sets us apart is our commitment to crafting tacos that go beyond the ordinary. We're not just serving food; we're curating an experience—a <span className='span3'>flavorful</span> journey that unfolds with every bite. Each taco is a celebration, a fusion of traditional recipes and modern twists that dance on your taste buds.
                <br /><br />
                Our team is a family of passionate food enthusiasts, dedicated to delivering not just meals, but moments of delight. From the sizzle of the grill to the careful assembly of each taco, we pour our heart and soul into every step of the process. We source fresh, quality ingredients because we believe that exceptional tacos start with exceptional elements.
                 <br /><br />
                Whether you catch us on the bustling streets, at local events, or right at your doorstep, <span className='span4'>Fiesta Mobile</span> is here to turn every moment into a fiesta. We're not just a taco truck; we're your mobile party, your flavor-filled escape, and your go-to for a taste of the extraordinary.
                </p>
                </div>

            </div>
        </div>
    )
}