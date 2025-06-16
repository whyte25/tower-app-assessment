import { ApartmentDetails } from "@/components/apartment-details";
import ErrorMessage from "@/components/error-message";
import { Header } from "@/components/header";
import { getLayoutById } from "@/data/dummy-data";
import { formatSlug } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export const Route = createFileRoute(
  "/_towers/towers/$towerId/floors/$floorId/apartments/$apartmentId/"
)({
  component: RouteComponent,
  loader: ({ params }) => {
    const layout = getLayoutById(params.floorId, params.apartmentId);
    if (!layout) {
      throw notFound();
    }
    return layout;
  },
  notFoundComponent: () => (
    <ErrorMessage
      title="Apartment Not Found"
      message="The apartment you are looking for does not exist."
    />
  ),
});

function RouteComponent() {
  const layout = Route.useLoaderData();
  const { towerId, floorId } = Route.useParams();

  const towerName = formatSlug(towerId);
  const floorNumber = floorId.split("-").pop();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header
        backButton={{
          to: `/towers/$towerId/floors/$floorId`,
          params: { towerId, floorId },
          text: "Back to apartments",
        }}
        containerClassName="max-w-[1350px]"
        title={layout.name}
        description={layout.description}
        icon={<Layers className="h-6 w-6 text-white" />}
      />
      <ApartmentDetails
        layout={layout}
        towerName={towerName}
        floorName={floorNumber!}
      />
    </motion.div>
  );
}
