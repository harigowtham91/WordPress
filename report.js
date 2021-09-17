var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonDir: '../WordPress/cypress/reports/test-results/cucumber-json/',
        screenshotsDirectory: '../WordPress/cypress/screenshots/',
        storeScreenshots: true,
        output: '../WordPress/cypress/reports/test-results/automation_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        metadata: {            
            "Test Environment": "DEV",             
            "Executed": "Docker Container"
        }
    };

    reporter.generate(options);

// const report = require('multiple-cucumber-html-reporter');

// report.generate({
// 	jsonDir: './cypress/reports/test-results/cucumber-json',
// 	reportPath: './cypress/reports/test-results/automation_report.html',
// 	metadata:{
//         browser: {
//             name: 'chrome',
//             version: '60'
//         },
//         device: 'Local test machine',
//         platform: {
//             name: 'ubuntu',
//             version: '16.04'
//         }
//     },
//     customData: {
//         title: 'Run info',
//         data: [
//             {label: 'Project', value: 'Custom project'},
//             {label: 'Release', value: '1.2.3'},
//             {label: 'Cycle', value: 'B11221.34321'},
//             {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
//             {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
//         ]
//     }
// });