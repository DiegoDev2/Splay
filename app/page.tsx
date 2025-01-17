import Header from "@/components/header";
import { Landing } from "@/components/landing";
import Objetives from "@/components/objetives";
import Noise from "@/components/noise";

export default function Home() {
  return (
    <>

      <div className="absolute inset-0 z-0">
        <Noise
          patternSize={100}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />


      </div>
      <Header />
      <Landing />

     



      {/*
  ____          _____  _                  _____            ___  
 |  _ \        |  __ \(_)                |  __ \          |__ \ 
 | |_) |_   _  | |  | |_  ___  __ _  ___ | |  | | _____   __ ) |
 |  _ <| | | | | |  | | |/ _ \/ _` |/ _ \| |  | |/ _ \ \ / // / 
 | |_) | |_| | | |__| | |  __/ (_| | (_) | |__| |  __/\ V // /_ 
 |____/ \__, | |_____/|_|\___|\__, |\___/|_____/ \___| \_/|____|
         __/ |                 __/ |                            
        |___/                 |___/                             


     */}

    </>
  );
}
