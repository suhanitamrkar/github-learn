"use client"
import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);

export default function App() {
    const container = useRef();

    useGSAP(
        () => {
            // gsap code here...
            gsap.to('.box', { rotation: 180 }); // <-- automatically reverted
        },
        { scope: container }
    ); // <-- scope for selector text (optional)

    return (
        <div ref={container} className="app">
            <div className="box bg-slate-800 h-20 w-20 m-10 ">Hello</div>
        </div>
    );
}