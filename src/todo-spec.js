describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});


describe('access localhost:8402', function() {
  it('should get correct title', function() {
    browser.driver.get('http://host.docker.internal:8402/admin-lte', 1000);
    browser.driver.getTitle().then(function(webpagetitle){
        expect(webpagetitle).toEqual('AdminLTE 2 | Dashboard');
    });
  });
});
