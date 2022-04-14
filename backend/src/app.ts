import express from 'express'; 
import {
   OneVegetable,
   TwoProcessedFood, 
   ThreeMotion,
   FourSleep, 
   FiveObesity,
   SixAlcohol,
   SevenTobacco,
   EightCondition,
   QuestionCount,
   DateTime
  } from './MongooseDbs/Globaldb';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "build")));
app.use(cors({
  origin: ['http://localhost:8080/'],
  credentials: true, 
  optionsSuccessStatus: 200 
}));

const date = new Date();  
const currentTime:number = date.getDate();

app.get('/api', (req, res) => {
  findData();
  async function findData(){
    let getQuestionJson:number[] = [];
    try { 
      for(let i=1; i<4; i++){
        const number = [{one:i}, {two:i}, {three:i}, {four:i}, {five:i}, {six:i}, {seven:i}, {eight:i}];  
        let one = await OneVegetable.count(number[0]);
        let two = await TwoProcessedFood.count(number[1]);
        let three = await ThreeMotion.count(number[2]);
        let four = await FourSleep.count(number[3]);
        let five = await FiveObesity.count(number[4]);
        let six = await SixAlcohol.count(number[5]);
        let seven = await SevenTobacco.count(number[6]);
        let eight = await EightCondition.count(number[7]);
        getQuestionJson.push(one,two,three,four,five,six,seven,eight);
        } 
        res.json(getQuestionJson);
       } catch(err) {
        throw err;
     }
  } 
});

app.post('/api', (req, res) => { 
  DateCount().catch(err => console.log(err));
  async function DateCount(){
    const DateArray = await DateTime.find();
    if(currentTime === DateArray[0].datetime){
      const Count = await QuestionCount.find();
      const CountPlus = Count[0].questioncount as number + 1;
      await QuestionCount.findOneAndUpdate({$set: {questioncount: CountPlus}} ).lean();
     } else {
      const QuestionCountdoc = new QuestionCount({questioncount: 1}); 
      await QuestionCountdoc.save();
      await DateTime.findOneAndUpdate({$set: {datetime: currentTime}} ).lean();
     }
   }

  CountStopOrCreate().catch(err => console.log(err));
  async function CountStopOrCreate(){ 
   const Count = await QuestionCount.find();
   if(100 >= Count[0].questioncount){
    const OneVegetabledoc = new OneVegetable({one: JSON.parse(req.body.QuestionJson.one)});
    const TwoProcessedFooddoc = new TwoProcessedFood({two: JSON.parse(req.body.QuestionJson.two)});
    const ThreeMotiondoc = new ThreeMotion({three: JSON.parse(req.body.QuestionJson.three)});
    const FourSleepdoc = new FourSleep({four: JSON.parse(req.body.QuestionJson.four)});
    const FiveObesitydoc = new FiveObesity({five: JSON.parse(req.body.QuestionJson.five)});
    const SixAlcoholdoc = new SixAlcohol({six: JSON.parse(req.body.QuestionJson.six)});
    const SevenTobaccodoc = new SevenTobacco({seven: JSON.parse(req.body.QuestionJson.seven)});
    const EightConditiondoc = new EightCondition({eight: JSON.parse(req.body.QuestionJson.eight)});

    await OneVegetabledoc.save();
    await TwoProcessedFooddoc.save();
    await ThreeMotiondoc.save();
    await FourSleepdoc.save();
    await FiveObesitydoc.save();
    await SixAlcoholdoc.save();
    await SevenTobaccodoc.save();
    await EightConditiondoc.save();
  }
  res.send("Received POST Data!");
 }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "frontend", "build", "index.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

/*
  "OneVegetable", 
     "TwoProcessedFood", 
     "ThreeMotion", 
     "FourSleep", 
     "FiveObesity ", 
     "SixAlcohol", 
     "SevenTobacco",
     "EightCondition"
*/