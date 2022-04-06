function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return function namedFunction(){

    };
}

function returnsAnAnonymousFunction(){
    return function(){

    };
}