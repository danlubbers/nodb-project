let sportGear = [
    {id: 1, text: 'Climbing Shoes'},
    {id: 2, text: 'Chalk Bag'},
    {id: 3, text: 'Harness'},
    {id: 4, text: 'Rope'},
    {id: 5, text: 'Nalgene'},
    {id: 6, text: 'Caribiner'},
    {id: 7, text: 'Grigri'}
];

let currentGear = sportGear.slice()
let id = sportGear.length;
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
        sportGear.push(newEquip)
        id++
        res.status(200).send(sportGear);
    },

    update: (req, res) => {
        res.status(200).send([sportGear]);
    },


    delete: (req, res) => {
        const deleteId = ++req.params.id;
        const filtered = currentGear.filter(item => {
            console.log( item.id, +deleteId)
            return item.id !== +deleteId})
        //↓ Save your new array to the main one. ↓
        currentGear = filtered
        //↓ Just send the main array ↓
        res.status(200).send(currentGear);
        }
    }