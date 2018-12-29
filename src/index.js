import './index.css';
import numeral from 'numeral';

var envStuff = {
    courseValue: numeral(1000).format('$0,0.00'),
    anArray: [1, 2, 3],
    anObject: {
        val1: 1,
        val2: 2
    },
    aFunction: function() {
        return this.courseValue;
    }
};

export default envStuff;