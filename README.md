# Online Bank Statements App

A simple polymer component to show list of transaction for specific account

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. 
Then run `polymer install` for the first time to load all dependent modules 
and Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer install

$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.


___

# Application Screens #
___

### MOBILE VIEW ###
___

![mobile view 1](https://raw.githubusercontent.com/izharkhanit/Online-Bank-Statement/master/img/mobile-view1.jpg)
![mobile view 2](https://raw.githubusercontent.com/izharkhanit/Online-Bank-Statement/master/img/mobile-view2.jpg)
![mobile view 3](https://raw.githubusercontent.com/izharkhanit/Online-Bank-Statement/master/img/mobile-view3.jpg)

___

### DESKTOP VIEW ###
___

![desktop view](https://raw.githubusercontent.com/izharkhanit/Online-Bank-Statement/master/img/desktop-view.jpg)

___

### LIT ELEMENT IMPLEMENTATION ###
___

![desktop view](https://raw.githubusercontent.com/izharkhanit/Online-Bank-Statement/master/img/yearly-chart.jpg)


### Rules 
1. On landing page having dropdown with multiple accounts fetching from API in polymer
2. Negative balance shows red in color while positive in green in polymer
3. while selecting the particular account from dropdown it will display the transactions list in polymer
4. while selecting the particular transaction it will show transaction overview with google map address.
5. There will be one button `Show Yearly Chart` implemented in lit element
6. Once `Show Yearly Chart` clicked, lit element high charts with their yearly income and spendings appears