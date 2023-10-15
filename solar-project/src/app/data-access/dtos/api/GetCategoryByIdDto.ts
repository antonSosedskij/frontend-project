import { CategoryGetResponseDto } from "./CategoryGetResponseDto";

export interface GetCategoryByIdDto {
    id: string,
    name: string,
    parentId: string,
    childs: CategoryGetResponseDto[]
}