import api from "./api";

export async function fetchBestSellersParfums() {
    let url = "/parfums?isBestSeller=true"

    return api.get(url);
}