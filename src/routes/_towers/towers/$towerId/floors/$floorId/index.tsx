import ErrorMessage from "@/components/error-message";
import { Header } from "@/components/header";
import LayoutCard from "@/components/layout-card";
import { generateApartmentLayouts } from "@/data/dummy-data";
import { getNumber, removeDashes } from "@/lib/utils";
import {
  createFileRoute,
  notFound,
  useLoaderData,
  useParams,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, Eye, Layers } from "lucide-react";

export const Route = createFileRoute(
  "/_towers/towers/$towerId/floors/$floorId/"
)({
  component: FloorDetailComponent,
  loader: ({ params }) => {
    const apartmentLayouts = generateApartmentLayouts(params.towerId, 4);
    if (!apartmentLayouts) {
      notFound();
    }
    return apartmentLayouts;
  },
  notFoundComponent() {
    return (
      <ErrorMessage
        title="Floor Not Found"
        message="The floor you are looking for does not exist."
      />
    );
  },
});

function FloorDetailComponent() {
  const apartmentLayouts = useLoaderData({
    from: "/_towers/towers/$towerId/floors/$floorId/",
  });
  const params = useParams({
    from: "/_towers/towers/$towerId/floors/$floorId/",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header
        backButton={{
          to: `/towers/$towerId`,
          params: { towerId: params.towerId },
          text: "Back to Floors",
        }}
        title={removeDashes(params.floorId)}
        description={`Level ${getNumber(params.floorId)} • ${apartmentLayouts.length} Available Layouts`}
        icon={<Layers className="h-6 w-6 text-white" />}
      />

      {/* Floor Info Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Building2 className="h-12 w-12 mb-4 opacity-80" />
              <h3 className="text-2xl capitalize font-bold mb-2">
                {removeDashes(params.towerId)}
              </h3>
              <p className="opacity-90">Premium Tower</p>
            </div>
            <div className="flex flex-col items-center">
              <Layers className="h-12 w-12 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">
                Floor {removeDashes(params.floorId)}
              </h3>
              <p className="opacity-90">High-rise Living</p>
            </div>
            <div className="flex flex-col items-center">
              <Eye className="h-12 w-12 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">
                {apartmentLayouts.length} Layouts
              </h3>
              <p className="opacity-90">Available Options</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apartment{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Layouts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully designed apartment layouts on{" "}
            {removeDashes(params.floorId)}. Each unit offers modern amenities,
            thoughtful design, and breathtaking views.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {apartmentLayouts.map((layout, index) => (
            <LayoutCard key={layout.id} layout={layout} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
