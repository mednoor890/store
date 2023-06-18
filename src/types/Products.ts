export interface Product {
    _id: string;
    availibility: string;
    brand: string;
    category: {
      _id: string;
    };
    description: string;
    discount: number;
    endDate: string;
    image: string;
    name: string;
    price: number;
    price_on_discount: number;
    quantity: number;
    startDate: string;
    link: string;
  }