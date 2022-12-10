import { LightningBoltIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Logo = () => {
    return (
      
        <Link href="/" className="my-2 flex items-center space-x-1 text-indigo-500">
         
          <span className="dark:text-gray-100 text-violet-900 font-bold text-lg font-bold text-3xl font-sans tracking-tight whitespace-nowrap">WaaS</span>
          
        </Link>
    
    )
}

export default Logo;
