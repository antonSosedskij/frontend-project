export interface AdvertsGetResponseDto {
    id: string,
    name: string,
    location: string,
    createdAt: string,
    isActive: boolean,
    imagesIds: string[],
    cost: number,
    image: any
  }