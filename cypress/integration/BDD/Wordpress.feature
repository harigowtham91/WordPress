Feature: Validate the My Profile page in Wordpress site

    Scenario Outline: Validate My Profile details saved successfully
        Given Login to Wordpress App with "<username>" and "<password>"
        And Navigate to My profile page
        When Enter the "<FirstName>" "<LastName>" "<DisplayName>" and "<AboutMe>" and save
        Then Validate profile saved successfully which entered "<FirstName>" "<LastName>" "<DisplayName>" and "<AboutMe>"

        Examples:
            | FirstName | LastName  | username      | password   | DisplayName | AboutMe              |
            | Hari      | Ramanujam | harigowtham30 | GISadmin$5 | hari_Test   | Automation Developer |

    Scenario Outline: Validate Add Profile Link by WordPress site successfully
        Given Login to Wordpress App with "<username>" and "<password>"
        When Navigate to My profile page
        And Add wordpress Link to profile link part with "<SiteName>"
        Then Validate site added successfully with "<SiteName>"

        Examples:
            | username      | password   | SiteName      |
            | harigowtham30 | GISadmin$5 | harigowtham91 |

    Scenario Outline: Validate Add Profile Link by Url site successfully
        Given Login to Wordpress App with "<username>" and "<password>"
        When Navigate to My profile page
        And Add URL Link to profile link part by adding "<SiteName>" "<URL>" and "<URLDetails>"
        Then Validate URL site added successfully with "<URL>"

        Examples:
            | username      | password   | SiteName      | URL            | URLDetails       |
            | harigowtham30 | GISadmin$5 | harigowtham91 | www.google.com | google site test |

    Scenario Outline: Validate Edit existing My Profile data details saved successfully
        Given Login to Wordpress App with "<username>" and "<password>"
        When Navigate to My profile page
        When Enter the "<FirstName>" "<LastName>" "<DisplayName>" and "<AboutMe>" and save
        Then Validate profile saved successfully which entered "<FirstName>" "<LastName>" "<DisplayName>" and "<AboutMe>"

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
