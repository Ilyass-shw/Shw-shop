export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  imgs: string[];
}

export type categories =
  | 'Necklace'
  | 'Ring'
  | 'Armcuff'
  | 'Bracelet'
  | 'Earrings';

export interface DataItem extends Item {
  category: categories;
}
