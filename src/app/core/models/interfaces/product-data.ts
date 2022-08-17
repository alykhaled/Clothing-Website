import { Categories } from "../enums/categories";
import { Colors } from "../enums/colors";
import { Sizes } from "../enums/sizes";

export interface ProductData {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    size: Sizes;
    color: Colors;
    category: Categories;
}