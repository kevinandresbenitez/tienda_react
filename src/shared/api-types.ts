export interface ApiResponse<Type = undefined> {
    message: string;
    payload?: Type;
}

export interface userDto {
    id: number;
    name: string;
    email: string;
};

export interface ProductDto {
    id: number;
    name: string;
    description: string;
    price: number;
    img_texture: string;
    info: string;
    versions: ProductVersionDto[];
}

export interface ProductVersionDto {
    id: number;
    color_name: string;
    color_rgb: string;
    stock: number;
    img: string | null;
}

export interface LoginRequestDto {
    email: string;
    password: string;
}