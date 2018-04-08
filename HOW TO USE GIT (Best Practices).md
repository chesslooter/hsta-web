# HSTA
Developed for CS 506 at The University of Wisconsin-Madison

Some real quick and dirty Git tips for best practices.

1) Before making changes to any section of code, the best practice is to pull the code 
	down from a branch (git checkout <branchname>, git pull), followed by creating a 
	seperate branch (git branch <newbranchname>). This allows other people working on
	the code to pull the same code without worrying about overwriting your code, and
	your code doesn't overwrite any of their changes. Since Git follows a branching
	format, you can have branches of branches.
	
	An example of this being useful: 
	Bad:
	Bill is working on some new tests in the file marked tests. At the same time, 
	Ted pulls down the same commit to fix one of the earlier tests that wasn't 
	working as intended from the same test file. Ted quickly fixes the issue 
	and pushes the code. When Bill finishes, his push to the branch throws
	some errors, and he forces the push through, overwriting Ted's work. Alternatively,
	he could have to memorize all of the changes he made, pull the newest commit, then
	redo all of his work. Either way, it's highly annoying.
	
	Good:
	Bill pulls down the commit and branches off into Bill's branch. Same with Ted into
	the Ted branch. Ted again finishes quickly, and then merges his branch, which just
	moves all of his changes in, at the cost of one extra git command. However, when
	Bill finishes all of his changes, his work either also moves in nicely to Ted's
	changes, or it causes some merge conflicts, which he can resolve using a tool.
	Unless Bill forcefully undoes all of Ted's work, both of their work goes through.
	
2) In the event of merge conflicts, I've had a lot of good luck with DiffMerge, which 
	is pretty easy to use. https://sourcegear.com/diffmerge/downloads.php
	You can set it as the default tool if you're using Windows by following these commands:
	
	git config --global --add merge.tool sgdm
	git config --global --add mergetool.sgdm.path "C:/Program Files/SourceGear/Common/DiffMerge/sgdm.exe"
	git config --global --add mergetool.sgdm.trustExitCode false

	git config --global --add diff.guitool sgdm
	git config --global --add difftool.sgdm.path "C:/Program Files/SourceGear/Common/DiffMerge/sgdm.exe"
	git config --global --add difftool.sgdm.trustExitCode false
	
3) For the case of standardization, apparently you're supposed to use present tense.
	"Fixes the edge test" as opposed to "Fixed the edge test"