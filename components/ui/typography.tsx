import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "leading-7",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export function Text({ className, variant, ...props }: TextProps) {
  return <p className={cn(textVariants({ variant, className }))} {...props} />;
}
