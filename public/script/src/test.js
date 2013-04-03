( function () {

    var Test = function () {
    };

    Test.prototype.put = function ( num ) {
        this.number = num;
    };

    Test.prototype.isOdd = function () {
        return this.number % 2;
    };

    this.Test = Test;

}());
