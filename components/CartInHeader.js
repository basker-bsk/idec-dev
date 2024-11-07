import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ShoppingCart } from "lucide-react";
export default function CartInHeader() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <ShoppingCart className="h-4 w-4 hover:text-red-800  cursor-pointer " />
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-center items-center min-h-[150px]">
          No items in your cart!
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
