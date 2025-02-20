import { Frame, Gauge, Download, LayoutDashboard } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="services" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Services</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Engage Social Media Effectively and Scale your Presence Seamlessly
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl text-center">
        Whitepixel combines community manager expertise with cost-effective, outsourced talent to
        deliver responsive, round-the-clock social media management that grows with your property
        business.
      </p>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-l lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <Frame size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Social Media Management</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Create, schedule, and optimize content across platforms for maximum engagement.
            <br />
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <Gauge size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Community Engagement</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Respond to comments, messages, and reviews promptly to build strong relationships.
            <br />
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <Download size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Tracking and Reporting</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Generate regular reports on performance and engagement metrics to keep you informed of
            online presence and community growth.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <LayoutDashboard size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Industry Expertise</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Specialized knowledge in community management to target the right audience effectively.
          </p>
        </div>
      </div>
    </section>
  );
}
