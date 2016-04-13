/**
 * Created by vojtechmalek on 6/11/15.
 */

'use strict';


module.exports  = {


    animationFinished: function() {

        var self = this;
        var deferred =  $.Deferred();

        var animationsEvents = '' +
            'webkitAnimationEnd ' +
            'oanimationend ' +
            'msAnimationEnd ' +
            'animationend ' +
            'webkitTransitionEnd ' +
            'oTransitionEnd ' +
            'MSTransitionEnd ' +
            'transitionend';

        this.one(animationsEvents, function() {
            deferred.resolve(self);
        });

        return deferred;
    }

};
