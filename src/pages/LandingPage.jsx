import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export function LandingPage() {

  const featureScroll = useRef();

  const heroContainer = useRef();

  const featureCardsScroll = useRef();

  const heroPic = useRef();

   useGSAP(() => {
    gsap.fromTo('.link', {
        opacity: 0,
        
    }, {
        opacity: 1,
        duration: 0.5,
        
    }

)
   }, []

)

useGSAP(() => {
let heroTimeLine = gsap.timeline();

heroTimeLine.fromTo(
    
    heroContainer.current.querySelectorAll('.letter'), {
    opacity: 0,
    y: 40
}, {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: "power1.inOut"
}
)
.fromTo(
    heroContainer.current.querySelectorAll('.para'), {
    opacity: 0,
    y: 40
}, {
    opacity: 1,
    y: 0,
    ease: "power1.inOut",
    stagger: 0.2
}
); 
}, {scope: heroContainer}
)

useGSAP(() => {

    gsap.fromTo( heroPic.current.querySelectorAll(".hero-pic"), {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        delay: 2,
        
    }

    )
}, {scope: heroPic}

)


useGSAP(() => {
    
    const features = gsap.utils.toArray(featureScroll.current.children)

    gsap.fromTo(features, {
        
            opacity: 0,
            y: 40,
            
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: featureScroll.current,
                start: "top 50%"
            },
            duration: 1,
            stagger: 0.5
            
        }
    )

}, {scope: featureScroll}


)


useGSAP(() => {

    const cards = gsap.utils.toArray(featureCardsScroll.current.children);

    gsap.fromTo(cards, {
        opacity: 0,
        y: 40
    }, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.4,
        scrollTrigger: {
            trigger: featureCardsScroll.current,
            start: "top 60%"
        },
        ease: "power3.out"
    }

    )

}, {scope: featureCardsScroll}
)

    return (
    <>
  
        <header className='w-full bg-gray-100/30'>
            <nav className="flex flex-col md:flex-row flex-wrap gap-8 p-6 justify-between w-400 mx-auto max-w-[95%]">
                
                <div className='nav-logo'>
                    <img src='h.png' className='w-6.25' />
                </div>

                <div className='nav-links font-[poppins] text-lg flex flex-col md:flex-row flex-wrap gap-6'>
                    <a className='link cursor-pointer'>About</a>
                    <a className='link cursor-pointer'>Features</a>
                    <a className='link cursor-pointer'>Pricing</a>
                    <a className='link cursor-pointer'>Testimonials</a>
                    <a className='link cursor-pointer'>Start now</a>
                </div>
            </nav>
        </header>

        <section className='hero-section p-8 overflow-x-hidden bg-linear-to-br from-white via-blue-50 to-blue-200 h-screen flex flex-col justify-center items-center'>

            <div className='flex w-400 mx-auto max-w-[95%] flex-col md:flex-row -mt-20 gap-8'>

                <div ref={heroContainer} className='flex lg:-mt-20 flex-col text-center md:text-left justify-center items-center gap-6'>

                  
                        <h1 className='lg:text-6xl md:text-4xl font-[poppins] font-semibold text-3xl'><span className='letter inline-block'>T</span><span className='letter inline-block'>r</span><span className='letter inline-block'>a</span><span className='letter inline-block'>c</span><span className='letter inline-block'>k</span> <span className='letter inline-block'> Y</span><span className='letter inline-block'>o</span><span className='letter inline-block'>u</span><span className='letter inline-block'>r</span> <span className='letter inline-block'> H</span><span className='letter inline-block'>a</span><span className='letter inline-block'>b</span><span className='letter inline-block'>i</span><span className='letter inline-block'>t</span><span className='letter inline-block'>s</span></h1>
                        <p className='md:max-w-[50%] para font-[inter] text-lg text-center'>Stay on top of and get visual feedback regarding your habits, enhancing your motivation, productivity, and overall self-improvement.</p>
                        
                        <div className='flex flex-row gap-6'>
                            <Link to='/app' target='_blank' className='para bg-zinc-950 text-white opacity-0 px-4 py-2 rounded-3xl font-[poppins] text-lg shadow-lg hover:shadow-2xl duration-300 cursor-pointer'>Try for free</Link>
                            <a className='para bg-zinc-950 text-white px-4 py-2 rounded-3xl opacity-0 font-[poppins] text-lg shadow-lg hover:shadow-2xl duration-300 cursor-pointer'>Learn more</a>
                        </div>
                    
                </div>

                <div ref={heroPic} className='flex justify-center items-center'>
                    <img src="hero.png" className='max-w-[700px] min-w-[320px] w-full hero-pic m-auto rounded-2xl'/>
                </div>

                

            </div>


        </section>


        <section className='features-section bg-gray-50 p-8 overflow-x-hidden'>

            <div className='w-400 max-w-[95%] mx-auto'>

                <div 
                ref={featureScroll}
                className='flex flex-col gap-12 mt-20'>
                    <h2 className='text-2xl font-[poppins] text-center'>Stay consistent with Habit Tracker</h2>
                    <p className='font-[inter] text-center text-lg w-full md:max-w-[50%] lg:max-w-[50%] mx-auto'>Gain the ability to add habits, mark completions, and see weekly & monthly charts of your completions for each given habit.</p>
                    <img src='featurepic2.png' className='w-full max-w-[700px] min-w-[300px] mx-auto rounded-2xl'/>
                </div>

                <div ref={featureCardsScroll} className='flex md:flex-row p-8 justify-around mx-auto flex-col gap-8'>
                    <div className='flex flex-col gap-4 max-w-[310px] rounded-2xl bg-zinc-950 text-white font-[poppins] p-8 hover:scale-105  duration-300 shadow-xl hover:shadow-2xl'>
                        <h3>See your streaks!</h3>
                        <p>Habit Tracker automatically keeps count of how many days in a row you have completed a habit. View your current steak within your 'habits' tab!</p>
                        <p>Miss a day and your streak will reset - encouraging you to stay consistent and receive feedback.</p>
                    </div>

                    <div className='flex flex-col gap-4 max-w-[310px] rounded-2xl bg-zinc-950 text-white font-[poppins] p-8 hover:scale-105  duration-300 shadow-xl hover:shadow-2xl'>
                        <h3>Other features!</h3>
                        <p>Google OAuth is implemented via Firebase Authentication. Log into your Google account securely and all habits you add and complete will be saved across devices.</p>
                        <p>This allows for easy completions of habits no matter where you are so you do not forget to log them.</p>
                    </div>
                </div>
            </div>

        </section>


        <section className='flex overflow-x-hidden'>


        </section>

       
      
    </>    
    );
}