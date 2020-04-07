Feature: Instaclone Profile
    In order to access the Instaclone application
    As a user
    I want to create and use my user profile

    Scenario: Create a new user profile
        Given I have navigated to the Instaclone landing page
        And I clicked on the "Create an Account" button
        And I entered a valid email in the "Email" text field
        And I entered a valid password in the "Password" text field  
        And I entered a unique username in the "Username" text field      
        When I click on the "Create an Account" button
        Then I am signed in to my new Instaclone account 
        And I should be redirected to the Instaclone feed page
    
    Scenario: Customize my user profile
        Given I have signed in to my Instaclone account
        And I clicked on the profile icon on the page header
        And I clicked on the "Edit Profile" button on my profile page
        And I edited the "Name" text field
        And I edited the "Username" text field
        And I edited the "Website" text field
        And I edited the "Bio" text field
        When I click on the "Save" button
        Then My profile changes are saved
    
    Scenario: Search for a user profile
        Given I have signed in to my Instaclone account
        And I clicked on the "Search" text field on the page header
        And I entered the profile name of another Instaclone user
        When I click on the profile name from the dropdown box
        Then I am redirected to profile page of the desired Instaclone user

    Scenario: Follow a user profile
        Given I have signed in to my Instaclone account
        And I have navigated to the profile page of the desired Instaclone user
        When I click on the "Follow" button
        Then The profile page follower count should be incremented
        And The button text should be changed to display "Unfollow"

    Scenario: Sign out from my user profile
        Given I have signed in to my Instaclone account
        And I clicked on the profile icon on the page header
        And I clicked on the "Edit Profile" button on my profile page
        When I click on the "Sign Out" button
        Then I should be signed out of my Instaclone account
        And I should be redirected to the Instaclone landing page
    