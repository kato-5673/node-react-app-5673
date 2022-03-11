import express from 'express'; 
import {One,Two,Three,Four,Five,Six,Seven,Eight,QuestionCount,DateTime} from './MongooseDbs/Globaldb';
import path from 'path';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "build")));
app.use(cors({
  origin: ['http://localhost:8080/'],
  credentials: true, 
  optionsSuccessStatus: 200 
}))

const date = new Date();  
const currentTime:number = date.getDate();

app.get('/api', (req, res) => {
  findData()
  async function findData(){
    let getQuestionJson:number[] = []
    try { 
      for(let i=1; i<4; i++){
        const number = [{one:i}, {two:i}, {three:i}, {four:i}, {five:i}, {six:i}, {seven:i}, {eight:i}]   
        let one = await One.count(number[0]);
        let two = await Two.count(number[1]);
        let three = await Three.count(number[2]);
        let four = await Four.count(number[3]);
        let five = await Five.count(number[4]);
        let six = await Six.count(number[5]);
        let seven = await Seven.count(number[6]);
        let eight = await Eight.count(number[7]);
        getQuestionJson.push(one,two,three,four,five,six,seven,eight);
        } 
        res.json(getQuestionJson)
       } catch(err) {
        throw err;
     }
  } 
})

app.post('/api', (req, res) => { 
  DateCount().catch(err => console.log(err));
  async function DateCount(){
    const DateArray = await DateTime.find() 
    if(currentTime === DateArray[0].datetime){
      const Count = await QuestionCount.find()
      const CountPlus = Count[0].questioncount as number + 1 
      await QuestionCount.findOneAndUpdate({$set: {questioncount: CountPlus}} ).lean()
     } else {
      const QuestionCountdoc = new QuestionCount({questioncount: 1}); 
      await QuestionCountdoc.save();
      await DateTime.findOneAndUpdate({$set: {datetime: currentTime}} ).lean()
     }
   }

  CountStopOrCreate().catch(err => console.log(err));
  async function CountStopOrCreate(){ 
   const Count = await QuestionCount.find()  
   if(100 >= Count[0].questioncount){
    const Onedoc = new One({one: JSON.parse(req.body.QuestionJson.one)});
    const Twodoc = new Two({two: JSON.parse(req.body.QuestionJson.two)});
    const Threedoc = new Three({three: JSON.parse(req.body.QuestionJson.three)});
    const Fourdoc = new Four({four: JSON.parse(req.body.QuestionJson.four)});
    const Fivedoc = new Five({five: JSON.parse(req.body.QuestionJson.five)});
    const Sixdoc = new Six({six: JSON.parse(req.body.QuestionJson.six)});
    const Sevendoc = new Seven({seven: JSON.parse(req.body.QuestionJson.seven)});
    const Eightdoc = new Eight({eight: JSON.parse(req.body.QuestionJson.eight)});

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
  res.sendFile(path.join(__dirname, "..", "..", "frontend", "build", "index.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

