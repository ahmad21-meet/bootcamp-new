function findSmallest(a, b, c){
    if (a > b > c){
    return b; // should return b instead c
    } else if (a > c > b) {
    return  a;
    } else {
    return c; // should return c instead of b 
    }
    }
    findSmallest(52,66, 2);
