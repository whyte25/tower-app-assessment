export interface Tower {
  id: string;
  name: string;
  description: string;
  image: string;
  floors: number;
}

export interface Floor {
  name: string;
  id: string;
  number: number;
  towerId: string;
  apartmentCount: number;
}

export interface ApartmentLayout {
  id: string;
  floorId: string;
  name: string;
  area: number;
  unitType: string;
  roomCount: {
    bedrooms: number;
    bathrooms: number;
  };
  image: string;
  price: string;
  isAvailable: boolean;
  description: string;
}

export type ViewType = "towers" | "floors" | "layouts" | "details";

export interface AppState {
  currentView: ViewType;
  selectedTower?: Tower;
  selectedFloor?: Floor;
  selectedLayout?: ApartmentLayout;
}
