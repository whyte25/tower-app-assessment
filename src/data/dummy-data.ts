import { formatCurrency } from "@/lib/utils";
import type { ApartmentLayout, Floor, Tower } from "../types";

export const towers: Tower[] = [
  {
    id: "tower-a",
    name: "Tower A - Skyline",
    description:
      "Premium residential tower with panoramic city views and luxury amenities",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&h=1000&fit=crop",
    floors: 15,
  },
  {
    id: "tower-b",
    name: "Tower B - Horizon",
    description:
      "Modern living spaces designed for contemporary lifestyle and comfort",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&h=1000&fit=crop",
    floors: 12,
  },
  {
    id: "tower-c",
    name: "Tower C - Vista",
    description:
      "Elegant design with high-end appliances and a cozy fireplace, perfect for relaxation",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&h=1000&fit=crop",
    floors: 18,
  },
];

export const generateFloors = (
  towerId: string,
  totalFloors: number
): Floor[] => {
  return Array.from({ length: totalFloors }, (_, index) => ({
    name: `Floor ${index + 1}`,
    id: `${towerId}-floor-${index + 1}`,
    number: index + 1,
    towerId,
    apartmentCount: Math.floor(Math.random() * 3) + 2,
  }));
};

export const images = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1000&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1000&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1000&h=1000&fit=crop",
];

export const generateApartmentLayouts = (
  floorId: string,
  count: number
): ApartmentLayout[] => {
  const unitTypes = ["Studio", "1BR", "2BR", "3BR", "Penthouse"];

  return Array.from({ length: count }, (_, index) => {
    const unitType = unitTypes[Math.floor(Math.random() * unitTypes.length)];
    const bedrooms =
      unitType === "Studio"
        ? 0
        : unitType === "1BR"
          ? 1
          : unitType === "2BR"
            ? 2
            : unitType === "3BR"
              ? 3
              : 4;
    const bathrooms = Math.max(1, Math.floor(bedrooms * 0.75));

    return {
      id: `unit-${index + 1}`,
      floorId,
      name: `Unit ${String.fromCharCode(65 + index)}`,
      area: Math.floor(Math.random() * 1000) + 500,
      unitType,
      roomCount: {
        bedrooms,
        bathrooms,
      },
      image: images[index % images.length],
      price: formatCurrency(Math.floor(Math.random() * 500000) + 300000),
      isAvailable: Math.random() > 0.3,
      description:
        "Spacious layout with modern finishes and a private balcony with stunning city views",
      amenities: [
        "Central Air Conditioning",
        "Hardwood Floors",
        "In-Unit Laundry",
        "Stainless Steel Appliances",
        "Granite Countertops",
        "Walk-in Closet",
        "Private Balcony",
        "High Ceilings",
      ],
    };
  });
};

export const getTowerById = (id: string): Tower | undefined =>
  towers.find((tower) => tower.id === id);

export const getLayoutById = (
  floorId: string,
  layoutId: string
): ApartmentLayout | undefined => {
  const layouts = generateApartmentLayouts(floorId, 4);
  const unitNumber = Number(layoutId.replace(/\D/g, ""));

  return layouts.find((layout) => layout.id === `unit-${unitNumber}`);
};
