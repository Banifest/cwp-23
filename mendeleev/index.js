const elements = {
    'H': {
        name: 'hydrogen',
        number: 1,
        weight: 1.0079,
    },
    'HE': {
        name: 'Helium',
        number: 2,
        weight: 4.0026,
    },
    'AR': {
        name: 'Argon',
        number: 18,
        weight: 39.948
    },
    'K': {
        name: 'Potassium',
        number: 19,
        weight: 39.098
    }
};

module.exports = (element) => {
    if (element)
    {
        return elements[element.toUpperCase()];
    }
};