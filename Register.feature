Feature: Register
	In order to save time
	As an user
	I want to send my information to admin

  Scenario: Unsuccessful register
	  Given a form to fill in my information
	  When there are some blank box
	  And I click the "Dang ky" button
	  Then I see the notice under each blank box "Ban chua dien thong tin"
	  When some information was used before 
	  And I click the "Dang ky" button
	  Then I sê the notice under each box "Thong tin da duoc su dung"
	  
  Scenario: Successful register
	  Given a form to fill in my information
	  When all boxes are filled in
	  And I click "Dang ky" button
	  Then I see the "Dang ky thanh cong" notice alert
