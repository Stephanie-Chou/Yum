  var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();


// actally means
 var text = 'outside';
function logIt(){
    var text;
    console.log(text);
    text = 'inside';
};
logIt();