"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WilderSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    city: String,
    skills: [{ title: String, votes: Number }],
});
const wilderModel = (0, mongoose_1.model)('wilder', WilderSchema);
exports.default = wilderModel;
//# sourceMappingURL=Wilder.js.map