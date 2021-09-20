Feature: Validate the My Profile page in Wordpress site

    Scenario Outline: Validate the First name and Last name update
        Given Login with Wordpress App "<username>" and "<password>"
        And Navigate to My profile page
        Then Enter the "<FirstName>" and "<LastName>" "<DisplayName>" "<AboutMe>"
        And Save and validate the data which we entered "<DisplayName>"

        Examples:
            | FirstName | LastName  | username      | password   | DisplayName | AboutMe              |
            | Hari      | Ramanujam | harigowtham30 | GISadmin$5 | hari_Test   | Automation Developer |

    Scenario Outline: Validate the Add Profile Link by WordPress site
        Given Login with Wordpress App "<username>" and "<password>"
        And Navigate to My profile page
        When Add wordpress Link to profile link part "<SiteName>"

        Examples:
            | username      | password   | SiteName      |
            | harigowtham30 | GISadmin$5 | harigowtham91 |

    Scenario Outline: Validate the Add Profile Link by Url site
        Given Login with Wordpress App "<username>" and "<password>"
        And Navigate to My profile page
        When Add URL Link to profile link part "<SiteName>" "<URL>" "<URLDetails>"
        And Logout the sytem

        Examples:
            | username      | password   | SiteName      | URL            | URLDetails       |
            | harigowtham30 | GISadmin$5 | harigowtham91 | www.google.com | google site test |

    Scenario Outline: Edit Excesting data the First name and Last name update and Username
        Given Login with Wordpress App "<username>" and "<password>"
        And Navigate to My profile page
        Then Enter the "<FirstName>" and "<LastName>" "<DisplayName>" "<AboutMe>"
        And Save and validate the data which we entered "<DisplayName>"

        Examples:
            | FirstName | LastName | username      | password   | DisplayName | AboutMe                     |
            | Gowtham   | Ram      | harigowtham30 | GISadmin$5 | hari_Test   | Automation Developer Edited |


    Scenario Outline: Validate the hide Gravatar
        Given Login with Wordpress App "<username>" and "<password>"
        And Navigate to My profile page
        Then Hide my Gravatar profile

        Examples:
            | username      | password   | SiteName      |
            | harigowtham30 | GISadmin$5 | harigowtham91 |

    Scenario Outline: Validate the Un hide Gravatar
        Given Login with Wordpress App "<username>" and "<password>"
        And Navigate to My profile page
        Then Un-Hide my Gravatar profile

        Examples:
            | username      | password   | SiteName      |
            | harigowtham30 | GISadmin$5 | harigowtham91 |
