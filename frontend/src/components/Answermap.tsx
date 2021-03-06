export type typeAnswerItems ={
    id: number;
    Answer: {
        1: string,
        2: string,
        3: string,
    } 
    Answercomment: string,
  }[]
  
  export const AnswerItems: typeAnswerItems = [
      {
        id: 0,
        Answer: {
            1: "あなたはもっとたくさんの野菜や果物を摂取したほうが良い可能性があります…",
            2: "あなたはもう少し野菜や果物を摂取したほうが良いかもしれません",
            3: "その調子で野菜を食べましょう!"
        },
        Answercomment: "野菜や果物を摂取することによりたくさんの食物繊維することができます。食物繊維は長期間の摂取量により死亡率が変化することが知られております。他にも野菜や果物には多くの栄養が含まれているので健康効果が期待できます",
      },  
      {
        id: 1,
        Answer: {
            1: "もう少し加工食品の摂取量をコントロールしたほうが良いかもしれません…",
            2: "なにごともほどほどが一番、ですが加工食品が体に良くない可能性があることは頭に入れておいても良いかもしれません",
            3: "あなたは健康の鏡のような人ですね、素晴らしい!"
        }, 
        Answercomment: "多くのの加工食品にはトランス脂肪酸が含まれており、取りすぎは悪影響があることがしられております。この脂肪酸は海外ではそもそも禁止されている国、また含有量が規制されている国が多くあり、摂取量には十分注意しましょう。また体重の増加は加工食品による割合がでかいという説もあるので、自制できるよう心掛けたほうが良い可能性があります。",
      },
      {
        id: 2,
        Answer: {
            1: "動かなさすぎです、運動することを習慣づけましょう",
            2: "もう少し運動することを意識してみましょう",
            3: "良いですね!その調子で体を動かしましょう"
        },
        Answercomment: "運動が健康効果があることは多くの人に知られておりますが、逆に運動をしなければ多くのデメリットが存在します。最近では運動不足は死亡率上昇や、筋力低下による男性ホルモンの低下など様々なデメリットがあることが常識となってきております。",
        
        
      },
      {
        id: 3,
        Answer: {
            1: "睡眠時間を確保できるようにしましょう",
            2: "7時間ほど睡眠を摂取していれば健康です!",
            3: "素晴らしい睡眠です!睡眠時間は寝すぎでもあまりよくなく大体7時間くらいが良いといわれています"
        }, 
        Answercomment: "睡眠不足だと認知症になる、というのは最近では当たり前になってきました。ただ、個人により適切な睡眠時間が違う可能性があります。",
        
        
      },
      {
        id: 4,
        Answer: {
            1: "肥満は健康によくありませんのでダイエットを試みましょう",
            2: "なにごともほどほどが一番です。必要だと感じればダイエットをしてみても良いかもしれません",
            3: "意識してコントロールしているのでしょうか？良いですね!"
        }, 
        Answercomment: "肥満になることによって多くの病が発症する可能性があり、死亡率の上昇につながります。はっきりと病にならない場合でも、体内は不健康になってしまうので、適切な重量を維持しましょう",
        
        
      },
      {
        id: 5,
        Answer: {
            1: "お酒の飲みすぎはあなたの健康に被害をもたらします、飲みすぎはやめましょう",
            2: "お酒の交流などは大切です!ですが少量であれば問題ありませんが1gでも悪影響がある可能性があることは頭に入れておきべきでしょう",
            3: "飲まないように心がけているのでしょか？是非継続してください!"
        }, 
        Answercomment: "アルコールは少量では健康に良いといわれておりましたが、最近では1gでも健康に影響を及ぼすという説も見かけるようになりましたね。当然、飲みすぎは病の原因になるので、飲酒量には注意しましょう",
        
        
      },
      {
        id: 6,
        Answer: {
            1: "まずは本数を減らすところから始められてはいかがでしょうか？",
            2: "タバコ以外のストレス対処方法をみつけましょう",
            3: "たばこは受動喫煙にも影響があります。可能であれば避けましょう"
        }, 
        Answercomment: "タバコが体に悪いのは常識ですね。肺がんになったりする可能性が高くなってしまうので、喫煙、受動喫煙ともに吸わないように心がけましょう",
        
        
      },
    ];