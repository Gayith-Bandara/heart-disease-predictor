
const Hero = () =>{
    return (
        <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 md:px-0 px-7 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>

            <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>
                Predict Heart Disease Risk Instantly
                {/* <img src={assets.sketch} alt='sketch'className='md:block hidden absolute -bottom-7 right-0'/> */}
            </h1>

            <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>
                Take control of your heart health with our smart, AI-powered risk predictor. Enter your health details and get a quick, data-driven assessment — so you can make informed decisions and talk to your doctor with confidence.
            </p>

        </div>
    )
}

export default Hero