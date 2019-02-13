import Request       from "./request";
import Constants     from "../utils/constants";
//import {queryParams} from "../utils/helpers";

export default {
    get() {
        let params = {
            apiKey: Constants.API_KEY,
            source: Constants.SOURCE,
            country : 'us'
        };

        let query = Object.keys(params)
            .map(key => key + "=" + params[key])
            .join("&");
        //return promise
        return Request.get("top-headlines?" + query).then(
            response => response.data
        );
    }
};
