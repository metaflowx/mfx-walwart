"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import CommonButton from "../ui/CommonButton";

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" size="icon" className="xl:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 mt-4 border-t border-border">
                        <Link href="#" >
                           <CommonButton title="Connect Wallet" width="214px"  />
                        </Link>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenu
