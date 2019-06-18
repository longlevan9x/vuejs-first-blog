import Request from "./request"
export default {
    getListPostCategoryIsHome() {
        return Request.get('home/list-post-category-is-home').then(response => response.data);
    }
}