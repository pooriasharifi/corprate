import { Button } from "@/components/ui/button";
import { CustomText } from "@/components/ui/title";
import { HEADER_ITEMS } from "@/config/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="md:hidden relative z-50">
      <Button
        size={"icon"}
        onClick={() => setOpen(!open)}
        variant={"ghost"}
        className="fixed top-4 left-4 z-50"
      >
        <div className="rounded-full bg-primary p-4">
          {open ? <X size={44} /> : <Menu size={44} />}
        </div>
      </Button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key={"middle-menu"}
              className="fixed inset-0 bg-background/50 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                key={"mobile-menu"}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-20 left-0 w-full bg-background shadow-md  p-6 z-50"
              >
                {HEADER_ITEMS.map((item, index) => (
                  <Link
                    key={`header-${index}`}
                    href={item.link}
                    className={` hover:text-accent duration-150 ${
                      pathname == item.link
                        ? "underline underline-offset-4 text-foreground"
                        : "text-muted"
                    }`}
                  >
                    <CustomText title={item.name} />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
