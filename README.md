Pre-req:
System needs Node Latest Vesion

Open this Folder 

Do npm install

Run The Program:
1) npx cypress open
2) Select the Browser option from list
3) Click the Feature file what we want to run
            (OR)
npx cypress run --browser chrome --headed --spec cypress/integration/**/*
            (OR)
npm run test


Report:
To Gendrate reports we need to run "node report.js"

to check report navigate to : "cypress/reports/test-results/automation_report.html"