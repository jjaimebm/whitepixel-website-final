// components/Header.tsx

"use client";
import { useState } from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { Modal } from "@/components/modal";
import type { StaticImageData } from 'next/image'
import { smoothScrollTo } from "@/lib/utils";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3 flex-1">
        <Image
          alt="Image"
          src="/images/WhatsApp-Image-2024-10-20-at-19-24-23.jpeg"
          width={50}
          height={500}
        />
        <span className="font-heading text-xl font-bold">Whitepixel</span>
      </Link>
      <nav className="hidden items-center gap-10 md:flex flex-1 justify-center">
        <Link
          href="#services"
          onClick={(e) => handleScroll(e, 'services')}
          className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          Services
        </Link>
        <Link
          href="#faqs"
          onClick={(e) => handleScroll(e, 'faqs')}
          className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          FAQs
        </Link>
        <Link
          href="#pricing"
          onClick={(e) => handleScroll(e, 'pricing')}
          className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          Pricing
        </Link>
      </nav>
      <div className="hidden items-center gap-2 md:flex flex-1 justify-end">
        <Button onClick={openModal} className="cursor-pointer">
          Get Started
        </Button>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="#services"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#faqs"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              FAQs
            </Link>
            <Link
              href="#pricing"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Button onClick={openModal} size="lg" className="mt-2 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      </MobileNavbar>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
}
