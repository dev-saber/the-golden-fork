import React from 'react';
import Appetizers from "../assets/images/Appetizers-img.png";

export default function MenuCategory() {
    return(
        <div className="flex flex-col items-center">
            <img src={Appetizers} alt="Appetizers" className='w-3/4 md:w-full'/>
            <div className="flex flex-col items-center -mt-6 gap-2 md:gap-4">
                <span className="font-yellowtail text-white text-3xl md:text-5xl">Appetizers</span>
                <span className="font-poppins text-goldenYellow font-bold md:text-xl">View Menu</span>
            </div>
        </div>
    )
}