import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Tooltip as UITooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { User } from "@/types/userTypes/user.types";

interface ToolTipProps extends Pick<User, "email"> {
  label: string;
  name: string;
}

const Tooltip: React.FC<ToolTipProps> = ({ label, email, name }) => {
  return (
    <div className="">
      {label && (
        <Label className="block text-xs font-medium text-gray-700">
          {label}
        </Label>
      )}
      <TooltipProvider>
        <UITooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="cursor-default border-[#1c71cd] py-[11px] pl-3 pr-[250px] text-base text-[#1c71cd] focus:border-[#1c71cd]"
            >
              {email}
            </Button>
          </TooltipTrigger>
        </UITooltip>
      </TooltipProvider>
    </div>
  );
};

export default Tooltip;
