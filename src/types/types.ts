export default interface MenuType {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}

export default interface ProductType {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
}
