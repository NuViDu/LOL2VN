Feature: Revision
	In order to improve my knowledge 
	As an user
	I want to read the documents about the test

  Scenario: Read the documents 
	  Given A list includes "Phan sa hinh", "Phan bien bao", "Phan ly thuyet", "Phan thuc hanh"
	  When I click "Phan sa hinh"
	  Then I see the picture of situation
	  When I click "Phan bien bao"
	  Then I see the signs and their meanings
	  When I click "Phan ly thuyet"
	  Then I see the traffic rules
	  When I click "Phan thuc hanh"
	  Then I see the video of the pratise test
