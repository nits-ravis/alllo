import lodash from "lodash";

const findOne = function (needle, hash) {
    return hash.filter(h => {
        if (hash.id === needle) {
            return h;
        }
    });
}