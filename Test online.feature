Feature: Test online
	In order to test my knowledge
	As an user
	I want to do the test
	
  Scenario: Choose the test
	  Given List of test
	  When I click "De so 1"
	  Then I see the first question of "De so 1" 

  Scenario: Choose the question
  	  Given a table of numbers of questions
	  When I click the 2nd box
	  Then I see the 2nd question
	  
  Scenario: Do the test
	  Given A question
	  When I click one of the answer
          And Click "next" button
	  Then I see the next question
	  
  Scenario: Finish my test
          When I click the "nop bai" button
          Then I see the number of my right answers per 20
	  
