/**
 * Example component.
 */
//My code

function variables(){
t = 1;
change = 1;
empty1 = -1;
empty2 = -1;
empty3 = -1;
empty4 = -1;
empty5 = -1;
empty6 = -1;
empty7 = -1;
empty8 = -1;
empty9 = -1;
return;
whogoesnow = "Ход: Игрок 1"
}
function win(){
if (empty1==empty2 && empty2==empty3 && empty3==0 ||
empty4==empty5 && empty5==empty6 && empty6==0 ||
empty7==empty8 && empty8==empty9 && empty9==0 ||
empty1==empty4 && empty4==empty7 && empty7==0 ||
empty2==empty5 && empty5==empty8 && empty8==0 ||
empty3==empty6 && empty6==empty9 && empty9==0 ||
empty1==empty5 && empty5==empty9 && empty9==0 ||
empty3==empty5 && empty5==empty7 && empty7==0 ){
alert ("Игрок 2: ВЫ ВЫИГРАЛИ !!!");
history.go(0)
}
if (empty1==empty2 && empty2==empty3 && empty3==1 ||
empty4==empty5 && empty5==empty6 && empty6==1 ||
empty7==empty8 && empty8==empty9 && empty9==1 ||
empty1==empty4 && empty4==empty7 && empty7==1 ||
empty2==empty5 && empty5==empty8 && empty8==1 ||
empty3==empty6 && empty6==empty9 && empty9==1 ||
empty1==empty5 && empty5==empty9 && empty9==1 ||
empty3==empty5 && empty5==empty7 && empty7==1 ){
alert ("Игрок 1: ВЫ ВЫИГРАЛИ !!!");
history.go(0)
}
}
function turnchange(t){
if (change == 1) {
if (t == 0){
t = 1;
whogoesnow = "Ход: Игрок " + 1
}
else {
t = 0;
whogoesnow = "Ход: Игрок " + 2
}
}
else {
t = t;
}
change = 1
return (t);
}
function changing(clicked){
if (clicked == 1){
spot = empty1 ;}
if (clicked == 2){
spot = empty2 ;}
if (clicked == 3){
spot = empty3 ;}
if (clicked == 4){
spot = empty4 ;}
if (clicked == 5){
spot = empty5 ;}
if (clicked == 6){
spot = empty6 ;}
if (clicked == 7){
spot = empty7 ;}
if (clicked == 8){
spot = empty8 ;}
if (clicked == 9){
spot = empty9 ;}
if (spot == -1){
if (t == 0){
xo = " O " ;
spot = 0
}
else {
xo = " X " ;
spot = 1
}
if (clicked == 1){
empty1 = spot;}
if (clicked == 2){
empty2 = spot ;}
if (clicked == 3){
empty3 = spot ;}
if (clicked == 4){
empty4 = spot ;}
if (clicked == 5){
empty5 = spot ;}
if (clicked == 6){
empty6 = spot ;}
if (clicked == 7){
empty7 = spot ;}
if (clicked == 8){
empty8 = spot ;}
if (clicked == 9){
empty9 = spot ;}
}
else {
if (spot == 0){
xo = " O ";}
if (spot == 1){
xo = " X ";}
change = 0
}
return (xo) ;
}
function change_b1(form){
clicked = 1;
changing(clicked) ;
t = turnchange(t) ;
form.b1.value = xo;
form.whoseturn.value = whogoesnow
win();
return;
}
function change_b2(form){
clicked = 2;
changing(clicked) ;
form.b2.value = xo;
t = turnchange(t) ;
form.whoseturn.value = whogoesnow
win();
return;
}
function change_b3(form){
clicked = 3;
changing(clicked) ;
form.b3.value = xo;
t = turnchange(t) ;
form.whoseturn.value = whogoesnow
win();
return;
}
function change_b4(form){
clicked = 4;
changing(clicked) ;
form.b4.value = xo;
t = turnchange(t) ;
form.whoseturn.value = whogoesnow
win();
return;
}
function change_b5(form){
clicked = 5;
changing(clicked) ;
form.b5.value = xo;
t = turnchange(t) ;
form.whoseturn.value = whogoesnow
win();
return;
}
function change_b6(form){
clicked = 6;
changing(clicked) ;
form.b6.value = xo;
t = turnchange(t) ;
form.whoseturn.value = whogoesnow
win();
return;
}
function change_b7(form){
clicked = 7;
changing(clicked) ;
form.b7.value = xo;
t = turnchange(t) ;
form.whoseturn.value = whogoesnow
win();
return;
}
function change_b8(form){
clicked = 8;
changing(clicked) ;
form.b8.value = xo;
t = turnchange(t) ;
form.whoseturn.value = whogoesnow
win();
return;
}
function change_b9(form){
clicked = 9;
changing(clicked) ;
form.b9.value = xo;
t = turnchange(t) ;
form.whoseturn.value = whogoesnow
win();
return;
}
//end
Example.DrawComponent = {
    ext_lang: 'tic_tac_toe',
    formats: ['format_example_json'],
    struct_support: true,
    factory: function (sandbox) {
        return new Example.DrawWindow(sandbox);
    }
};

Example.DrawWindow = function (sandbox) {
    this.sandbox = sandbox;
    this.paintPanel = new Example.PaintPanel(this.sandbox.container);
    this.paintPanel.init();
    this.recieveData = function (data) {
        console.log("in recieve data" + data);
    };

    var scElements = {};

    function drawAllElements() {
        var dfd = new jQuery.Deferred();
       // for (var addr in scElements) {
            jQuery.each(scElements, function(j, val){
                var obj = scElements[j];
                if (!obj || obj.translated) return;
// check if object is an arc
                if (obj.data.type & sc_type_arc_pos_const_perm) {
                    var begin = obj.data.begin;
                    var end = obj.data.end;
                    // logic for component update should go here
                }

        });
        SCWeb.ui.Locker.hide();
        dfd.resolve();
        return dfd.promise();
    }

// resolve keynodes
    var self = this;
    this.needUpdate = false;
    this.requestUpdate = function () {
        var updateVisual = function () {
// check if object is an arc
            var dfd1 = drawAllElements();
            dfd1.done(function (r) {
                return;
            });


/// @todo: Don't update if there are no new elements
            window.clearTimeout(self.structTimeout);
            delete self.structTimeout;
            if (self.needUpdate)
                self.requestUpdate();
            return dfd1.promise();
        };
        self.needUpdate = true;
        if (!self.structTimeout) {
            self.needUpdate = false;
            SCWeb.ui.Locker.show();
            self.structTimeout = window.setTimeout(updateVisual, 1000);
        }
    }
    
    this.eventStructUpdate = function (added, element, arc) {
        window.sctpClient.get_arc(arc).done(function (r) {
            var addr = r[1];
            window.sctpClient.get_element_type(addr).done(function (t) {
                var type = t;
                var obj = new Object();
                obj.data = new Object();
                obj.data.type = type;
                obj.data.addr = addr;
                if (type & sc_type_arc_mask) {
                    window.sctpClient.get_arc(addr).done(function (a) {
                        obj.data.begin = a[0];
                        obj.data.end = a[1];
                        scElements[addr] = obj;
                        self.requestUpdate();
                    });
                }
            });
        });
    };
// delegate event handlers
    this.sandbox.eventDataAppend = $.proxy(this.receiveData, this);
    this.sandbox.eventStructUpdate = $.proxy(this.eventStructUpdate, this);
    this.sandbox.updateContent();
};
SCWeb.core.ComponentManager.appendComponentInitialize(Example.DrawComponent);
