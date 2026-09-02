export type ProductField =
  | 'camera'
  | 'healthcare'
  | 'agriculture'
  | 'construction'
  | 'industrial'
  | 'smart-home'
  | 'environment'
  | 'energy';

export interface Product {
  id: string;
  name: string;
  field: ProductField;
  category: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  link: string;
}