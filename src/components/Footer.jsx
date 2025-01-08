import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaRegShareSquare } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdCopyright } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";

function Footer() {
  return (
    <div className="bg-gray-900 flex justify-between items-center px-20 py-8">
      <div className="text-gray-400 font-semibold flex items-center gap-1">
        2023 <MdCopyright className="text-lg" />
        TRADERLY LLC
      </div>
      <div >
        <ul className="flex justify-between items-center gap-5">
          <li>Affiliate</li>
          <li>Regulations</li>
          <li>Terms</li>
          <li>FAQ</li>
          <li>Docs</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <LiaTelegramPlane className="text-2xl text-gray-400 cursor-pointer hover:text-[#14c48f] " />
        <CiTwitter className="text-2xl text-gray-400 cursor-pointer hover:text-[#14c48f] " />
        <RxDiscordLogo className="text-2xl text-gray-400 cursor-pointer hover:text-[#14c48f] " />
        <FaRegShareSquare className="text-2xl text-gray-400 cursor-pointer hover:text-[#14c48f] " />
      </div>
    </div>
  );
}

export default Footer;
