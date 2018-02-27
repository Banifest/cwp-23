const getElement = require('mendeleev');

module.exports = (element) => {

    element = getElement(element);
    return `${element.number}. ${element.name} / ${element.weight}`;
};