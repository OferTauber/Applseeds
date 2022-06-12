const text = {
  upper(text) {
    return text.toUpperCase();
  },
  lower(text) {
    return text.toLowerCase();
  },
  firstOnly(text) {
    const arr = text.split('');
    const first = arr.shift();
    const lowArr = arr.map((char) => this.lower(char));
    return this.upper(first) + lowArr.join('');
  },
};

module.exports = text;
