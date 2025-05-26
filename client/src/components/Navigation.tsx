import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const galleryItems = [
    { label: "Lac", value: "lac" },
    { label: "Felt", value: "felt" },
    { label: "Beads", value: "beads" },
    { label: "Ceramic", value: "ceramic" },
    { label: "Wood", value: "wood" },
    { label: "Resin", value: "resin" },
    { label: "Horn Bone", value: "horn-bone" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Company Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200">
                <span className="text-blue-600 font-bold text-2xl tracking-wide">
                  S&S International
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Gallery Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                  Gallery
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {galleryItems.map((item) => (
                  <DropdownMenuItem key={item.value} asChild>
                    <Link href={`/services?category=${item.value}`}>
                      <span className="cursor-pointer">{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/services">
                    <span className="cursor-pointer font-medium text-blue-600">View All</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about">
              <span className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer ${
                location === "/about" ? "text-blue-600" : ""
              }`}>
                About Us
              </span>
            </Link>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 mb-3">Gallery</h3>
                    {galleryItems.map((item) => (
                      <Link
                        key={item.value}
                        href={`/services?category=${item.value}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="block px-3 py-2 text-gray-600 hover:text-blue-600 cursor-pointer">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                    <Link href="/services" onClick={() => setMobileOpen(false)}>
                      <span className="block px-3 py-2 text-blue-600 font-medium cursor-pointer">
                        View All
                      </span>
                    </Link>
                  </div>
                  
                  <Link href="/about" onClick={() => setMobileOpen(false)}>
                    <span className="block px-3 py-2 text-gray-700 font-medium cursor-pointer">
                      About Us
                    </span>
                  </Link>
                  
                  <Button
                    variant="ghost"
                    onClick={() => {
                      scrollToSection("contact");
                      setMobileOpen(false);
                    }}
                    className="justify-start px-3 py-2 text-gray-700 font-medium"
                  >
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
