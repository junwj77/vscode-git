arr=[]
for (var i = 0; i < 5; i++) {
    arr[i] = (function(i) {
        return function() {
            return i;
        };
    })(i);
}

for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}