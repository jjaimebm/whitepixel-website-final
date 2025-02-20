// components/Modal.tsx
"use client";

import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 isolate" style={{ zIndex: 99999 }}>
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        style={{ zIndex: 99999 }}
      />
      <div 
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-background p-6 rounded-lg shadow-xl"
        style={{ zIndex: 100000 }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          style={{ zIndex: 100001 }}
        >
          ×
        </button>
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
              alert("Form submitted!");
              onClose();
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Preferred Contact Method</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass="w-full border rounded"
                containerClass="w-full"
                inputProps={{
                  name: "phone",
                  required: true,
                  placeholder: "Enter your phone number",
                }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Your Email</label>
              <input
                type="email"
                required
                className="w-full border px-3 py-2 rounded"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Available Times for a Call</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="e.g., Mon-Fri 9am-5pm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Additional Notes (Optional)</label>
              <textarea
                className="w-full border px-3 py-2 rounded"
                placeholder="Share any specific needs or details you want to get from Whitepixel..."
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(
    modalContent,
    document.body
  );
}
