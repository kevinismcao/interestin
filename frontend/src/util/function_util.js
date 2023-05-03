export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const abbreviate = (string, max_char) => {
    const splitString = string.split("")
    if (splitString.length > max_char) {
        return splitString.splice(0, max_char).join("").concat("...")
    }
    else {
        return string
    }
}