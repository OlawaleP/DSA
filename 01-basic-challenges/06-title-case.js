function titleCase(str) {
    const words = str.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[1][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

module.exports = titleCase;