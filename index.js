//Imports
import { _lenc , _t , _half, _print, _rnum , _dbl, _add , _sub, _mult , _div , _rect , _square , tri , _calctri, days, months, year, lyear, _arrayD, _sethtml , 
_setcolor , _setBackgroundColor , _setleftMargin, _setbottomMargin , _setrightMargin , _settopMargin, _a } from './JPilLib/lib.js'


//Library test
var a = 'JavascriptPildramaniaLibrary';
var num = 100;
var t = {
      Name: 'hi',
      Lname: 'bye'
};
console.log ( _lenc(a) );
console.log('Table ')
_t(t);
console.log('\n')
console.log('\n')
console.log( _half(num));
_print('Custom print');
_print(_rnum(12))
_print(_add(10 , 5))
_print( _sub(10 , 5))
_print(_mult(10 , 5))
_print(_div(10 , 5))
_print(_rect(5 , 4));
_print(_square(4));
_print(tri);
_t(_calctri( 2 , 4 , 3))
_print(months);
_print(days);
_print(year);
_print(lyear);
var hi = ['namaste' , 'namaskar' , 'konichiwa' , 'Hello' , 'Hola']
_arrayD(hi)
_sethtml('#para' , 'Welcome to JPildramaniaLibrary')
_setcolor('#para' , 'cyan')
_setBackgroundColor( 'body' , 'black')
_setleftMargin('#para' , '165px')
_settopMargin('#para' , '72px' )
_a('Page Working!')

