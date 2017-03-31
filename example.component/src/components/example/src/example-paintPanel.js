/**
 * Paint panel.
 */



Example.PaintPanel = function (containerId) {
    this.containerId = containerId;
};

Example.PaintPanel.prototype = {

    init: function () {
        this._initMarkup(this.containerId);
    },

    _initMarkup: function (containerId) {
        var container = $('#' + containerId);
	container.append('<script name="JavaScript">variables();</script>');
	container.append('<h1 align="center">Крестики-нолики</h1>');
	container.append('<form><p align="center"><input type="button" name="whoseturn" value="Ход: Игрок 1"> <br><br></p><div align="center"><center><table border="0"><tr><td><input type="button" name="b1" value=" " onclick="change_b1(this.form)"> </td><td><input type="button" name="b2" value=" " onclick="change_b2(this.form)"></td><td><input type="button" name="b3" value=" " onclick="change_b3(this.form)"> </td></tr><tr><td><input type="button" name="b4" value=" " onclick="change_b4(this.form)"> </td><td><input type="button" name="b5" value=" " onclick="change_b5(this.form)"> </td><td><input type="button" name="b6" value=" " onclick="change_b6(this.form)"> </td></tr><tr><td><input type="button" name="b7" value=" " onclick="change_b7(this.form)"> </td><td><input type="button" name="b8" value=" " onclick="change_b8(this.form)"> </td><td><input type="button" name="b9" value=" " onclick="change_b9(this.form)"> </td></tr></table></center></div><p align="center"><br><input type="button" value="Новая игра" onclick="history.go(0)"> </p></form>');

    }
};


