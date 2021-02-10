const Test = require("../models/test");

exports.save = async (req, res) => {
    try {
        const { data } = req.body;
        const test = await new Test({ data: data, name: 'canvas'}).save();
        console.log(test)
        res.json(test);

    } catch (err) {
        // console.log(err);
        res.status(400).send("Test failed");
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Test.findOneAndDelete({ name: 'canvas' });
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Test delete failed");
    }
};

exports.load = async (req, res) => {
    let test = await Test.findOne({ name: 'canvas' }).exec();
    console.log(test)
    res.json(test);
};
