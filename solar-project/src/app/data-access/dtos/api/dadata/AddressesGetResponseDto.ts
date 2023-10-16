export interface AddressesGetResponseDto{
    suggestions: [
        {
            value: string,
            data: {
                geo_lat: string,
                geo_lon: string,
            }
        }
    ]
}