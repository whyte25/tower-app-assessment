import type { Tower } from "@/types";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import { Button } from "../ui/button";

export const TowerCard = ({
  tower,
  index,
}: {
  tower: Tower;
  index: number;
}) => {
  return (
    <Link to="/towers/$towerId" params={{ towerId: tower.id }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -8 }}
        className="group cursor-pointer"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300">
          <div className="relative overflow-hidden">
            <motion.img
              src={tower.image}
              alt={tower.name}
              className="w-full h-64 object-cover hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800"
            >
              Premium
            </motion.div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-600 mb-2  transition-colors">
              {tower.name}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {tower.description}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{tower.floors} Floors</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>Available Units</span>
              </div>
            </div>

            <Button className="w-full mt-4">Explore Floors</Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
