import Request   from "./request";
import Constants from "../utils/constants";
//import {queryParams} from "../utils/helpers";

export default {
    /**
     * @param params
     * @return {Q.Promise<any> | Q.Promise<T | never> | PromiseLike<T | never> | *}
     */
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
    },
    /**
     * @param params
     * @return {Q.Promise<any> | Q.Promise<T | never> | PromiseLike<T | never> | *}
     */
    getListTop(params = {}) {
        let query = Object.keys(params)
            .map(key => key + "=" + params[key])
            .join("&");
        //return promise
        return Request.get("post/top").then(response => response.data);
    },
    /**
     * @param params
     * @return {Q.Promise<any> | Q.Promise<T | never> | PromiseLike<T | never> | *}
     */
    getListPopular(params = {}) {
        let query = Object.keys(params)
            .map(key => key + "=" + params[key])
            .join("&");
        //return promise
        return Request.get("post/popular").then(response => response.data);
    },
    /**
     *
     * @param params
     * @return {Q.Promise<any> | Q.Promise<T | never> | PromiseLike<T | never> | *}
     */
    getPostsSearch(params = {}) {
        let query = Object.keys(params)
            .map(key => key + "=" + params[key])
            .join("&");
        //return promise
        return Request.get("post/search?" + query).then(response => response.data);
    }
};
