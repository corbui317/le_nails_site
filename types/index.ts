export interface Service {
  name: string;
  price: string;
  desc?: string;
}

export interface ServiceCategory {
  title: string;
  image: string;
  items: Service[];
}

export interface Booking {
  id?: number;
  customer_name: string;
  email: string;
  phone: string;
  service_category?: string;
  service_name?: string;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
  status?: string;
  deposit_paid?: boolean;
  created_at?: string;
}

export interface Review {
  id?: number;
  customer_name: string;
  rating: number;
  comment?: string;
  approved?: boolean;
  created_at?: string;
}

export interface BlogPost {
  id?: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image_url?: string;
  published?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Staff {
  id?: number;
  name: string;
  title?: string;
  bio?: string;
  image_url?: string;
  specialties?: string[];
  display_order?: number;
  active?: boolean;
}
