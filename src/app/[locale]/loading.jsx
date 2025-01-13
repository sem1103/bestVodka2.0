'use client'
import { useEffect, useState } from "react";


export default function Loading({hide}){



    return(
        <div className={`loader ${hide ? 'hide' : ''}`}>
           <div>
           <img src="/assets/img/logo.svg" alt="" />
           </div>
        </div>
    )
}