export const getDuration = (arr) => {
    return arr.reduce((acc, item) => (acc += item.duration), 0)
};
