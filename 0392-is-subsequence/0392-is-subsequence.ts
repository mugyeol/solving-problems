function isSubsequence(s: string, t: string): boolean {
    let p1 = s.length-1, p2 = t.length-1
    
    while(p1>=0 && p2>=0){
        if(s[p1] !== t[p2]){
            p2--
        }else if(s[p1]===t[p2]) {
            p1--
            p2--
            
        }
    }
    if(p1>=0 && p2<0){
        return false
    }
    return true
};