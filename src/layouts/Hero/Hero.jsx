import React from "react";

export default function Hero() {
    return(
        <>
        <div className="py-24 px-96">
        <div className="py-16 h-80 box-border border-2 rounded-xl">
                <div className="font-jakarta-bold flex items-center justify-center justify-evenly">
                <div>
                    <img src="./src/assets/images/profilegithub.jpg" alt="" className="rounded-xl" width={200}/>
                </div>
                    <div>
                        <p className="text-lg">
                           Hello<span className="text-red-600">,</span> <br />
                           I<span className="text-red-600">'</span>m <span className="text-3xl font-bold">Matheus Andrade<span className="text-red-600">.</span></span> <br />
                           I<span className="text-red-600">'</span>m a Web Developer <br /> <br /> <br />   
                           based out of Pernambuco, Brazil
                        </p>
                    </div> 
                    <div>
                         <p className="text-lg">
                            work <br />
                            <span className="font-semibold">Freelancer Developer </span><br /> <br />
                            hobbies <br />
                            <ul className="flex">
                                <li className="bg-orange-200 rounded-xl mr-2 px-2 text-sm text-red-800 font-semibold">coding</li>
                                <li className="bg-orange-200 rounded-xl mr-2 px-2 text-sm text-red-800 font-semibold">movies</li>
                                <li className="bg-orange-200 rounded-xl mr-2 px-2 text-sm text-red-800 font-semibold">music</li>
                                <li className="bg-orange-200 rounded-xl mr-2 px-2 text-sm text-red-800 font-semibold">guitar</li>
                            </ul> <br />
                            <span className="text-sm">more...</span>
                         </p>
                    </div>
                </div>
                <div className="py-16">
                    <div className="flex justify-evenly px-96 h-24 box-border border-2 rounded-xl">
                        <img src="./src/assets/images/instagram.svg" alt="" width={24}/>
                        <img src="./src/assets/images/github.svg" alt="" width={24}/>
                        <img src="./src/assets/images/linkedin.svg" alt="" width={24}/>
                        <img src="./src/assets/images/x.svg" alt="" width={24}/>
                    </div>
                </div>
        </div>
            </div>
        </>
    )
}