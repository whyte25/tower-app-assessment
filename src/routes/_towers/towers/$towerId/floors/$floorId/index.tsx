import ErrorMessage from "@/components/error-message";
import { FloorDetails } from "@/components/floor-details";
import { generateApartmentLayouts } from "@/data/dummy-data";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_towers/towers/$towerId/floors/$floorId/"
)({
  component: FloorDetailComponent,
  loader: ({ params }) => {
    const apartmentLayouts = generateApartmentLayouts(params.floorId, 4);
    if (!apartmentLayouts || apartmentLayouts.length === 0) {
      throw notFound();
    }
    return apartmentLayouts;
  },
  notFoundComponent: () => (
    <ErrorMessage
      title="Floor Not Found"
      message="The floor you are looking for does not exist or has no layouts."
    />
  ),
});

function FloorDetailComponent() {
  const apartmentLayouts = Route.useLoaderData();
  const { towerId, floorId } = Route.useParams();

  return (
    <FloorDetails
      apartmentLayouts={apartmentLayouts}
      towerId={towerId}
      floorId={floorId}
    />
  );
}
