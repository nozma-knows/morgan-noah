import Link from "next/link";
import { Button } from "./ui/button";
import { H1, H2, Large, P, Title } from "./ui/typography";

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
  return (
    <div className="flex gap-8 bg-background w-full p-5 justify-end items-center text-primary">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <Link href={tab.href} key={tab.label} className="font-medium text-lg hover:underline">{tab.label}</Link>
        ))}
      </div>
      <Button variant="outline">RSVP</Button>
    </div>
  );
}