import Request   from "./request";
import Constants from "../utils/constants";
//import {queryParams} from "../utils/helpers";

export default {
    get(params = {}) {
        params.is_active = 1;

        let query = Object.keys(params)
            .map(key => key + "=" + params[key])
            .join("&");
        //return promise
        return Request.get("post?" + query).then(
            response => response.data
        );
    },
    getBySlug(slug) {
        //return promise
        return Request.get(`post/${slug}`).then(
            response => response.data
        );
    }
};
