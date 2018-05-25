module.exports = function(arr, chunkSize=2) {
    return arr
        .reduce((acc, curr, ii, origArr) => {
            return !(ii % chunkSize) ? acc.concat([origArr.slice(ii, ii + chunkSize)]) : acc;
        }, []);
}