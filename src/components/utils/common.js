export const sumBy = (arr) => arr.reduce((prev, current) => prev + current, 0);



export const randomProducts = (array, lengthArray, id) => {
    const filteredArray = array.filter(item => item.id !== id);
    const shuffledArray = filteredArray.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, lengthArray);

}