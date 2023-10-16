import { AdvertsGetResponseDto } from "../advert/AdvertsGetResponseDto";

export interface UserDto{
    id: string,
    name: string,
    role: string,
    adverts:  AdvertsGetResponseDto[],
    registeredTime: Date

}