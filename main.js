function doGet(e){
  var p = e.parameter;
  if(!(p.lang4 === undefined)){
    var translatedText1 = LanguageApp.translate(p.text,p.source,p.lang1,{contentType: 'text'});
    var translatedText2 = LanguageApp.translate(p.text,p.source,p.lang2,{contentType: 'text'});
    var translatedText3 = LanguageApp.translate(p.text,p.source,p.lang3,{contentType: 'text'});
    var translatedText4 = LanguageApp.translate(p.text,p.source,p.lang4,{contentType: 'text'});
    if (translatedText1.length + translatedText2.length + translatedText3.length + translatedText4.length > 2000){
      var translatedText = `Flagflag1 : ${translatedText1} \nFlagflag2 : ${translatedText2} 7264-split\nFlagflag3 : ${translatedText3} \nFlagflag4 : ${translatedText4}`
    }else{
      var translatedText = `Flagflag1 : ${translatedText1} \nFlagflag2 : ${translatedText2} \nFlagflag3 : ${translatedText3} \nFlagflag4 : ${translatedText4}`
    }
  }else if(!(p.lang3 === undefined)){
    var translatedText1 = LanguageApp.translate(p.text,p.source,p.lang1,{contentType: 'text'});
    var translatedText2 = LanguageApp.translate(p.text,p.source,p.lang2,{contentType: 'text'});
    var translatedText3 = LanguageApp.translate(p.text,p.source,p.lang3,{contentType: 'text'});
    if (translatedText1.length + translatedText2.length + translatedText3.length > 2000){
      var translatedText = `Flagflag1 : ${translatedText1} \nFlagflag2 : ${translatedText2} 7264-split\nFlagflag3 : ${translatedText3}`
    }else{
      var translatedText = `Flagflag1 : ${translatedText1} \nFlagflag2 : ${translatedText2} \nFlagflag3 : ${translatedText3}`
    }
  }else if(!(p.lang2 === undefined)){
    var translatedText1 = LanguageApp.translate(p.text,p.source,p.lang1,{contentType: 'text'});
    var translatedText2 = LanguageApp.translate(p.text,p.source,p.lang2,{contentType: 'text'});
    if (translatedText1.length + translatedText2.length > 2000){
      var translatedText = `Flagflag1 : ${translatedText1} 7264-split\nFlagflag2 : ${translatedText2}`
    }else{
      var translatedText = `Flagflag1 : ${translatedText1} \nFlagflag2 : ${translatedText2}`
    }
  }else if(!(p.lang1 === undefined)){
    var translatedText1 = LanguageApp.translate(p.text,p.source,p.lang1,{contentType: 'text'});
    var translatedText = `Flagflag1 : ${translatedText1}`
  }else if(!(p.target === undefined)){
    var translatedText1 = LanguageApp.translate(p.text,p.source,p.target,{contentType: 'text'});
  }else{
    return ContentService.createTextOutput("error");
  }
  return ContentService.createTextOutput(translatedText);
}
