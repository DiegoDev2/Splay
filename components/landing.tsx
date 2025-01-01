import Badge from "./ui/badge";
import { FlipWords } from "./ui/flip-words";
import { Map } from "./ui/Map";

export function Landing() {
    const words = ["Effortless", "Impactful", "Next-Level"]
    return (
        <section className="flex items-center justify-between px-8 py-3  text-white">
            
            <div className="max-w-xl">
                <Badge text="Pre-Register Page"/>
                <h1 className="font-medium text-7xl mt-4 whitespace-nowrap">Elevate Streaming</h1>
                <h1 className="font-medium text-7xl bg-gradient-to-tl from-white via-violet-500 to-white bg-clip-text text-transparent py-2">
                    <FlipWords words={words} />
                </h1>
                <p className="mt-4 text-lg">
                    Ad-free, copyright-free music, expertly crafted to amplify your streams and captivate your audience.
                </p>

               <a href="/register">
                    <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium">
                        Pre-Register
                    </button>
               </a> 
                
            </div>
            <div className="flex-shrink-0 w-1/3 h-full">
                <div className="hero_gardient_small"></div>
                <Map />
               
            </div>
        </section>
    );
}
