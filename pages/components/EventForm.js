import React from "react";
import { useState, useRef } from "react";

export default function EventForm() {
  const [open, setOpen] = useState(true);
  const cancelButton = useRef(null);

  return (
    <div>
      <div class="py-12">
        <h2 class="text-2xl font-bold text-[#1E2A3D]">Create Event</h2>
        <div class="mt-8 max-w-md">
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Email address</span>
              <input
                type="email"
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Event Name</span>
              <input
                type="text"
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                placeholder=""
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Event Location</span>
              <input
                type="text"
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                placeholder=""
              />
            </label>

            <label class="block">
              <span class="text-gray-700">When is your event?</span>
              <input
                type="datetime-local"
                class="
                    mt-1
                    text-[#1E2A3D]
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              />
            </label>
            <label class="block">
              <span class="text-gray-700">What type of event is it?</span>
              <select
                class="
                    block
                    w-full
                    mt-1
                    text-[#1E2A3D]
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              >
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
            <label class="block">
              <span class="text-gray-700">Additional details</span>
              <textarea
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                rows="3"
              ></textarea>
            </label>
            <div class="block">
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="
                          rounded
                          bg-gray-200
                          border-transparent
                          focus:border-transparent focus:bg-gray-200
                          text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                        "
                    />
                    <span class="ml-2 text-[#1E2A3D]">
                      Email me news and special offers{" "}
                    </span>
                    <button
                      class="px-6 py-2 ml-20 text-white bg-[#4CAF50] hover:bg-green-700 ... rounded-full "
                      type="button"
                    >
                      Submit
                    </button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
