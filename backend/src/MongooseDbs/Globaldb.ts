import mongoose from 'mongoose';

 main().catch(err => console.log(err));


 async function main() {
   await mongoose.connect('');
 }

 interface Questions {
  questioncount: Number,  
  datetime: Number, 
  one: Number,
  two: Number, 
  three: Number, 
  four: Number, 
  five: Number, 
  six: Number, 
  seven: Number, 
  eight: Number
 }
 
 const DateTimeSchema = new mongoose.Schema<Questions>({datetime: Number});
 const QuestionCountSchema = new mongoose.Schema<Questions>({questioncount: Number});
 const OneSchema = new mongoose.Schema<Questions>({one: Number});
 const TwoSchema = new mongoose.Schema<Questions>({two: Number});
 const ThreeSchema = new mongoose.Schema<Questions>({three: Number});
 const FourSchema = new mongoose.Schema<Questions>({four: Number});
 const FiveSchema = new mongoose.Schema<Questions>({five: Number});
 const SixSchema = new mongoose.Schema<Questions>({six: Number});
 const SevenSchema = new mongoose.Schema<Questions>({seven: Number});
 const EightSchema = new mongoose.Schema<Questions>({eight: Number});

 export const DateTime = mongoose.model<Questions>('DateTime', DateTimeSchema);
 export const QuestionCount = mongoose.model<Questions>(`QuestionCount`, QuestionCountSchema);
 export const One = mongoose.model<Questions>('One', OneSchema);
 export const Two = mongoose.model<Questions>('Two', TwoSchema);
 export const Three = mongoose.model<Questions>('Three', ThreeSchema);
 export const Four = mongoose.model<Questions>('Four', FourSchema);
 export const Five = mongoose.model<Questions>('Five', FiveSchema);
 export const Six = mongoose.model<Questions>('Six', SixSchema);
 export const Seven = mongoose.model<Questions>('Seven', SevenSchema);
 export const Eight = mongoose.model<Questions>('Eight', EightSchema);
 
 