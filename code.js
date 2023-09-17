function divideAndConquerSum(a) {
    // base case where array contains < 3 elements
    if (a.length == 2)
        return a[0] + a[1]
    else if (a.length == 1)
        return a[0]
    else if (a.length == 0)
        return 0;

    // determines size of sub arrays
    const slice = Math.round(a.length / 3)

    // original array sliced into three sub arrays
    const tmp1 = a.slice(0, slice)
    const tmp2 = a.slice(slice, a.length - slice)
    const tmp3 = a.slice(a.length - slice, a.length)

    return divideAndConquerSum(tmp1) + divideAndConquerSum(tmp2) +
        divideAndConquerSum(tmp3)
}
