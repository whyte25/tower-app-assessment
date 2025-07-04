import { ImageCarousel } from "@/components/image-carousel";
import { images } from "@/data/dummy-data";
import { cn } from "@/lib/utils";
import type { ApartmentLayout } from "@/types";
import { motion } from "framer-motion";
import { Bath, Bed, Calendar, Check, Home, MapPin, Square } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ApartmentDetailsProps {
  layout: ApartmentLayout;
  towerName: string;
  floorName: string;
}

export function ApartmentDetails({
  layout,
  towerName,
  floorName,
}: ApartmentDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <ImageCarousel
            images={images}
            name={layout.name}
            description={layout.description}
          >
            <div className="relative cursor-pointer w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src={layout.image}
                alt={`${layout.name} Layout`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-6 left-6">
                <div
                  className={cn(
                    `px-4 py-2 rounded-full text-sm font-medium`,
                    layout.isAvailable
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  )}
                >
                  {layout.isAvailable ? "Available" : "Sold Out"}
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
            className="w-full"
          >
            <Carousel className="w-full px-4">
              <CarouselContent>
                {images?.map((img) => (
                  <CarouselItem
                    key={img}
                    className="basis-4/5 gap-2 sm:basis-2/5 lg:basis-2/4 xl:basis-2/5"
                  >
                    <div key={img} className="relative">
                      <img
                        src={img}
                        alt={img}
                        className="w-full h-56 object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hover:text-custom-gray-400 text-custom-gray-300 mt-10 flex w-full items-center justify-end gap-2">
                <CarouselPrevious className="static border-none text-white hover:text-white bg-black hover:bg-black/80" />
                <CarouselNext className="static border-none text-white hover:text-white bg-black hover:bg-black/80" />
              </div>
            </Carousel>
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
                {layout.name}
              </h1>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="capitalize">
                {towerName} - Floor {floorName}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 flex items-center">
              {layout.price}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-2">
                <Square className="w-5 h-5 text-gray-400 mr-3" />
                <span className="font-medium text-gray-600">Area</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {layout.area} sq ft
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-2">
                <Bed className="w-5 h-5 text-gray-400 mr-3" />
                <span className="font-medium text-gray-600">Bedrooms</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {layout.roomCount.bedrooms}
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-2">
                <Bath className="w-5 h-5 text-gray-400 mr-3" />
                <span className="font-medium text-gray-600">Bathrooms</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {layout.roomCount.bathrooms}
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                <span className="font-medium text-gray-600">Type</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {layout.unitType}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Included Amenities
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {layout.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{amenity}</span>
                </li>
              ))}
            </ul>
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
  );
}
