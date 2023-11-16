export {};

declare global {
  export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    discountPercentage: number;
    stock: number;
    category: string;
    brand: string;
    thumbnail: string;
    images: string[];
  }

  export type TypeOfUser = 'Develop' | 'Admin' | 'Support';

  export interface Hub {
    cif: number;
    name: string;
    nrc: string;
    email: string;
    accountClass: number;
    appliedDate: string;
    phoneNo: string;
    status: string;
  }

  export interface Inbox {
    cif: number;
    name: string;
    nrc: string;
    email: string;
    accountClass: number;
    appliedDate: string;
    phoneNo: string;
    status: string;
    action?: string;
  }

  export interface DataType {
    label: string;
    value: string | null | undefined;
  }
}
