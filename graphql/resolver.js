module.exports = {
    data() {
        return {
            users: [{
                name: 'Kat',
                mail: 'ket@gmail.com',
                purchases: [{
                    itemName: 'appl',
                    price: 3,
                    count: 2
                }],
            }, {
                name: 'Devid',
                mail: 'devid@gmail.com',
                purchases: [{
                    itemName: 'orange',
                    price: 13,
                    count: 9
                }],
            }, {
                name: 'Elizabet',
                mail: 'elizabet@gmail.com',
                purchases: [{
                    itemName: 'bananas',
                    price: 11,
                    count: 7
                }, {
                    itemName: 'melon',
                    price: 4,
                    count: 1
                }, {
                    itemName: 'ananas',
                    price: 2,
                    count: 11
                }],
            }],
            company: {
                companyName: 'DASC',
                phone: '+1 320 329 230'
            }
        }
    }
};