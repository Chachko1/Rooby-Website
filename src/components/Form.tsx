

const Form = () => {
  return (
   <section>
    <div className=" p-[80px] flex flex-col md:flex-row gap-[50px] bg-cover bg-center w-full h-200" style={{backgroundImage: `url('/BG.png')`}}>
            <div className="w-full md:w-[50%] flex flex-col ">
                <h1 className="font-inter font-bold text-white text-[45px] md:text-[64px]">Ready to supercharge your business?</h1>
                <p className="font-inter font-medium text-white">Ask about <span className="font-black">Roooby</span> products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <button className=" px-6 hover:bg-customYellow duration-300 bg-white font-inter font-bold  p-3 rounded-md">Try for Free   {`>`}</button>
                <p className="font-inter text-white pt-5 font-medium text-[14px]">Full access. No credit card required.</p>
            </div>
    </div>
   </section>
  )
}

export default Form