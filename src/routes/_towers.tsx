import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_towers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
