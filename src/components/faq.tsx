// components/Faq.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Modal } from "@/components/modal"; // Import the Modal component

export function Faq() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="faqs" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Faq</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How is Whitepixel different from other social media management services?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Whitepixel offers a unique combination of high-quality, English-speaking talent and
            cost-effective solutions. Our team works in sync with US time zones, ensuring responsive
            service for our clients. We specialize in property management, providing
            industry-specific expertise for your social media needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How do you ensure responsive communication and what reporting can you expect?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Our team works in shifts aligned with US time zones, ensuring coverage during your
            business hours. We guarantee response times within 1 hour for all client inquiries,
            with our English-proficient staff ensuring clear, effective communication at all times.
            <br />
            <br />
            In terms of reporting, we provide monthly performance summaries detailing key metrics
            such as engagement rates, follower growth, and post reach. These reports are tailored to
            focus on KPIs that matter most to property managers, like lead generation and community
            sentiment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What types of social media platforms do you manage?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            At Whitepixel, we specialize in managing the four primary social media platforms crucial
            for businesses: Facebook, Instagram, LinkedIn, and Twitter. These form the core of our
            service offering. Additionally, we can assist with YouTube and Pinterest on a project
            basis, tailoring our approach to your specific needs and target audience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What is the onboarding process like for new clients?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Our onboarding process begins with a thorough review of your current social media
            presence. We then have a strategy session to understand your specific goals and
            portfolio. Next, we develop a customized content calendar and engagement strategy.
            Within two weeks, we&apos;re typically ready to manage your accounts, with your approval
            on all processes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Do you create custom content for each property, or use templates?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            We use both approaches at Whitepixel. Our process starts with customizable templates for
            efficiency, but each client has an assigned account manager who creates custom content
            tailored to your brand and property features.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <section id="pricing" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-center">Pricing</span>
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
            Simple pricing
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-lg text-center">
          Pricing that fits your needs and helps you scale.
        </p>
        <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
          <Card className="relative shadow-lg">
            <CardContent className="divide-y p-0">
              <div className="flex flex-col items-center px-7 py-10">
                <h4 className="font-heading text-2xl font-semibold text-foreground">Basic</h4>
                <p className="mt-2 text-muted-foreground">For side projects.</p>
                <div className="mt-5">
                  <span className="font-heading text-5xl font-semibold">$50</span>
                  <span className="text-sm"> /month</span>
                </div>
                <Button size="lg" onClick={openModal} className="mt-10 w-full">
                  Get started
                </Button>
              </div>
              <ul className="space-y-2 px-7 py-10">
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">4 posts per month across platforms</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">Basic content customization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">Monthly performance report</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">72 Hour response time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative shadow-lg border-2 border-primary">
            <CardContent className="divide-y p-0">
              <div className="flex flex-col items-center px-7 py-10">
                <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md">
                  Most popular
                </span>
                <h4 className="font-heading text-2xl font-semibold text-foreground">Pro</h4>
                <p className="mt-2 text-muted-foreground">For most businesses and brands</p>
                <div className="mt-5">
                  <span className="font-heading text-5xl font-semibold">$100</span>
                  <span className="text-sm"> /month</span>
                </div>
                <Button size="lg" onClick={openModal} className="mt-10 w-full">
                  Get started
                </Button>
              </div>
              <ul className="space-y-2 px-7 py-10">
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">8 posts per month across platforms</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">Advanced content customization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">Bi-weekly performance reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">48 Hour response time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative shadow-lg">
            <CardContent className="divide-y p-0">
              <div className="flex flex-col items-center px-7 py-10">
                <h4 className="font-heading text-2xl font-semibold text-foreground">Full-time account</h4>
                <p className="mt-2 text-muted-foreground">For fully customized requests.</p>
                <div className="mt-5">
                  <span className="font-heading text-5xl font-semibold">$500</span>
                  <span className="text-sm"> /month</span>
                </div>
                <Button size="lg" onClick={openModal} className="mt-10 w-full">
                  Get started
                </Button>
              </div>
              <ul className="space-y-2 px-7 py-10">
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">Unlimited posts monthly</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">Fully customized content strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">Daily engagement monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={24} className="text-primary" />
                  <span className="text-muted-foreground">6 Hour response time</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

