// src/routes/towers.$towerId.tsx
import FloorCard from "@/components/floor-card";
import { generateFloors, getTowerById } from "@/data/dummy-data";
import { createFileRoute, Link, useLoaderData } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/_towers/towers/$towerId/")({
  component: TowerByIdComponent,
  loader: ({ params }) => {
    const towerDataById = getTowerById(params.towerId);
    if (!towerDataById) {
      throw new Error("Tower not found");
    }
    return towerDataById;
  },
});

function TowerByIdComponent() {
  const towerDataById = useLoaderData({ from: "/_towers/towers/$towerId/" });
  const towerFloors = generateFloors(towerDataById.id, towerDataById.floors);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Towers</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {towerDataById.name}
                </h1>
                <p className="text-gray-600">{towerDataById.description}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-80 overflow-hidden">
        <img
          src={towerDataById.image || "/placeholder.svg"}
          alt={towerDataById.name}
          className="object-cover w-full object-top "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Building2 className="h-5 w-5" />
              <span className="font-medium">{towerDataById.floors} Floors</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-5 w-5" />
              <span className="font-medium">
                {towerDataById.floors * 4} Units
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Prime Location</span>
            </div>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
            {towerFloors.map((floor, index) => (
              <FloorCard key={floor.id} floor={floor} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <img
                src={towerDataById.image}
                alt={towerDataById.name}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <p className="text-gray-600 leading-relaxed">
                {towerDataById.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
