Feature: Instaclone Login
    In order to access the Instaclone application
    As a user
    I want to login to my account

    Scenario: Login with email and password
        Given I have navigated to the Instaclone landing page
        And I entered a valid email in the email text field
        And I entered a valid password in the password text field
        When I click on the "Sign In" button
        Then I am signed in to my Instaclone account 
        And I am redirected to the Instaclone feed page
    
    Scenario: Login with Google account
        Given I have navigated to the Instaclone landing page
        And I clicked on the "Sign In With Google" button
        When I confirm the Google profile I want to use
        Then I am signed in to my Instaclone account 
        And I am redirected to the Instaclone feed page

    Scenario: Login with Facebook account
        Given I have navigated to the Instaclone landing page
        And I clicked on the "Sign In With Facebook" button
        When I confirm the Facebook profile I want to use
        Then I am signed in to my Instaclone account 
        And I am redirected to the Instaclone feed page

    Scenario: Access the landing page
        Given I have not previously signed in to my Instaclone account
        When I navigate to the Instaclone landing page
        Then A "Welcome to Instaclone" message will be displayed
        But I will not be signed in to my Instaclone account

    Scenario: Credentials saved from previous session
        Given I have previously signed in my Instaclone account
        When I navigate to the Instaclone landing page
        Then I am automatically redirected to the Instaclone feed page
