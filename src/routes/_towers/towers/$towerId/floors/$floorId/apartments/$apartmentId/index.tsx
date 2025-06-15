import { ImageCarousel } from "@/components/image-carousel";
import { Button } from "@/components/ui/button";
import {
  generateApartmentLayouts,
  getLayoutById,
  images,
} from "@/data/dummy-data";
import {
  createFileRoute,
  Link,
  notFound,
  useLoaderData,
  useParams,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bath,
  Bed,
  Calendar,
  Check,
  Home,
  MapPin,
  Square,
} from "lucide-react";

export const Route = createFileRoute(
  "/_towers/towers/$towerId/floors/$floorId/apartments/$apartmentId/"
)({
  component: RouteComponent,
  loader: ({ params }) => {
    console.log(params, "params");
    const apartmentLayouts = generateApartmentLayouts(params.floorId, 4);
    const layout = getLayoutById(params.floorId, params.apartmentId);
    console.log(apartmentLayouts, "apartmentLayouts");
    if (!layout) {
      notFound();
    }
    return layout;
  },
});

function RouteComponent() {
  const params = useParams({ strict: false });
  const layout = useLoaderData({
    from: "/_towers/towers/$towerId/floors/$floorId/apartments/$apartmentId/",
  });
  const towerName = params.towerId?.split("-").join(" ");
  const floorName = params.floorId?.split("-").join(" ")[
    params.floorId?.split("-").join(" ").length - 1
  ];

  const amenities = [
    "Central Air Conditioning",
    "Hardwood Floors",
    "In-Unit Laundry",
    "Stainless Steel Appliances",
    "Granite Countertops",
    "Walk-in Closet",
    "Private Balcony",
    "High Ceilings",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-40"
      >
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to={`/towers/$towerId/floors/$floorId`}
                params={{ towerId: params.towerId!, floorId: params.floorId! }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to apartments</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ImageCarousel
              images={images}
              name={layout?.name!}
              description={layout?.description!}
            >
              <div className="relative cursor-pointer w-full  overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={layout?.image}
                  alt={`${layout?.name} Layout`}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-6 left-6">
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      layout?.isAvailable
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {layout?.isAvailable ? "Available" : "Sold Out"}
                  </div>
                </div>
                {images && images.length > 0 && (
                  <div className="absolute bottom-1 right-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
                    +{images.length - 1}
                  </div>
                )}
              </div>
            </ImageCarousel>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:grid grid-cols-5 gap-4"
            >
              {images?.map((img) => (
                <div key={img} className="relative">
                  <img
                    src={img}
                    alt={img}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center mb-2">
                <Home className="w-6 h-6 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">
                  Unit {layout?.name}
                </h1>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="capitalize">
                  {towerName} - Floor {floorName}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 flex items-center">
                {layout?.price!}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-2">
                  <Square className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="font-medium text-gray-600">Area</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {layout?.area} sq ft
                </span>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-2">
                  <Bed className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="font-medium text-gray-600">Bedrooms</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {layout?.roomCount.bedrooms}
                </span>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-2">
                  <Bath className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="font-medium text-gray-600">Bathrooms</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {layout?.roomCount.bathrooms}
                </span>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="font-medium text-gray-600">Type</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {layout?.unitType}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Included Amenities
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                variant="outline"
                className={`w-full `}
                disabled={!layout?.isAvailable}
              >
                {layout?.isAvailable ? "Schedule a Tour" : "Unit Not Available"}
              </Button>

              <Button className="w-full">Request Information</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
