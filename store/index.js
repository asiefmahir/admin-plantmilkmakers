import { createStore } from "easy-peasy";
import { productModel } from "./productModel";
import { variantModel } from "./variantModel";

export const store = createStore({
    product: productModel,
    variant: variantModel
})