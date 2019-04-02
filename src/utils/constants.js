let BASE_URL = '';
if (process.env.NODE_ENV === "development") {
    BASE_URL = "http://localhost/laravel-blog/";
}
else {
    BASE_URL = "http://www.pikalong.top/";
}
const Constants = {
    BASE_URL_API: BASE_URL + "api/v1/"
};

export default Constants;
