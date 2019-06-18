import Request  from "./request";
import Constant from "../utils/constants";

export default {
    get() {
        let params = {
            is_active: 1
        };

        let query = Object.keys(params).map(key => key + "=" + params[key]).join("&");
        return Request.get("category?" + query).then(
            response => response.data
        );
    },
    detailBySlug(slug) {
        return Request.get(`category/${slug}`).then(response => response.data);
    },
    getIsHome() {
        return Request.get("category/get-with-home").then(
            response => response.data
        );
    }
};
