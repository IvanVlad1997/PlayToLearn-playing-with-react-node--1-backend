const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
    {
        data: String,
        name: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Test", testSchema);
