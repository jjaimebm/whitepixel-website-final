// @ts-ignore
import Image from "next/image"
import type { StaticImageData } from 'next/image'

export function SocialProof() {
  return (
    <section id="social-proof" className="relative z-0 container flex flex-col items-center gap-10 py-24">
      <h2 className="text-center text-lg font-semibold leading-8">
        Proven track record with a variety of clients
      </h2>
      <div className="grid w-full grid-cols-4 gap-10 sm:grid-cols-6 sm:gap-12 lg:grid-cols-5">
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1">
          <Image
            alt="Company Logo"
            src="/images/file.png"
            width={150}
            height={500} // Set consistent height
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            placeholder="empty"
            className="object-contain"
          />
        </div>
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1">
          <Image
            alt="Company Logo"
            src="/images/0logomotoshonda.png"
            width={150}
            height={500} // Set consistent height
            className="object-contain"
          />
        </div>
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1">
          <Image
            alt="Company Logo"
            src="/images/file-(1).png"
            width={150}
            height={500} // Set consistent height
            className="object-contain"
          />
        </div>
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1 sm:col-start-2">
          <Image
            alt="Company Logo"
            src="/images/Hero-Logo.png"
            width={250}
            height={500} // Set consistent height
            className="object-contain"
          />
        </div>
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1 col-start-2 sm:col-start-auto">
          <Image
            alt="Image"
            src="/images/40bdc0e19058f876865f5d8a435ee78c.jpg"
            width={900}
            height={500} // Set consistent height
          />
        </div>
      </div>
    </section>
  );
}
