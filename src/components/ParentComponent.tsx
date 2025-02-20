// components/ParentComponent.tsx
import { useState } from "react";
import { Modal } from "./modal";
import { Button } from "@/components/ui/button";

export function ParentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button onClick={openModal} className="bg-blue-500 text-white py-2 px-4 rounded">
        Get Started
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
