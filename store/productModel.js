import { action } from "easy-peasy";
import shortid from "shortid";

export const productModel = {
    products: {},

    addProduct: action((state, payload) => {
        const product = {};
        product.id = shortid.id;
        product.title = payload.title;
        product.description = payload.description;
        product.category = payload.category;
        product.specification = payload.specification;
        product.images = payload.images;
        product.attributes = payload.attributes;
        product.variants = [];
        product.coupons = [];
        product.collections = [];
        product.tags = [];
        product.brand = payload.brand;
        product.taxPlan = payload.taxPlan;
        product.shippingMethod = payload.shippingMethod;
        products.isPublished = payload.isPublished || true;

        state.products[product.id] = product;
    }),

    removeProduct: action((state, payload) => {
        delete state.products[payload.productID]
    }),

    addVariant: action((state, payload) => {
        state.products[payload.productID].variants.push(payload.variantID)
    }),
    
    removeVariant: action((state, payload) => {
        let variantToBeRemoved = state.products[payload.productID].variants.find((variant) => variant === payload.variantID)
        state.products[payload.productID].variants.splice(variantToBeRemoved, 1)
    }),

    addCoupon: action((state, payload) => {
        state.products[payload.productID].coupons.push(payload.couponID)
    }),

    removeCoupon: action((state, payload) => {
        let couponToBeRemoved = state.products[payload.productID].coupons.find((coupon) => coupon === payload.couponID)
        state.products[payload.productID].coupons.splice(couponToBeRemoved, 1)
    }),

    addCollection: action((state, payload) => {
        state.products[payload.productID].collections.push(payload.collectionID)
    }),

    removeCollection: action((state, payload) => {
        let collectionToBeRemoved = state.products[payload.productID].collections.find((collection) => collection === payload.collectionID)
        state.products[payload.productID].collections.splice(collectionToBeRemoved, 1)
    }),

    addTag: action((state, payload) => {
        state.products[payload.productID].tags.push(payload.tagID)
    }),

    removeTag: action((state, payload) => {
        let tagToBeRemoved = state.products[payload.productID].tags.find((tag) => tag === payload.tagID)
        state.products[payload.productID].tags.splice(tagToBeRemoved, 1)
    }),
    
    toggleIsPublished: action((state, payload) => {
        state.products[payload.productID].isPublished = payload.isPublished
    }),

    updateField: action((state, payload) => {
        state.products[payload.productID][payloadFieldName] = payload.fieldValue
    }), 

}