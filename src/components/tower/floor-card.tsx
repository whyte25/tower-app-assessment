"use client";

import type { Floor } from "@/types";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ArrowRight, Eye, Home, Users } from "lucide-react";

export default function FloorCard({
  floor,
  index,
}: {
  floor: Floor;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to="/towers/$towerId/floors/$floorId"
        params={{ towerId: floor.towerId, floorId: floor.id }}
      >
        <div className="group relative overflow-hidden h rounded-xl bg-white border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-300">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex relative flex-col gap-5 p-4">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 shadow-lg"
                >
                  <Home className="h-7 w-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {floor.name}
                  </h3>
                  <p className="text-sm text-gray-500">Level {floor.number}</p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">
                    {floor.apartmentCount} Units
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <Eye className="h-3 w-3" />
                  <span>Available</span>
                </div>
              </div>
            </div>

            <div className="w-full  h-1 mt-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.random() * 40 + 60}%` }}
                transition={{ duration: 1, delay: index * 0.1 + Math.random() }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">Ready to view</span>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700"
              >
                <span className="text-sm">View Layouts</span>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
