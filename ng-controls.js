/**
 * Created by abhishek on 6/29/2015.
 */


(function(){

    var tmpl = "<a class='widget widget-default'><span class='widget-value'></span>                <span class='widget-label'> </span></a>";

    function Widget(options) {
        this.options = options;
        this.typeOfWidget = _detectTypeOfWidget(options);
        this.render();
    }

    function _detectTypeOfWidget(options) {

        var typesOfWidget = {
            simple: SimpleWidget
        };

        return typesOfWidget[options.type];
    }


    function SimpleWidget(options) {
        this.options = options;
        this.render();
    }

    SimpleWidget.prototype.render = function () {
        var self = this;
        self.options.el.append(tmpl);
        self.options.el.find('.widget-value').html(self.options.value);
        self.options.el.find('.widget-label').html(self.options.label);
        debugger;
        Object.observe(self.options.value,function(data){

            self.options.el.find('.widget-value').html(data.value);
        })

    };

    Widget.prototype.render = function () {
        var self = this;

        self.widget = new self.typeOfWidget(self.options);
    };

    var test = Object.create("0%");
    var widget = new Widget({
        el: $('.js-simple-widget'),
        type: 'simple',
        label: 'Testing',
        value: test
    });

    setTimeout(function(){
        test= Object.("36%");
    },4000)





})();