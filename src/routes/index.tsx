import { TowerCard } from "@/components/tower/tower-card";
import { towers } from "@/data/dummy-data";
import { createFileRoute } from "@tanstack/react-router";

import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: TowerOverviewComponent,
});

function TowerOverviewComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Residential Towers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your perfect home among our collection of luxury
            residential towers, each offering unique amenities and breathtaking
            views.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {towers.map((tower, index) => (
            <TowerCard key={tower.id} tower={tower} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
