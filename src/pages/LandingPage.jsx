import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
import Lenis from "lenis";
import { useEffect } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export function LandingPage() {


  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);



  const featureScroll = useRef();

  const heroContainer = useRef();

  const reviewsContainer = useRef();

  const featureCardsScroll = useRef();

  const heroPic = useRef();

  const pricingCards = useRef();

  const reviewsCarousel = useRef();

  const signUpSection = useRef();

  const customerReviews = [
    {
        customerName: "Morgan",
        customerReview: "Habit Tracker has greatly improved my productivity. I use it daily."
    },
    {
        customerName: "James",
        customerReview: "The design is very sleek and non-distracting - it fits the purpose of the app. "
    },
    {
        customerName: "Amanda",
        customerReview: "Coming from someone who has used a lot of productivity tools in the past, Habit Tracker is among the best."
    },
    {
    customerName: "Brandon",
    customerReview: "Habit Tracker is awesome! Totally not biased!"
    },

    {
    customerName: "Casey",
    customerReview: "This app is extremely intuitive. I love how I can see my data in weekly and monthly charts. It really helps me see which habits I need to focus on improving."
    }

  ];

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

useGSAP(() => {

    const cards2 = gsap.utils.toArray(pricingCards.current.children);

    gsap.fromTo(cards2, 
        {
            opacity: 0,
            
            rotate: 180
        },

        {
            opacity: 1,
            
            rotate: 0,
            duration: 1,
            stagger: {
                amount: 1
            },
            scrollTrigger: {
                trigger: pricingCards.current,
                start: "top 75%"
            },
            ease: 'power3.out'
        }
    )


}, {scope: pricingCards}


)

useGSAP(() => {

    const reviewText = gsap.utils.toArray(reviewsContainer.current.children);

    gsap.fromTo(reviewText, 
        {
            opacity: 0,
            y: 40
        },
        {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            stagger: 0.5,
            duration: 0.5,
            scrollTrigger: {
                trigger: reviewsContainer.current,
                start: "top 75%"
            }
        }
    )


}, {scope: reviewsContainer}


)

useGSAP(() => {

    gsap.fromTo( reviewsCarousel.current.querySelectorAll(".splide-container"),   
        {
            opacity: 0,
         
        },
        {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: reviewsCarousel.current,
                start: "top 75%"

            }

        }
    )

}, {scope: reviewsCarousel}


)

useGSAP(() => {

    let signUpText = gsap.utils.toArray(signUpSection.current.children);

    gsap.fromTo(signUpText, {
        opacity: 0,
        y: 40
    }, {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: signUpSection.current,
            start: "top 80%"
        }
    }
)

}, {scope: signUpSection}


)

    return (
    <>
  
        <header className='w-full bg-gray-100/30 backdrop-blur-xs sticky top-0 z-9999'>
            <nav className="flex flex-col md:flex-row flex-wrap gap-8 p-6 justify-between w-400 mx-auto max-w-[95%]">
                
                <div className='nav-logo'>
                    <img src='h.png' className='w-6.25' />
                </div>

                <div className='nav-links font-[poppins] text-lg flex flex-col md:flex-row flex-wrap gap-6'>
                    <a href='#about' className='link cursor-pointer'>About</a>
                    <a href='#features' className='link cursor-pointer'>Features</a>
                    <a href='#pricing' className='link cursor-pointer'>Pricing</a>
                    <a href="#testimonials" className='link cursor-pointer'>Testimonials</a>
                    <Link to='/app' target='_blank' className='link cursor-pointer'>Start now</Link>
                </div>
            </nav>
        </header>

        <section id="about" className='hero-section p-8 overflow-x-hidden bg-linear-to-br from-white via-blue-50 to-blue-200 h-screen flex flex-col justify-center items-center'>

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


        <section id="features" className='features-section bg-gray-50 p-8 overflow-x-hidden'>

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


        <section id="pricing" className='flex overflow-x-hidden p-8 bg-linear-to-br from-white via-blue-50 to-blue-200 flex-col gap-16'>

            <div className='flex flex-col gap-12 mt-20 text-center mx-auto'>
                    <h2 className='text-2xl font-[poppins] text-center'>Pricing</h2>
                    <p className='font-[inter] text-center text-lg w-full md:max-w-[50%] lg:max-w-[50%] mx-auto'>Use Habit Tracker for free. Upgrade for more storage, more features, and access to test builds!</p>
            
            </div>

            <div ref={pricingCards} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-300 mx-auto max-w-[95%] place-items-center gap-4'>

                <div className='flex flex-col gap-8 bg-gray-50 p-8 font-[poppins] rounded-2xl min-w-[300px] max-w-[300px] border border-gray-200 shadow-xl place-self-end mx-auto'>
                    <h3 className='text-xl'>Free plan</h3>
                    <hr />
                    <h4 className='text-2xl'>$0 / month</h4>
                    <Link to='/app' target='_blank' className='text-xl bg-zinc-950 w-fit shadow-2xl hover:-translate-y-1 duration-300 text-white px-4 py-1 rounded-3xl'>Get started now</Link>
                    <ul className='flex flex-col gap-4'>
                        <li className="relative before:content-['✓'] before:mr-2">2GB of storage</li>
                        <li className="relative before:content-['✓'] before:mr-2">Basic charts</li>
                        <li className="relative before:content-['✓'] before:mr-2">Customer support</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-8 bg-zinc-950 text-white p-8 font-[poppins] rounded-2xl  min-w-[300px] max-w-[300px] place-self-end mx-auto'>
                    <h3 className='text-xl'>Pro plan</h3>
                    <hr />
                    <h4 className='text-2xl'>$4.99 per month</h4>
                    <Link className='text-xl bg-gray-50 w-fit shadow-2xl hover:-translate-y-1 duration-300 text-zinc-950 px-4 py-1 rounded-3xl'>Sign up now</Link>
                    <ul className='flex flex-col gap-4 text-white'>
                        <li className="relative before:content-['✓'] before:mr-2">100GB of storage</li>
                        <li className="relative before:content-['✓'] before:mr-2">Weekly & monthly charts</li>
                        <li className="relative before:content-['✓'] before:mr-2">highest streak counter</li>
                        <li className="relative before:content-['✓'] before:mr-2">24/7 customer support</li>
                        <li className="relative before:content-['✓'] before:mr-2">Access to test builds</li>
                        <li className="relative before:content-['✓'] before:mr-2">24/7 customer support</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-8 bg-gray-50 p-8 font-[poppins] rounded-2xl min-w-[300px] max-w-[300px] place-self-end mx-auto  border border-gray-200 shadow-xl'>
                    <h3 className='text-xl'>Premium plan</h3>
                    <hr />
                    <h4 className='text-2xl'>$9.99 per month</h4>
                    <Link className='text-xl bg-zinc-950 w-fit shadow-2xl hover:-translate-y-1 duration-300 text-white px-4 py-1 rounded-3xl'>Sign up now</Link>
                    <ul className='flex flex-col gap-4 text-zinc-950'>
                        <li className="relative before:content-['✓'] before:mr-2">Unlimited storage</li>
                        <li className="relative before:content-['✓'] before:mr-2">Weekly & monthly charts</li>
                        <li className="relative before:content-['✓'] before:mr-2">highest streak counter</li>
                        <li className="relative before:content-['✓'] before:mr-2">24/7 customer support</li>
                        <li className="relative before:content-['✓'] before:mr-2">Access to test builds</li>
                        <li className="relative before:content-['✓'] before:mr-2">More habit frequencies</li>
                        <li className="relative before:content-['✓'] before:mr-2">Edit habits</li>
                        <li className="relative before:content-['✓'] before:mr-2">Use app without sign-in</li>
                    </ul>
                </div>

            </div>

        </section>


        <section id="testimonials" className='flex overflow-x-hidden flex-col bg-gray-50 p-8 gap-16'>

            <div className='flex flex-col gap-12 mt-20 text-center mx-auto' ref={reviewsContainer}>
                    <h2 className='text-2xl font-[poppins] text-center'>Customer reviews</h2>
                    <p className='font-[inter] text-center text-lg w-full md:max-w-[50%] lg:max-w-[50%] mx-auto'>Still not convinced? See what our users have to say for us!</p>
            
            </div>

            <div className='flex flex-col justify-center items-center mt-20' ref={reviewsCarousel}>
                
                <div className='w-[90%] lg:w-[70%] splide-container'>
                <Splide options = {{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    gap: '1rem',
                    arrows: false,
                    pagination: false,
                    fixedWidth: '300px',
                    autoScroll: {
                        autoStart: true,
                        speed: 0.5,
                        pauseOnHover: false,
                        pauseOnFocus: false
                    },
                    height: '310px'
                    
                    
                }} extensions={{AutoScroll}}>

                    { customerReviews.map(((review, index) => (
                        <SplideSlide key={index} className='h-full'>
                            <div className='w-[300px] bg-gray-100 rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center gap-8 shadow-xl'>
                                <h2 className=''>{review.customerName}</h2>
                                <p className=''>{review.customerReview}</p>
                            </div>
                        </SplideSlide>
                    )


                    ))

                    }

                </Splide>

                
                </div>
            </div>


        </section>

        <section className='flex flex-col h-[50vh] bg-linear-to-br from-white via-blue-50 to-blue-200 p-8'>
                    
            <div 
           
            className='flex flex-row gap-8 w-400 max-w-[95%] mx-auto h-full justify-center items-center'>
                <div 
                ref={signUpSection}
                className='font-[poppins] mx-auto text-center flex flex-col gap-6'>
                    <h2 className='text-2xl mx-auto'>Start using for free</h2>
                    <p className='lg:text-lg mx-auto lg:w-[70%]'>Begin experiencing the joy of self-improvement. With Habit Tracker, start free and begin enjoying motivation immedietely.</p>
                    <div className='flex flex-row flex-wrap mx-auto gap-4'>
                        <Link to='/app' className='bg-zinc-950 text-white mx-auto px-4 py-2 text-lg rounded-3xl shadow-xl hover:shadow-2xl duration-300 hover:scale-105'>Get started</Link>
                        <Link className="bg-white/5 px-4 py-2 rounded-3xl mx-auto text-lg after:content-['→'] after:inline-block after:translate-x-1.5 hover:after:translate-x-3 after:duration-300 after:font-semibold">Learn more</Link>
                    </div>
                </div>
            </div>

        </section>

        <section className='bg-gradient-to-t from-white to-zinc-100
dark:from-black dark:to-zinc-900 p-8'>

            <div className='flex md:flex-row flex-col gap-4 text-gray-200 font-[poppins] justify-center items-start md:items-center h-full'>
                    <a href="#about">About</a>
                    <a href='#features'>Features</a>
                    <a href='#pricing'>Pricing</a>
                    <a href='#testimonials'>Testimonials</a>
                    <Link to='/app'>Go to app</Link>
            </div>
        </section>

       
      
    </>    
    );
}