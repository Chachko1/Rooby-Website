

const Integrations = () => {
  return (
    <section className="bg-backgroundColor ">
            <div className="flex flex-col gap-5 p-[100px]">
                <div className="mx-auto">
                    <h1 className="font-inter font-bold text-[48px] pb-3">Over 300+ integrations</h1>
                    <p className="font-inter text-[18px]">Expand the capabilities of <span className="font-black">Roooby</span> with hundreds of apps and integrations</p>
                </div>
                <div className="flex flex-col mx-auto gap-2 pt-10">
                    <div className="flex flex-col md:flex-row mx-auto gap-4 md:gap-2"><img src="Integration1.png" alt="" /><img src="Integration2.png" alt="" /><img src="Integration3.png" alt="" /><img src="Integration4.png" alt="" /><img src="Integration5.png" alt="" /></div>
                    <div className="flex flex-col md:flex-row mx-auto gap-4 md:gap-2"><img src="Integration6.png" alt="" /><img src="Integration7.png" alt="" /><img src="Integration8.png" alt="" /><img src="Integration9.png" alt="" /><img src="Integration10.png" alt="" /></div>

                </div>
                <div className="mx-auto font-inter font-medium text-[24px] pt-10">See all apps and extensions {`>`}</div>


            </div>
    </section>
  )
}

export default Integrations