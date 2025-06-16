import { Header } from "@/components/header";
import FloorCard from "@/components/tower/floor-card";
import type { Floor, Tower } from "@/types";
import { motion } from "framer-motion";
import { Building2, MapPin, Users } from "lucide-react";

interface TowerDetailsProps {
  tower: Tower;
  floors: Floor[];
}

export function TowerDetails({ tower, floors }: TowerDetailsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header
        backButton={{
          to: "/",
          text: "Back to Towers",
        }}
        title={tower.name}
        description={tower.description}
      />

      <section className="relative h-80 overflow-hidden">
        <img
          src={tower.image || "/placeholder.svg"}
          alt={tower.name}
          className="object-cover w-full object-top "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-4 sm:left-8 lg:left-25.5 text-white">
          <div className="flex flex-wrap items-center gap-6 mb-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Building2 className="h-5 w-5" />
              <span className="font-medium">{tower.floors} Floors</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-5 w-5" />
              <span className="font-medium">{tower.floors * 4} Units</span>
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4">
            {floors.map((floor, index) => (
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
                src={tower.image}
                alt={tower.name}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <p className="text-gray-600 leading-relaxed">
                {tower.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
