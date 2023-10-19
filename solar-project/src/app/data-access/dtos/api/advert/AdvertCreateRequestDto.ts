export interface AdvertCreateRequestDto{
    Name: string,
    Description: string,
    Images: string[],
    Cost: number,
    Email: string,
    Phone: string,
    Location: string,
    CategoryId: string
}