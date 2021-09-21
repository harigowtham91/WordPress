Feature: Validate the My Profile page in Wordpress site

    Scenario Outline: Validate the First name and Last name update
        Given Login to Wordpress App with "<username>" and "<password>"
        And Navigate to My profile page
        When Enter the "<FirstName>" "<LastName>" "<DisplayName>" and "<AboutMe>"
        Then validate the data which we entered "<DisplayName>"

        Examples:
            | FirstName | LastName  | username      | password   | DisplayName | AboutMe              |
            | Hari      | Ramanujam | harigowtham30 | GISadmin$5 | hari_Test   | Automation Developer |

    Scenario Outline: Validate the Add Profile Link by WordPress site
        Given Login to Wordpress App with "<username>" and "<password>"
        When Navigate to My profile page
        And Add wordpress Link to profile link part "<SiteName>"
        Then Validate the added "<SiteName>" Link

        Examples:
            | username      | password   | SiteName      |
            | harigowtham30 | GISadmin$5 | harigowtham91 |

    Scenario Outline: Validate the Add Profile Link by Url site
        Given Login to Wordpress App with "<username>" and "<password>"
        When Navigate to My profile page
        And Add URL Link to profile link part by adding "<SiteName>" "<URL>" and "<URLDetails>"
        Then Validate the Added Site

        Examples:
            | username      | password   | SiteName      | URL            | URLDetails       |
            | harigowtham30 | GISadmin$5 | harigowtham91 | www.google.com | google site test |

    Scenario Outline: Edit Excesting data the First name and Last name update and Display Name
        Given Login to Wordpress App with "<username>" and "<password>"
        When Navigate to My profile page
        When Enter the "<FirstName>" "<LastName>" "<DisplayName>" and "<AboutMe>"
        Then validate the data which we entered "<DisplayName>"

        Examples:
            | FirstName | LastName | username      | password   | DisplayName | AboutMe                     |
            | Gowtham   | Ram      | harigowtham30 | GISadmin$5 | hari_Test   | Automation Developer Edited |


    Scenario Outline: Validate the hide Gravatar
        Given Login to Wordpress App with "<username>" and "<password>"
        When Navigate to My profile page
        And Hide my Gravatar profile
        Then Validate the Hide Gravatar

        Examples:
            | username      | password   | SiteName      |
            | harigowtham30 | GISadmin$5 | harigowtham91 |

    Scenario Outline: Validate the Un hide Gravatar
        Given Login to Wordpress App with "<username>" and "<password>"
        When Navigate to My profile page
        And Un-Hide my Gravatar profile
        Then Validate the un Hide Gravatar

        Examples:
            | username      | password   | SiteName      |
            | harigowtham30 | GISadmin$5 | harigowtham91 |
