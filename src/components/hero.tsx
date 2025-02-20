// components/Hero.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/modal"; // Import the Modal component
import { smoothScrollTo } from "@/lib/utils";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo('testimonials');
  };

  return (
    <section className="relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background">
      <div className="absolute top-0 isolate z-0 flex w-full flex-1 items-start justify-center">
        {/* Motion effects and background gradients */}
        <motion.div
          style={{
            backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          initial={{ width: "15rem", opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "30rem", opacity: 1 }}
          className="bg-gradient-conic absolute top-0 right-1/2 h-56 w-[30rem] overflow-visible from-primary/60 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-background [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          style={{
            backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          initial={{ width: "15rem", opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "30rem", opacity: 1 }}
          className="bg-gradient-conic absolute top-0 left-1/2 h-56 w-[30rem] from-transparent via-transparent to-primary/60 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-background [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl" />
        <div className="absolute top-0 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "16rem" }}
          className="absolute top-0 z-30 h-36 w-64 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "30rem" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[-10%] bg-primary/60"
        />
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="relative z-50 flex container justify-center flex-1 flex-col px-5 md:px-10 gap-4"
      >
        <h1 className="bg-gradient-to-br from-slate-300 to-primary bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl font-heading caret-black">
          Elevate your social media presence cost-effectively with Whitepixel
        </h1>
        <p className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-xl tracking-tight text-transparent md:text-2xl caret-black">
          Manage your social media communities. The right way.
        </p>
        <p className="text-lg text-muted-foreground text-balance text-center">
          Whitepixel provides professional social media management services for businesses. We
          specialize in managing content and engagement across key platforms including Facebook,
          Instagram, LinkedIn, and Twitter.
        </p>
        <div className="relative mx-auto mt-8">
          <div className="grid grid-cols-2 gap-3">
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
            >
              <Link href="#testimonials" onClick={handleScroll}>Learn More</Link>
            </Button>
            <Button
              size="lg"
              onClick={openModal}
              className="h-12 cursor-pointer text-base sm:h-14 sm:px-10"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
      
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
