var patt = /(([a-z]+)(\d+))/gi;

var str = "Hello ..word1.. World ..word22.. bye!";

console.log(patt.source.toString(), patt.source.toString().split(/(?:(?!\\)(?:\(|\))+)/) );
