"use client";

import Link from "next/link";
import { PopupButton } from "@typeform/embed-react";
import { Button } from "./ui/button";

const tabs = [
  {
    label: "Travel & Stay",
    href: "/travel-stay",
  },
  {
    label: "Registry",
    href: "/registry",
  },
  
  
]

export default function Header() {

  const typeformId = process.env.NEXT_PUBLIC_RSVP_TYPEFORM_ID;

  const showRSVP = !!typeformId

  return (
    <div className="flex gap-8 bg-background w-full p-5 justify-end items-center text-primary">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <Link href={tab.href} key={tab.label} className="font-medium text-lg hover:underline">{tab.label}</Link>
        ))}
      </div>
      {showRSVP && <Button variant="outline">
        <PopupButton id={typeformId} className="cursor-pointer">
          RSVP
        </PopupButton>
      </Button>}
      
    </div>
  );
}