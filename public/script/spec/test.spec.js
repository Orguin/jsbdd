( function () {

Namespace.use('jasmine.grammar.FeatureStory.*');
Namespace.use('jasmine.grammar.GWT.*');
Namespace.use('jasmine.grammar.Meta.*');


component('Test', function () {
    feature('Testing BDD proccess', function () {
        summary(
            'Testing the BDD proccess',
            'Implements with jasmine',
            'And jasmine-species'
        );

        scenario('Testing a odd number', function () {

            var test;

            given('My test is started', function () {
                test = new Test();
            });
            when('I put a number in the Test object.', function () {
                test.put(3);
            });
            then('The number shold be odd type', function () {
                expect(test.isOdd()).not.toEqual(0);
            });
        });
    });
});

}());
