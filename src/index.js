import './index.css';
import jquery from 'jquery';
import numeral from 'numeral';
import config from '../webpack.config.dev';

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

(function($, cfg) {
    let envDiv = $("#env");
    if(envDiv) {
        if(cfg.debug === true) {
            envDiv.show();
        } else {
            envDiv.hide();
        }
    }
})(jquery, config);

export default envStuff;