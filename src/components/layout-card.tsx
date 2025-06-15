import type { ApartmentLayout } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Bath, Bed, Square, Star } from "lucide-react";

interface LayoutCardProps {
  layout: ApartmentLayout;
  index: number;
}

export default function LayoutCard({ layout, index }: LayoutCardProps) {
  const params = useParams({ strict: false });
  return (
    <Link
      to={"/towers/$towerId/floors/$floorId/apartments/$apartmentId"}
      params={{
        towerId: params.towerId!,
        floorId: params.floorId!,
        apartmentId: layout.id,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.12 }}
        className="group relative cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-2xl z-10"
        />

        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl z-20">
          <div className="relative h-56 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6 }}
              className="h-full w-full"
            >
              <img
                src={layout.image || "/placeholder.svg"}
                alt={layout.name}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
              className="absolute top-4 right-4 flex gap-2"
            >
              <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-lg">
                {layout.unitType}
              </div>
              <div className="bg-yellow-400/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <Star className="h-3 w-3 text-yellow-800" />
                <span className="text-xs font-bold text-yellow-800">
                  Premium
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 + 0.3 }}
              className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-gray-900">
                  {layout.price}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="p-6">
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 + 0.4 }}
              className="text-xl font-bold text-blue-600 mb-3"
            >
              {layout.name}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.12 + 0.5 }}
              className="grid grid-cols-3 gap-4 mb-4"
            >
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                <Square className="h-5 w-5 text-blue-600 mb-1" />
                <span className="text-sm font-semibold text-blue-600">
                  {layout.area}
                </span>
                <span className="text-xs text-gray-500">sq ft</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                <Bed className="h-5 w-5 text-blue-600 mb-1" />
                <span className="text-sm font-semibold text-blue-600">
                  {layout.roomCount.bedrooms}
                </span>
                <span className="text-xs text-gray-500">Rooms</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                <Bath className="h-5 w-5 text-blue-600 group-hover:text-blue-600 mb-1" />
                <span className="text-sm font-semibold text-blue-600">
                  {layout.roomCount.bathrooms}
                </span>
                <span className="text-xs text-gray-500">Baths</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.12 + 0.6 }}
              className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed"
            >
              {layout.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 + 0.7 }}
              className="flex items-center justify-between pt-4 border-t border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    layout.isAvailable ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span className="text-sm text-gray-500">
                  {layout.isAvailable ? "Available" : "Sold Out"}
                </span>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700"
              >
                <span className="text-sm">View Details</span>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
