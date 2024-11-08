'use client'
import { useState } from "react"

export default function ExpandableHeading({ data } : any) {

    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <div className="w-full h-full">
                <div className="bg-white px-4 py-6 md:p-12 ">
                    <p className="text-24 md:text-40 leading-24 md:leading-40 font-sans text-secondary font-medium ">Switches & Pushbuttons</p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-[140px] mt-2 md:mt-6 ">
                        <span className="md:h-[120px] flex-1">
                            <p className="text-16 md:text-24 leading-6 font-medium font-sans text-gray900 flex flex-1">IDEC has an array of switches and pushbuttons that suits every machine you have, delivering reliability and precision in any environment.</p>
                        </span>
                        <button onClick={() => setExpanded((curr) => !curr)} className="md:hidden">
                            <div className=" flex gap-2 py-[5px] items-center text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5V19M5 12H19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-12 leading-12 font-medium">Read More</p>

                            </div>
                        </button>
                        <span className={`text-gray600 font-sans font-normal text-12 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "h-auto" : "h-0"}`}>
                            From miniature pilot lights and industrial switches that mount into 8mm panel cut outs through full size industrial switches that mount into 30mm cutouts, we have an industrial switch or indicator for almost any application. Terminations include solder / quick connect terminals, screw terminals, or PC board pins for direct board mounting.
                        </span>
                        <p className=" text-gray600 hidden md:flex text-wrap font-sans flex-1 font-normal md:text-16 md:leading-6">From miniature pilot lights and industrial switches that mount into 8mm panel cut outs through full size industrial switches that mount into 30mm cutouts, we have an industrial switch or indicator for almost any application. Terminations include solder / quick connect terminals, screw terminals, or PC board pins for direct board mounting.  </p>
                    </div>

                </div>
            </div>

        </>
    )
}
