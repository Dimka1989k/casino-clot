import Image from "next/image";

import city from "@/public/tokiocity.svg";
import cloud from "@/public/cloud.svg";
import cloudSmall from "@/public/cloud-small.svg";

export default function Background() {
  return (
    <div className="w-full absolute bottom-0 xl:-bottom-35 max-2xl:-bottom-65">           
       <Image
          src={city}
          alt="city"
          className="w-full absolute -bottom-18 z-1 max-sm:hidden  min-[768px]:max-[1023px]:-bottom-5"
        />
        <Image
          src={cloud}
          alt="cloud"
          className="w-full absolute -bottom-47 max-sm:hidden z-12 min-[640px]:max-[1023px]:-bottom-25"
        />
        <Image
          src={cloudSmall}
          alt="cloud"
          className="absolute bottom-0 w-full sm:hidden"
        />
    </div>
  );
}