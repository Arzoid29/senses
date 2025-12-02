// lib/api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://188.138.28.243/api"

// --- Interfaces Genéricas ---
interface ApiListResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

// --- Interfaces SERVICES ---
interface ApiCategory {
  id: number
  name: string
  slug: string
  description?: string
  is_active?: boolean
}

interface ApiService {
  id: number
  title: string
  slug: string
  short_description: string
  full_description: string
  price: string
  price_display: string
  duration?: string
  featured_image: string | null
  category: ApiCategory | number | string
}

// --- Interfaces PORTFOLIO ---
interface ApiPortfolioCategory {
  id: number
  name: string
  slug: string
}

interface ApiPortfolioItem {
  id: number
  title: string
  description: string
  category: ApiPortfolioCategory | number | string
  before_image: string | null 
  after_image: string | null 
}

// --- Interfaces TEAM (Ajustado a tu JSON) ---
interface ApiTeamSpecialty {
  id: number
  name: string
  slug: string
  display_order: number
}

interface ApiTeamMember {
  id: number
  name: string
  slug: string
  title: string             // Antes asumimos 'role', ahora es 'title'
  bio: string               // Contiene HTML
  photo: string | null      // Antes asumimos 'image', ahora es 'photo'
  specialties: ApiTeamSpecialty[]
  email?: string
  phone?: string
  display_order?: number
  is_active?: boolean
}

// --- Interfaces de la UI (Frontend) ---

export interface Category {
  id: string | number
  name: string
}

export interface Service {
  id: string
  category: string
  title: string
  description: string
  fullDescription?: string
  price: string
  duration: string
  image: string
  details?: string
}

export interface PortfolioItem {
  id: string
  category: string
  title: string
  description: string
  before: string
  after: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string // HTML string
  specialties: string[] // Array simple de strings para la UI
  email?: string
  phone?: string
}

export interface Booking {
  service_id: string
  date: string
  time: string
  name: string
  email: string
  phone: string
}

export interface ContactMessage {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// --- Transformadores ---

const transformApiService = (data: ApiService): Service => {
  let categoryName = "General";
  if (typeof data.category === 'object' && data.category !== null && 'name' in data.category) {
    categoryName = data.category.name;
  } else if (typeof data.category === 'string') {
    categoryName = data.category;
  }

  return {
    id: String(data.id),
    category: categoryName,
    title: data.title || "Servicio Sin Título",
    description: data.short_description || "",
    fullDescription: data.full_description || "",
    price: data.price_display || `$${data.price}`,
    duration: data.duration || "Consultar",
    image: data.featured_image || "/placeholder.svg",
    details: data.full_description,
  };
};

const transformPortfolioItem = (data: ApiPortfolioItem): PortfolioItem => {
  let categoryName = "General";
  if (typeof data.category === 'object' && data.category !== null && 'name' in data.category) {
    categoryName = data.category.name;
  } else if (typeof data.category === 'string') {
    categoryName = data.category;
  }

  return {
    id: String(data.id),
    category: categoryName,
    title: data.title || "Transformación",
    description: data.description || "",
    before: data.before_image || "/placeholder.jpg", 
    after: data.after_image || "/placeholder.jpg",
  };
};

const transformTeamMember = (data: ApiTeamMember): TeamMember => {
  // Extraemos solo los nombres de las especialidades para la UI
  const specialtiesList = Array.isArray(data.specialties) 
    ? data.specialties.map(s => s.name) 
    : [];

  return {
    id: String(data.id),
    name: data.name || "Team Member",
    role: data.title || "Stylist", // Mapeamos 'title' de API a 'role' de UI
    image: data.photo || "/placeholder-user.jpg", // Mapeamos 'photo' a 'image'
    bio: data.bio || "",
    specialties: specialtiesList,
    email: data.email,
    phone: data.phone
  };
};

// --- Llamadas a la API ---

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/categories/`, { cache: 'no-store' })
    if (response.ok) {
      const data: ApiListResponse<ApiCategory> = await response.json()
      return (data.results || []).map(cat => ({ id: cat.id, name: cat.name }))
    }
  } catch (error) {
    console.error("Error fetching service categories:", error)
  }
  return []
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/services/`, { cache: 'no-store' })
    if (response.ok) {
      const data: ApiListResponse<ApiService> = await response.json()
      return (data.results || []).map(transformApiService)
    }
  } catch (error) {
    console.error("Error fetching services:", error)
  }
  return []
}

export async function getServiceById(id: string): Promise<Service | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/services/${id}/`, { cache: 'no-store' })
    if (response.ok) {
      const data: ApiService = await response.json()
      return transformApiService(data)
    }
  } catch (error) {
    console.error(`Error fetching service ${id}:`, error)
  }
  return null
}

export async function getPortfolioCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/categories/`, { cache: 'no-store' })
    if (response.ok) {
      const data: ApiListResponse<ApiPortfolioCategory> = await response.json()
      return (data.results || []).map(cat => cat.name)
    }
  } catch (error) {
    console.error("Error fetching portfolio categories:", error)
  }
  return []
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/items/`, { cache: 'no-store' })
    if (response.ok) {
      const data: ApiListResponse<ApiPortfolioItem> = await response.json()
      return (data.results || []).map(transformPortfolioItem)
    }
  } catch (error) {
    console.error("Error fetching portfolio items:", error)
  }
  return []
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/team/members/`, { cache: 'no-store' })
    if (response.ok) {
      const data: ApiListResponse<ApiTeamMember> = await response.json()
      return (data.results || []).map(transformTeamMember)
    }
  } catch (error) {
    console.error("Error fetching team members:", error)
  }
  return []
}

export async function submitBooking(booking: Booking): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
    return response.ok
  } catch (error) {
    console.error("Booking API failed:", error)
    return false
  }
}

export async function submitContactMessage(message: ContactMessage): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })
    return response.ok
  } catch (error) {
    console.error("Contact API failed:", error)
    return false
  }
}