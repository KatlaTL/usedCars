/**
 * Created by tha on 15-03-2017.
 */
export default function (arr, filterStr) {
    return arr.filter((el) => {
        var ok = false;
        Object.keys(el).forEach(function (key) {
            var val = el[key];
            val += "";
            if (val.includes(filterStr)) {
                ok = true;
                return;
            }
        });
        if (ok) {
            return el;
        }
    });
}
