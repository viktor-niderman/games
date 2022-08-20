var win = ""
var t;
function circle(){
    alert(app.all)
}
function check(w){
    eval('px = '+w);     // x = ""
    if(px ==""){
        px = "X";
        eval(w+'= px');
        setTimeout(() => check_win('X'), 1);
        app.all+=2;
        if(app.all>=9){
            setTimeout(() => no_win('X'), 1);
            
        } else {
            while(1){
                if(app.one=="◯" && app.two=="◯" && app.three==""){
                    app.three = '◯';
                    break;
                }
                else if(app.three=="◯" && app.two=="◯" && app.one==""){
                    app.one = '◯';
                    break;
                }
                else if(app.one=="◯" && app.three=="◯" && app.two==""){
                    app.two = '◯';
                    break;
                }
                else if(app.four=="◯" && app.five=="◯" && app.six==""){
                    app.six = '◯';
                    break;
                }
                else if(app.six=="◯" && app.five=="◯" && app.four==""){
                    app.four = '◯';
                    break;
                }
                else if(app.four=="◯" && app.six=="◯" && app.five==""){
                    app.five = '◯';
                    break;
                }
                else if(app.seven=="◯" && app.eight=="◯" && app.nine==""){
                    app.nine = '◯';
                    break;
                }
                else if(app.eight=="◯" && app.nine=="◯" && app.seven==""){
                    app.seven = '◯';
                    break;
                }
                else if(app.seven=="◯" && app.nine=="◯" && app.eight==""){
                    app.eight = '◯';
                    break;
                }
                else if(app.one=="◯" && app.seven=="◯" && app.four==""){
                    app.four = '◯';
                    break;
                }
                else if(app.one=="◯" && app.four=="◯" && app.seven==""){
                    app.seven = '◯';
                    break;
                }
                else if(app.four=="◯" && app.seven=="◯" && app.one==""){
                    app.one = '◯';
                    break;
                }
                else if(app.two=="◯" && app.five=="◯" && app.eight==""){
                    app.eight = '◯';
                    break;
                }
                else if(app.five=="◯" && app.eight=="◯" && app.two==""){
                    app.two = '◯';
                    break;
                }
                else if(app.two=="◯" && app.eight=="◯" && app.five==""){
                    app.five = '◯';
                    break;
                }
                else if(app.three=="◯" && app.six=="◯" && app.nine==""){
                    app.nine = '◯';
                    break;
                }
                else if(app.six=="◯" && app.nine=="◯" && app.three==""){
                    app.three = '◯';
                    break;
                }
                else if(app.three=="◯" && app.nine=="◯" && app.six==""){
                    app.six = '◯';
                    break;
                }
                else if(app.one=="◯" && app.five=="◯" && app.nine==""){
                    app.nine = '◯';
                    break;
                }
                else if(app.five=="◯" && app.nine=="◯" && app.one==""){
                    app.one = '◯';
                    break;
                }
                else if(app.one=="◯" && app.nine=="◯" && app.five==""){
                    app.five = '◯';
                    break;
                }
                else if(app.three=="◯" && app.seven=="◯" && app.five==""){
                    app.five = '◯';
                    break;
                }
                else if(app.three=="◯" && app.five=="◯" && app.seven==""){
                    app.seven = '◯';
                    break;
                }
                else if(app.seven=="◯" && app.five=="◯" && app.three==""){
                    app.three = '◯';
                    break;
                }



                else if(app.one=="X" && app.two=="X" && app.three==""){
                    app.three = '◯';
                    break;
                }
                else if(app.three=="X" && app.two=="X" && app.one==""){
                    app.one = '◯';
                    break;
                }
                else if(app.one=="X" && app.three=="X" && app.two==""){
                    app.two = '◯';
                    break;
                }
                else if(app.four=="X" && app.five=="X" && app.six==""){
                    app.six = '◯';
                    break;
                }
                else if(app.six=="X" && app.five=="X" && app.four==""){
                    app.four = '◯';
                    break;
                }
                else if(app.four=="X" && app.six=="X" && app.five==""){
                    app.five = '◯';
                    break;
                }
                else if(app.seven=="X" && app.eight=="X" && app.nine==""){
                    app.nine = '◯';
                    break;
                }
                else if(app.eight=="X" && app.nine=="X" && app.seven==""){
                    app.seven = '◯';
                    break;
                }
                else if(app.seven=="X" && app.nine=="X" && app.eight==""){
                    app.eight = '◯';
                    break;
                }
                else if(app.one=="X" && app.seven=="X" && app.four==""){
                    app.four = '◯';
                    break;
                }
                else if(app.one=="X" && app.four=="X" && app.seven==""){
                    app.seven = '◯';
                    break;
                }
                else if(app.four=="X" && app.seven=="X" && app.one==""){
                    app.one = '◯';
                    break;
                }
                else if(app.two=="X" && app.five=="X" && app.eight==""){
                    app.eight = '◯';
                    break;
                }
                else if(app.five=="X" && app.eight=="X" && app.two==""){
                    app.two = '◯';
                    break;
                }
                else if(app.two=="X" && app.eight=="X" && app.five==""){
                    app.five = '◯';
                    break;
                }
                else if(app.three=="X" && app.six=="X" && app.nine==""){
                    app.nine = '◯';
                    break;
                }
                else if(app.six=="X" && app.nine=="X" && app.three==""){
                    app.three = '◯';
                    break;
                }
                else if(app.three=="X" && app.nine=="X" && app.six==""){
                    app.six = '◯';
                    break;
                }
                else if(app.one=="X" && app.five=="X" && app.nine==""){
                    app.nine = '◯';
                    break;
                }
                else if(app.five=="X" && app.nine=="X" && app.one==""){
                    app.one = '◯';
                    break;
                }
                else if(app.one=="X" && app.nine=="X" && app.five==""){
                    app.five = '◯';
                    break;
                }
                else if(app.three=="X" && app.seven=="X" && app.five==""){
                    app.five = '◯';
                    break;
                }
                else if(app.three=="X" && app.five=="X" && app.seven==""){
                    app.seven = '◯';
                    break;
                }
                else if(app.seven=="X" && app.five=="X" && app.three==""){
                    app.three = '◯';
                    break;
                }
                else{
                    q = Math.round(Math.random()*10);
                    if(q==0 || q==10) continue;
                    if (q==1){
                        if (app.one!="") {continue}
                        else {
                            app.one = '◯';
                            break;
                        }
                    }
                    if (q==2){
                        if (app.two!="") {continue}
                        else {
                            app.two = '◯';
                            break;
                        }
                    }
                    if (q==3){
                        if (app.three!="") {continue}
                        else {
                            app.three = '◯';
                            break;
                        }
                    }
                    if (q==4){
                        if (app.four!="") {continue}
                        else {
                            app.four = '◯';
                            break;
                        }
                    }
                    if (q==5){
                        if (app.five!="") {continue}
                        else {
                            app.five = '◯';
                            break;
                        }
                    }
                    if (q==6){
                        if (app.six!="") {continue}
                        else {
                            app.six = '◯';
                            break;
                        }
                    }
                    if (q==7){
                        if (app.seven!="") {continue}
                        else {
                            app.seven = '◯';
                            break;
                        }
                    }
                    if (q==8){
                        if (app.eight!="") {continue}
                        else {
                            app.eight = '◯';
                            break;
                        }
                    }
                    if (q==9){
                        if (app.nine!="") {continue}
                        else {
                            app.nine = '◯';
                            break;
                        }
                    }
                }

                
                
            }
            t = setTimeout(() => check_win('◯'), 5);
            
        }


        return 1;
    }
    return 0;
}

function no_win(){
    if (win=="") {
        alert('Ничья')
        location.reload(true)
    } 
}

function check_win(c){
    
    if (app.one == c && app.two == c && app.three == c ||
        app.four == c && app.five == c && app.six == c ||
        app.seven == c && app.eight == c && app.nine == c||
        app.one == c && app.five == c && app.nine == c ||
        app.three == c && app.five == c && app.seven == c ||
        app.one == c && app.four == c && app.seven == c ||
        app.two == c && app.five == c && app.eight == c ||
        app.three == c && app.six == c && app.nine == c
        && win=="") {
        alert ('Победил '+c)
        win = c;
        clearTimeout(t);
        location.reload(true)
    }
}

var app = new Vue({
    el: "#app",
    data: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        all: 0
    },
    methods: {
        one_m(){
            if (check('app.one')) {}
        },
        two_m(){
            if (check('app.two')) {}
        },
        three_m(){
            if (check('app.three')) {}
        },
        four_m(){
            if (check('app.four')) {}
        },
        five_m(){
            if (check('app.five')) {}
        },
        six_m(){
            if (check('app.six')) {}
        },
        seven_m(){
            if (check('app.seven')) {}
        },
        eight_m(){
            if (check('app.eight')) {}
        },
        nine_m(){
            if (check('app.nine')) {}
        } 
    },
    beforeMount() {
        //
    },
    
    
})
//❤
//◯
//X