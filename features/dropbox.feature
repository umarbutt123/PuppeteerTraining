Feature: Search login dropbox

	# to check first cucumber works or not
	Scenario: Verify result for google search
		Given The browser is open
		When open the dropbox page
		When enter empty values
		Then validate the error message