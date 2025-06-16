import ErrorMessage from "@/components/error-message";
import { TowerDetails } from "@/components/tower/tower-details";
import { generateFloors, getTowerById } from "@/data/dummy-data";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/_towers/towers/$towerId/")({
  component: TowerByIdComponent,
  loader: ({ params }) => {
    const tower = getTowerById(params.towerId);
    if (!tower) {
      throw notFound();
    }
    const floors = generateFloors(tower.id, tower.floors);
    return { tower, floors };
  },
  notFoundComponent: () => (
    <ErrorMessage
      title="Tower Not Found"
      message="The tower you are looking for does not exist."
    />
  ),
});

function TowerByIdComponent() {
  const { tower, floors } = Route.useLoaderData();

  return <TowerDetails tower={tower} floors={floors} />;
}
