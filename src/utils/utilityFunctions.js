export const removeDuplicates = (array) => {
    const seen = new Set();

    return array.filter((item) => {
        if (!seen.has(item.id)) {
            seen.add(item.id);
            return true;
        }
        return false;
    })
}

export const shuffleArray = (array) => {
    for  (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const getType = (item) => {
    return item.original_title ? "movie" : "tv";
}