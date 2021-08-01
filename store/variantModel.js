import { action } from "easy-peasy";
import shortid from "shortid";


export const variantModel = {
    variants: {},

    addVariant: action((state, payload) => {
        const variant = {}
        variant.id = shortid.generate()
        variant.sku = payload.sku;
        variant.productID = payload.productID;
        variant.title = payload.title;
        variant.price = payload.price || 0.00;
        variant.discount = payload.discount || 0.00;
        variant.availableStock = payload.availableStock || 0;
        variant.icon = null;
        variant.image = null;
        variant.isPublished = payload.isPublished || true

    })
}
