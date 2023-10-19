import { CategoryGetResponseDto } from "../category/CategoryGetResponseDto"
import { ShortUserDto } from "../user/ShortUserDto"

export interface AdvertGetByIdResponseDto{
  id: string,
  user: ShortUserDto,
  name: string,
  description: string,
  isActive: boolean,
  imagesIds: string[]
  cost: number,
  email: string,
  phone: string,
  location: string,
  created: string,
  category: CategoryGetResponseDto,
  images: string[],
  geo_lat: number,
  geo_lon: number
}