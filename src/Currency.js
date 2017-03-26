/**
 * Created by tha on 15-03-2017.
 */
export default function(value, decimalPosition = 2) {
    return '$' + value
            .toFixed(decimalPosition)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}