let sportGear = [
        {id: 1, text: 'Climbing Shoes', img: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/9/7/971_yel_miura_1_7.jpg'},
        {id: 2, text: 'Chalk Bag', img: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/3/9/39c_bk_laspochalkbag_black_1.jpg'},
        {id: 3, text: 'Harness', img: 'https://www.petzl.com/sfc/servlet.shepherd/version/download/068w0000002ELzAAAW'}
    ];

let id = 4;


module.exports = {
    read: (req, res) => {
        res.status(200).send([sportGear]);
        
    },

    create: (req, res) => {
        let newEquip = {
            id: id,
            text: req.body.newItem.text
        };
        sportGear.push(newEquip)
        id++
        res.status(200).send(sportGear);
    },

    update: (req, res) => {
        res.status(200).send([sportGear]);
    },

    delete: (req, res) => {
        res.status(200).send([sportGear]);
    }
}