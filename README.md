This is a simple project to demonstrate basic WebdriverIO functionality.

To run the project and see tests execute, issue the following commands in order.

npm install
npm install -g allure-commandline
npm run wdio

Tests should run and a report should open at the end.  If the report doesn't open, run the following command.

allure open

When running this suite, you should see three tests execute -- 2 will pass and 1 will fail.

******************************************************************

Project structure:

test/spec folder: Folder where all tests are stored.
test/pageobjects folder: Folder where all page object classes are stored.
test/testdata: Folder where test data files are stored.
wdio.conf.js: Configuration file for project -- contains data reports available, drivers available and also hooks.