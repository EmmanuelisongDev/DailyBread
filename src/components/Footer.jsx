import React from "react";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="  bg-[#000]">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link class="flex items-center mb-4 sm:mb-0">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
              DailyBread
            </span>
          </Link>
        </div>
        <hr class="my-6  sm:mx-auto lg:my-8" />
        <span class="flex text-sm text- sm:text-center  text-white ">
          <p class="hover:underline"> © 2023{""} emmisongDev</p>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
