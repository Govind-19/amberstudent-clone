export interface Property {
  id: number;
  name: string;
  city: string;
  country: string;
  price: number;
  imageUrl: string;
}

export const properties: Property[] = [
  { id: 1, name: 'Chapter Old Street', city: 'London', country: 'UK', price: 350, imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070' },
  { id: 2, name: 'Scape Wembley', city: 'London', country: 'UK', price: 320, imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974' },
  { id: 3, name: 'Journal Square', city: 'New York', country: 'USA', price: 450, imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070' },
  { id: 4, name: 'Unilodge Park Central', city: 'Brisbane', country: 'AUS', price: 280, imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070' },
  { id: 5, name: 'The Hub', city: 'Boston', country: 'USA', price: 410, imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070' },
  { id: 6, name: 'Urbanest Darling Square', city: 'Sydney', country: 'AUS', price: 390, imageUrl: 'https://images.unsplash.com/photo-1628744448845-a7641a974b93?q=80&w=1932' },
];