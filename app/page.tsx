import Header from "@/components/header";
import { Landing } from "@/components/landing";
import  Objetives  from "@/components/objetives";
import ScrollEffect from "@/components/ui/scroll";

export default function Home() {
  return (
    <>
    <ScrollEffect>
      <Header />
      <Landing />
      <Objetives />
      <div className="hero_gardient"></div>
    </ScrollEffect>
      

     {/*
  ____          _____  _                  _____            ___  
 |  _ \        |  __ \(_)                |  __ \          |__ \ 
 | |_) |_   _  | |  | |_  ___  __ _  ___ | |  | | _____   __ ) |
 |  _ <| | | | | |  | | |/ _ \/ _` |/ _ \| |  | |/ _ \ \ / // / 
 | |_) | |_| | | |__| | |  __/ (_| | (_) | |__| |  __/\ V // /_ 
 |____/ \__, | |_____/|_|\___|\__, |\___/|_____/ \___| \_/|____|
         __/ |                 __/ |                            
        |___/                 |___/                             

        A Project open sourced by Vyx
     */}

  </>
  );
}
