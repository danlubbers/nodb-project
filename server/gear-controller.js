let sportGear = [
    {id: 1, text: 'Climbing Shoes'},
    {id: 2, text: 'Chalk Bag'},
    {id: 3, text: 'Harness'},
    {id: 4, text: 'Rope'},
    {id: 5, text: 'Nalgene'},
    {id: 6, text: 'Carabiner'},
    {id: 7, text: 'Grigri'}
];

let packedGear = [];

let currentGear = sportGear.slice()
let id = sportGear.length++;
console.log(id);

module.exports = {
    read: (req, res) => {
        res.status(200).send([currentGear]);
        
    },

    create: (req, res) => {
        let newEquip = {
            id: id,
            text: req.body.newItem.text
        };
        currentGear.push(newEquip)
        id++;
        // console.log('sport gear', sportGear);
        res.status(200).send(currentGear);
    },

    update: (req, res) => {
        res.status(200).send([currentGear]);
    },


    delete: (req, res) => {
        const deleteId = +req.params.id;
        // console.log('backendid', deleteId)
        const filtered = currentGear.filter(item => {
            console.log( item.id, +deleteId)
            return item.id !== +deleteId})
        //↓ Save your new array to the main one. ↓
        currentGear = filtered
        //↓ Just send the main array ↓
        res.status(200).send(currentGear);
        }
    }