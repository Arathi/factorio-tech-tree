type Ingredient = Array<string | number>;

export interface Unit {
  time: number;
  count: number;
  ingredients: Ingredient[];
}

export interface Icon {
  icon: string;
  icon_mipmaps: number;
  icon_size: number;
  shift?: number[];
}

export interface Effect {
  type?: string;
  ammo_category?: string;
  modifier?: number;
}

export default interface Technology {
  name: string;
  prerequisites: string[];
  type: string;
  unit: Unit;
  upgrade: boolean;
  icon_size: number;
  icons: Icon[];
  max_level: string | number | undefined;
  order: string;
  icon_mipmaps: number;
  effects: Effect[];
}