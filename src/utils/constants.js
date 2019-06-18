let BASE_URL = '';

let env = process.env.NODE_ENV;
env = 'host';
if (env === "development") {
    BASE_URL = "http://localhost/laravel-blog/";
}
else {
    BASE_URL = "http://www.pikalong.top/";
}
const Constants = {
    BASE_URL_API: BASE_URL + "api/v1/"
};

export default Constants;
