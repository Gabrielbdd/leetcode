function rotate(arr, k) {
    const length = arr.length
    for (const [index, value] of arr.entries()) {
        const nextIndex = (index + k) % length
        const prevIndex = index - (k * Math.floor(index / k))
        console.log(index, [prevIndex, arr[prevIndex]], [nextIndex, arr[nextIndex]])
        arr[prevIndex] ^= arr[nextIndex]
        arr[nextIndex] ^= arr[prevIndex]
        arr[prevIndex] ^= arr[nextIndex]
    }
}
