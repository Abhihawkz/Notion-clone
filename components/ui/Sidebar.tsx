import { Menu } from "lucide-react";
import NewDocument from "./NewDocument";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Sidebar() {
  const menuOptions = (
    <>
      <NewDocument />
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="md:hidden max-w-40">
        <Sheet>
          <SheetTrigger>
            <Menu size={40} className="hover:opacity-30 rounded-lg" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div className="flex justify-center">

              {menuOptions}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
}

export default Sidebar;
