import { cn } from "cn";

function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      className={cn("relative aspect-(--ratio)", className)}
      style={
        {
          "--ratio": ratio,
        } as React.CSSProperties
      }
      data-slot="aspect-ratio"
      {...props}
    />
  );
}

export { AspectRatio };
