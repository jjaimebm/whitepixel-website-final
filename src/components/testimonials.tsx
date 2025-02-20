import type { StaticImageData } from 'next/image'
// @ts-ignore
import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section id="testimonials" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Testimonials</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          What our users say
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        Hereapos;s what developers and founders of top companies around the internet are saying
        about us.
      </p>
      <div className="mt-1 columns-1 gap-7 md:columns-2 lg:columns-3">
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;I was hesitant about outsourcing our social media, but Whitepixel&apos;s talent
              has exceeded my expectations. The quality of their content is remarkable.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/0logomotoshonda.png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">
                  Honda Motocicletas - Bolivia
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Whitepixel&apos;s social media management is top-notch. They&apos;ve mastered
              the art of balancing promotional content with community engagement,&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/logo.png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Pagame LATAM</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;The comprehensive support from Whitepixel is outstanding. They handle everything
              from content creation to customer inquiries, freeing up my time to focus on
              acquisitions.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/file-(1).png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Hard Rock - Bolivia</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;I&apos;m amazed at how Whitepixel handles our social media across multiple
              platforms.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/file.png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Tecnopolis</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Whitepixel&apos;s pricing is unbeatable for the value they provide. Our
              community engagement has skyrocketed since we started working with them.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/40bdc0e19058f876865f5d8a435ee78c.jpg"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Grupo Piaggo - BOL</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Whitepixel&apos;s approach to social media management is refreshingly efficient.
              They&apos;ve streamlined our online presence across multiple platforms.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/file-(2).png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Skyline Real Estate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
