Feature: Instaclone Post
    In order to value
    As a role
    I want feature

    Scenario: Post a picture
        Given I have signed in to my Instaclone account
        And I navigated to the "Feed" page
        And I clicked on the "New Post" button
        And I clicked on the "Select an Image" text field
        And I uploaded a picture less than 5MB
        And I write a caption in the "Write a Caption" text field
        When I click on the "Upload" button
        Then My post should be saved on my user profile 

    Scenario: View post details
        Given I have signed in to my Instaclone account
        And I navigated to the "Feed" page
        When I click on a picture in the feed
        Then I should be redirected to the post details page
        And I should be able to view the comments associated to that post
    
    Scenario: Leave a comment
        Given I have signed in to my Instaclone account
        And I navigated to the "Feed" page
        And I clicked on a post's details
        And I entered in the "Add a comment" text field
        When I click on the "Send" button
        Then My comment should be saved to that post
    
    Scenario: Like a picture
        Given I have signed in to my Instaclone account
        And I navigated to the "Feed" page
        When I click on the heart-shaped icon under a picture
        Then The heart should be changed from grey to red
        And the like counter should be incremented by one
