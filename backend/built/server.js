"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
//connect db
mongoose_1.default.connect('mongodb://127.0.0.1:27017/wildersDB', {
    autoIndex: true,
})
    .then(() => console.log('connected to db'))
    .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});
// Init Middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Define Routes
// app.use('/api/wilders', wilderRoutes)
//handle error not found
app.use((req, res) => {
    res.status(404).json({ error: 'not found ' });
});
//run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//# sourceMappingURL=server.js.map