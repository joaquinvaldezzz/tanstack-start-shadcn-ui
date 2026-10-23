import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "./ui/empty";

export function NotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404</EmptyTitle>
        <EmptyDescription>Page not found</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
