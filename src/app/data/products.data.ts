// export const services = [
//   {
//     id: 'caravans',
//     title: 'Multi-purpose Caravans',
//     description: 'Custom-built caravans for various applications',
//     products: [
//       { id: 1, name: 'Travel Caravan Deluxe', description: 'Luxury travel caravan with modern amenities', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop', category: 'Multi-purpose Caravans', subcategory: 'Travel' },
//       { id: 2, name: 'Mobile Office Caravan', description: 'Professional mobile office solution', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop', category: 'Multi-purpose Caravans', subcategory: 'Office' },
//       { id: 3, name: 'Workshop Caravan', description: 'Mobile workshop with tools storage', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop', category: 'Multi-purpose Caravans', subcategory: 'Workshop' }
//     ]
//   },
//   {
//     id: 'food-trucks',
//     title: 'Food Trucks',
//     description: 'Professional mobile kitchen solutions',
//     products: [
//       { id: 4, name: 'Gourmet Food Truck', description: 'High-end food truck with premium equipment', image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop', category: 'Food Trucks', subcategory: 'Gourmet' },
//       { id: 5, name: 'Street Food Truck', description: 'Compact truck for street food vendors', image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop', category: 'Food Trucks', subcategory: 'Street Food' },
//       { id: 6, name: 'Ice Cream Truck', description: 'Specialized truck for ice cream sales', image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop', category: 'Food Trucks', subcategory: 'Ice Cream' }
//     ]
//   },
//   {
//     id: 'kiosks',
//     title: 'Kiosks and Booths',
//     description: 'Modern retail and information kiosks',
//     products: [
//       { id: 7, name: 'Shopping Mall Kiosk', description: 'Premium retail kiosk for malls', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', category: 'Kiosks and Booths', subcategory: 'Retail' },
//       { id: 8, name: 'Information Booth', description: 'Interactive information display booth', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', category: 'Kiosks and Booths', subcategory: 'Information' },
//       { id: 9, name: 'Security Booth', description: 'Weather-resistant security booth', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', category: 'Kiosks and Booths', subcategory: 'Security' }
//     ]
//   },
//   {
//     id: 'containers',
//     title: 'Container Modifications',
//     description: 'Custom container solutions for various needs',
//     products: [
//       { id: 10, name: 'Mobile Office Container', description: 'Container converted to modern office space', image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop', category: 'Container Modifications', subcategory: 'Office' },
//       { id: 11, name: 'Storage Container Plus', description: 'Enhanced storage with custom features', image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop', category: 'Container Modifications', subcategory: 'Storage' },
//       { id: 12, name: 'Workshop Container', description: 'Fully equipped mobile workshop', image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop', category: 'Container Modifications', subcategory: 'Workshop' }
//     ]
//   },
//   {
//     id: 'trailers',
//     title: 'Trailers',
//     description: 'Heavy-duty trailers for all transport needs',
//     products: [
//       { id: 13, name: 'Cargo Trailer Heavy', description: 'Heavy-duty cargo transportation trailer', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop', category: 'Trailers', subcategory: 'Cargo' },
//       { id: 14, name: 'Car Carrier Trailer', description: 'Multi-car transport trailer', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop', category: 'Trailers', subcategory: 'Car Carrier' },
//       { id: 15, name: 'Equipment Trailer', description: 'Specialized equipment transport', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop', category: 'Trailers', subcategory: 'Equipment' }
//     ]
//   },
//   {
//     id: 'mobile-outlets',
//     title: 'Mobile Food Outlets',
//     description: 'Compact food service solutions',
//     products: [
//       { id: 16, name: 'Coffee Cart Premium', description: 'Mobile coffee service cart', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', category: 'Mobile Food Outlets', subcategory: 'Coffee' },
//       { id: 17, name: 'Juice Bar Cart', description: 'Fresh juice serving station', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', category: 'Mobile Food Outlets', subcategory: 'Juice' },
//       { id: 18, name: 'Snack Stand', description: 'Compact snack serving unit', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', category: 'Mobile Food Outlets', subcategory: 'Snacks' }
//     ]
//   },
//   {
//     id: 'utility-vehicles',
//     title: 'Custom Utility Vehicles',
//     description: 'Specialized vehicles for unique applications',
//     products: [
//       { id: 19, name: 'Maintenance Van', description: 'Mobile maintenance service vehicle', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Custom Utility Vehicles', subcategory: 'Maintenance' },
//       { id: 20, name: 'Medical Van', description: 'Mobile medical service unit', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Custom Utility Vehicles', subcategory: 'Medical' },
//       { id: 21, name: 'Emergency Response Vehicle', description: 'Emergency services mobile unit', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Custom Utility Vehicles', subcategory: 'Emergency' }
//     ]
//   },
//   {
//     id: 'bicycles',
//     title: 'Bicycles and Tricycles',
//     description: 'Commercial bikes for delivery and vending',
//     products: [
//       { id: 22, name: 'Cargo Tricycle Pro', description: 'Heavy-duty cargo tricycle', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop', category: 'Bicycles and Tricycles', subcategory: 'Cargo' },
//       { id: 23, name: 'Vendor Bicycle', description: 'Mobile vending bicycle unit', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop', category: 'Bicycles and Tricycles', subcategory: 'Vending' },
//       { id: 24, name: 'Delivery Bike', description: 'Fast delivery bicycle', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop', category: 'Bicycles and Tricycles', subcategory: 'Delivery' }
//     ]
//   },
//   {
//     id: 'customization',
//     title: 'Vehicle Customization',
//     description: 'Custom modifications for existing vehicles',
//     products: [
//       { id: 25, name: 'Van Interior Conversion', description: 'Complete van interior customization', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Vehicle Customization', subcategory: 'Interior' },
//       { id: 26, name: 'Truck Bed Modification', description: 'Custom truck bed solutions', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Vehicle Customization', subcategory: 'Exterior' },
//       { id: 27, name: 'Fleet Branding', description: 'Professional vehicle branding service', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Vehicle Customization', subcategory: 'Branding' }
//     ]
//   },
//   {
//     id: 'steel-structures',
//     title: 'General Steel Structure Fabrication',
//     description: 'Custom steel structures for various applications',
//     products: [
//       { id: 28, name: 'Industrial Framework', description: 'Heavy-duty industrial steel structures', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop', category: 'General Steel Structure Fabrication', subcategory: 'Industrial' },
//       { id: 29, name: 'Commercial Building Frame', description: 'Steel framework for commercial buildings', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop', category: 'General Steel Structure Fabrication', subcategory: 'Commercial' },
//       { id: 30, name: 'Custom Steel Components', description: 'Precision steel component fabrication', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop', category: 'General Steel Structure Fabrication', subcategory: 'Components' }
//     ]
//   }
//   ];

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
}
export interface Service {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const services: Service[] = [
  {
    id: 'caravans',
    title: 'Multi-purpose Caravans',
    description: 'Custom-built caravans for various applications',
    products: [
      { id: 1, name: 'Travel Caravan Deluxe', description: 'Luxury travel caravan with modern amenities', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop', category: 'Multi-purpose Caravans', subcategory: 'Travel' },
      { id: 2, name: 'Mobile Office Caravan', description: 'Professional mobile office solution', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop', category: 'Multi-purpose Caravans', subcategory: 'Office' },
      { id: 3, name: 'Workshop Caravan', description: 'Mobile workshop with tools storage', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop', category: 'Multi-purpose Caravans', subcategory: 'Workshop' }
    ]
  },
  {
    id: 'food-trucks',
    title: 'Food Trucks',
    description: 'Professional mobile kitchen solutions',
    products: [
      { id: 4, name: 'Gourmet Food Truck', description: 'High-end food truck with premium equipment', image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop', category: 'Food Trucks', subcategory: 'Gourmet' },
      { id: 5, name: 'Street Food Truck', description: 'Compact truck for street food vendors', image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop', category: 'Food Trucks', subcategory: 'Street Food' },
      { id: 6, name: 'Ice Cream Truck', description: 'Specialized truck for ice cream sales', image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop', category: 'Food Trucks', subcategory: 'Ice Cream' }
    ]
  },
  {
    id: 'kiosks',
    title: 'Kiosks and Booths',
    description: 'Modern retail and information kiosks',
    products: [
      { id: 7, name: 'Shopping Mall Kiosk', description: 'Premium retail kiosk for malls', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', category: 'Kiosks and Booths', subcategory: 'Retail' },
      { id: 8, name: 'Information Booth', description: 'Interactive information display booth', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', category: 'Kiosks and Booths', subcategory: 'Information' },
      { id: 9, name: 'Security Booth', description: 'Weather-resistant security booth', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', category: 'Kiosks and Booths', subcategory: 'Security' }
    ]
  },
  {
    id: 'containers',
    title: 'Container Modifications',
    description: 'Custom container solutions for various needs',
    products: [
      { id: 10, name: 'Mobile Office Container', description: 'Container converted to modern office space', image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop', category: 'Container Modifications', subcategory: 'Office' },
      { id: 11, name: 'Storage Container Plus', description: 'Enhanced storage with custom features', image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop', category: 'Container Modifications', subcategory: 'Storage' },
      { id: 12, name: 'Workshop Container', description: 'Fully equipped mobile workshop', image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop', category: 'Container Modifications', subcategory: 'Workshop' }
    ]
  },
  {
    id: 'trailers',
    title: 'Trailers',
    description: 'Heavy-duty trailers for all transport needs',
    products: [
      { id: 13, name: 'Cargo Trailer Heavy', description: 'Heavy-duty cargo transportation trailer', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop', category: 'Trailers', subcategory: 'Cargo' },
      { id: 14, name: 'Car Carrier Trailer', description: 'Multi-car transport trailer', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop', category: 'Trailers', subcategory: 'Car Carrier' },
      { id: 15, name: 'Equipment Trailer', description: 'Specialized equipment transport', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop', category: 'Trailers', subcategory: 'Equipment' }
    ]
  },
  {
    id: 'mobile-outlets',
    title: 'Mobile Food Outlets',
    description: 'Compact food service solutions',
    products: [
      { id: 16, name: 'Coffee Cart Premium', description: 'Mobile coffee service cart', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', category: 'Mobile Food Outlets', subcategory: 'Coffee' },
      { id: 17, name: 'Juice Bar Cart', description: 'Fresh juice serving station', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', category: 'Mobile Food Outlets', subcategory: 'Juice' },
      { id: 18, name: 'Snack Stand', description: 'Compact snack serving unit', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', category: 'Mobile Food Outlets', subcategory: 'Snacks' }
    ]
  },
  {
    id: 'utility-vehicles',
    title: 'Custom Utility Vehicles',
    description: 'Specialized vehicles for unique applications',
    products: [
      { id: 19, name: 'Maintenance Van', description: 'Mobile maintenance service vehicle', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Custom Utility Vehicles', subcategory: 'Maintenance' },
      { id: 20, name: 'Medical Van', description: 'Mobile medical service unit', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Custom Utility Vehicles', subcategory: 'Medical' },
      { id: 21, name: 'Emergency Response Vehicle', description: 'Emergency services mobile unit', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Custom Utility Vehicles', subcategory: 'Emergency' }
    ]
  },
  {
    id: 'bicycles',
    title: 'Bicycles and Tricycles',
    description: 'Commercial bikes for delivery and vending',
    products: [
      { id: 22, name: 'Cargo Tricycle Pro', description: 'Heavy-duty cargo tricycle', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop', category: 'Bicycles and Tricycles', subcategory: 'Cargo' },
      { id: 23, name: 'Vendor Bicycle', description: 'Mobile vending bicycle unit', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop', category: 'Bicycles and Tricycles', subcategory: 'Vending' },
      { id: 24, name: 'Delivery Bike', description: 'Fast delivery bicycle', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop', category: 'Bicycles and Tricycles', subcategory: 'Delivery' }
    ]
  },
  {
    id: 'customization',
    title: 'Vehicle Customization',
    description: 'Custom modifications for existing vehicles',
    products: [
      { id: 25, name: 'Van Interior Conversion', description: 'Complete van interior customization', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Vehicle Customization', subcategory: 'Interior' },
      { id: 26, name: 'Truck Bed Modification', description: 'Custom truck bed solutions', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Vehicle Customization', subcategory: 'Exterior' },
      { id: 27, name: 'Fleet Branding', description: 'Professional vehicle branding service', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop', category: 'Vehicle Customization', subcategory: 'Branding' }
    ]
  },
  {
    id: 'steel-structures',
    title: 'General Steel Structure Fabrication',
    description: 'Custom steel structures for various applications',
    products: [
      { id: 28, name: 'Industrial Framework', description: 'Heavy-duty industrial steel structures', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop', category: 'General Steel Structure Fabrication', subcategory: 'Industrial' },
      { id: 29, name: 'Commercial Building Frame', description: 'Steel framework for commercial buildings', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop', category: 'General Steel Structure Fabrication', subcategory: 'Commercial' },
      { id: 30, name: 'Custom Steel Components', description: 'Precision steel component fabrication', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop', category: 'General Steel Structure Fabrication', subcategory: 'Components' }
    ]
  }
];

export const allProducts = services.flatMap(service => service.products);
export const allCategories = [...new Set(allProducts.map(product => product.category))];


export const productData = {
  1: {  
    name: 'Travel Caravan Deluxe',
    category: 'Multi-purpose Caravans',
    subcategory: 'Travel',
    shortDescription: 'Luxury travel caravan with modern amenities',
    longDescription: 'Experience the ultimate in mobile luxury with our Travel Caravan Deluxe. Crafted with precision and attention to detail, this premium caravan offers unmatched comfort and convenience for your adventures.',
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
    ],
    benefits: [
      'Save 40% on accommodation costs during travel',
      'Complete independence and freedom to explore',
      'Professional-grade construction ensures 20+ year lifespan',
      'Instant setup - ready in under 15 minutes',
      'Weather-resistant design for year-round use'
    ],
    features: [
      'Luxury interior with premium finishes',
      'Full kitchen with modern appliances',
      'Comfortable sleeping area for 4 people',
      'Private bathroom with shower',
      'Climate control system',
      'Solar power system with battery backup'
    ],
    specifications: {
      'Overall Length': '7.5 meters',
      'Width': '2.3 meters',
      'Height': '3.2 meters',
      'Weight': '2,800 kg',
      'Sleeping Capacity': '4 people',
      'Water Tank': '150 liters',
      'Power System': 'Solar + Battery',
      'Construction': 'Aluminum frame with composite panels'
    }
  },
  4: {
    name: 'Gourmet Food Truck',
    category: 'Food Trucks',
    subcategory: 'Gourmet',
    shortDescription: 'High-end food truck with premium equipment',
    longDescription: 'Transform your culinary dreams into a profitable business with our Gourmet Food Truck. Designed for professional chefs and food entrepreneurs who demand excellence.',
    images: [
      'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop'
    ],
    benefits: [
      'Generate up to $500,000 annual revenue potential',
      'Mobile business - reach customers anywhere',
      'Lower overhead costs than traditional restaurants',
      'Quick ROI - typically 18-24 months',
      'Built-in marketing appeal attracts customers'
    ],
    features: [
      'Commercial-grade kitchen equipment',
      'Stainless steel prep surfaces',
      'High-capacity refrigeration',
      'Professional ventilation system',
      'Point-of-sale system ready',
      'Custom branding opportunities'
    ],
    specifications: {
      'Overall Length': '8.5 meters',
      'Width': '2.5 meters',
      'Height': '3.8 meters',
      'Kitchen Area': '15 m²',
      'Equipment': 'Commercial grade',
      'Power': '220V + Generator backup',
      'Water System': '200L fresh + 150L waste',
      'Certification': 'Food safety compliant'
    }
  }
  // Add more products as needed
};