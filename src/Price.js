export default (price) => {
    let arrPrice = String(price).match(/-?\d/g).map(Number).reverse(),
        loop = 0,
        res = ""
    price = []
    arrPrice.forEach((element) => {
        if (loop === 3) {
            price.push(".")
            loop = 0
        }
        price.push(element)
        loop++
    })
    price.reverse()
    price.forEach((element) => {
        res += element.toString()
    })
    return res
}