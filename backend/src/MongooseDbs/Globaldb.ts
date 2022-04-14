import mongoose from 'mongoose';

 main().catch(err => console.log(err));


 async function main() {
   await mongoose.connect('');
 }

 interface Questions {
  questioncount: Number,  
  datetime: Number, 
  onevegetable: Number,
  twoprocessedfood: Number, 
  threemotion: Number, 
  fourSleep: Number, 
  fiveobesity: Number, 
  sixalcohol: Number, 
  seventobacco: Number, 
  eightcondition: Number
 }
 
 const DateTimeSchema = new mongoose.Schema<Questions>({datetime: Number});
 const QuestionCountSchema = new mongoose.Schema<Questions>({questioncount: Number});
 const OnevegetableSchema = new mongoose.Schema<Questions>({onevegetable: Number});
 const TwoprocessedfoodSchema = new mongoose.Schema<Questions>({twoprocessedfood: Number});
 const ThreemotionSchema = new mongoose.Schema<Questions>({threemotion: Number});
 const FourSleepSchema = new mongoose.Schema<Questions>({fourSleep: Number});
 const FiveobesitySchema = new mongoose.Schema<Questions>({fiveobesity: Number});
 const SxalcoholSchema = new mongoose.Schema<Questions>({sixalcohol: Number});
 const SeventobaccoSchema = new mongoose.Schema<Questions>({seventobacco: Number});
 const EightconditionSchema = new mongoose.Schema<Questions>({eightcondition: Number});

 export const DateTime = mongoose.model<Questions>('DateTime', DateTimeSchema);
 export const QuestionCount = mongoose.model<Questions>(`QuestionCount`, QuestionCountSchema);
 export const OneVegetable = mongoose.model<Questions>('One', OnevegetableSchema);
 export const TwoProcessedFood = mongoose.model<Questions>('Two', TwoprocessedfoodSchema);
 export const ThreeMotion = mongoose.model<Questions>('Three', ThreemotionSchema);
 export const FourSleep = mongoose.model<Questions>('Four', FourSleepSchema);
 export const FiveObesity = mongoose.model<Questions>('Five', FiveobesitySchema);
 export const SixAlcohol = mongoose.model<Questions>('Six', SxalcoholSchema);
 export const SevenTobacco = mongoose.model<Questions>('Seven', SeventobaccoSchema);
 export const EightCondition = mongoose.model<Questions>('Eight', EightconditionSchema);
 