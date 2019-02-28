export default class Paginate {
    constructor(current_page, last_page, per_page, from, to, total) {
        this.current_page   = current_page;
        this.last_page      = last_page;
        this.per_page       = per_page;
        this.from           = from;
        this.to             = to;
        this.total          = total;
    }
}