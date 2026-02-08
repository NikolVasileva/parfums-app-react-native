import api from "./api";

export async function fetchGetAllParfums() {
    return api.get("/parfums")
}

export async function fetchBestSellersParfums() {
    let url = "/parfums?isBestSeller=true"

    return api.get(url);
}

export async function fetchPromoParfums() {
    let url = "/parfums?isPromo=true"

    return api.get(url);
}
