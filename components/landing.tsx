import Badge from "./ui/badge";
import { Map } from "./ui/Map";

export function Landing() {
    return (
        <section className="flex items-center justify-between px-8 py-3  text-white">
            
            <div className="max-w-xl">
                <Badge />
                <h1 className="font-medium text-7xl mt-4 whitespace-nowrap">Elevate Streaming</h1>
                <p className="mt-4 text-lg">
                    Ad-free, copyright-free music, expertly crafted to amplify your streams and captivate your audience.
                </p>
                <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium">
                    Get started
                </button>
            </div>
            <div className="flex-shrink-0 w-1/3 h-full">
                <Map />
               
            </div>
        </section>
    );
}
