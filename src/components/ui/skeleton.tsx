import { cn } from "../../lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("w-[100px] h-[20px] rounded-full bg-primary/10 animate-pulse", className)}
      {...props}
    />
  )
}

export { Skeleton }
