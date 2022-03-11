"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Globaldb_1 = require("./MongooseDbs/Globaldb");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "..", "frontend", "build")));
app.use(cors_1.default({
    origin: ['https://salty-dawn-98488.herokuapp.com/'],
    credentials: true,
    optionsSuccessStatus: 200
}));
const date = new Date();
const currentTime = date.getDate();
app.get('/api', (req, res) => {
    findData();
    async function findData() {
        let getQuestionJson = [];
        try {
            for (let i = 1; i < 4; i++) {
                const number = [{ one: i }, { two: i }, { three: i }, { four: i }, { five: i }, { six: i }, { seven: i }, { eight: i }];
                let one = await Globaldb_1.One.count(number[0]);
                let two = await Globaldb_1.Two.count(number[1]);
                let three = await Globaldb_1.Three.count(number[2]);
                let four = await Globaldb_1.Four.count(number[3]);
                let five = await Globaldb_1.Five.count(number[4]);
                let six = await Globaldb_1.Six.count(number[5]);
                let seven = await Globaldb_1.Seven.count(number[6]);
                let eight = await Globaldb_1.Eight.count(number[7]);
                getQuestionJson.push(one, two, three, four, five, six, seven, eight);
            }
            res.json(getQuestionJson);
        }
        catch (err) {
            throw err;
        }
    }
});
app.post('/api', (req, res) => {
    DateCount().catch(err => console.log(err));
    async function DateCount() {
        const DateArray = await Globaldb_1.DateTime.find();
        if (currentTime === DateArray[0].datetime) {
            const Count = await Globaldb_1.QuestionCount.find();
            const CountPlus = Count[0].questioncount + 1;
            await Globaldb_1.QuestionCount.findOneAndUpdate({ $set: { questioncount: CountPlus } }).lean();
        }
        else {
            const QuestionCountdoc = new Globaldb_1.QuestionCount({ questioncount: 1 });
            await QuestionCountdoc.save();
            await Globaldb_1.DateTime.findOneAndUpdate({ $set: { datetime: currentTime } }).lean();
        }
    }
    CountStopOrCreate().catch(err => console.log(err));
    async function CountStopOrCreate() {
        const Count = await Globaldb_1.QuestionCount.find();
        if (100 >= Count[0].questioncount) {
            const Onedoc = new Globaldb_1.One({ one: JSON.parse(req.body.QuestionJson.one) });
            const Twodoc = new Globaldb_1.Two({ two: JSON.parse(req.body.QuestionJson.two) });
            const Threedoc = new Globaldb_1.Three({ three: JSON.parse(req.body.QuestionJson.three) });
            const Fourdoc = new Globaldb_1.Four({ four: JSON.parse(req.body.QuestionJson.four) });
            const Fivedoc = new Globaldb_1.Five({ five: JSON.parse(req.body.QuestionJson.five) });
            const Sixdoc = new Globaldb_1.Six({ six: JSON.parse(req.body.QuestionJson.six) });
            const Sevendoc = new Globaldb_1.Seven({ seven: JSON.parse(req.body.QuestionJson.seven) });
            const Eightdoc = new Globaldb_1.Eight({ eight: JSON.parse(req.body.QuestionJson.eight) });
            await Onedoc.save();
            await Twodoc.save();
            await Threedoc.save();
            await Fourdoc.save();
            await Fivedoc.save();
            await Sixdoc.save();
            await Sevendoc.save();
            await Eightdoc.save();
        }
        res.send("Received POST Data!");
    }
});
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "frontend", "build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
