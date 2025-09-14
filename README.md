# vue-repo

1. Create a new repository on GitHub.

2. Open Git Bash.

3. Change the current working directory to your local project.

4. Initialize the local directory as a Git repository.
	$ git init

5. Add the files in your new local repository. This stages them for the first commit.
	$ git add .

6. Commit the files that you've staged in your local repository.
	$ git commit -m "First commit"

7. At the top of your GitHub repository's Quick Setup page, click to copy the remote repository URL.

8. In the Command prompt, add the URL for the remote repository where your local repository will be pushed.
	$ git remote add origin <remote repository URL>
	# Sets the new remote
	$ git remote -v
	# Verifies the new remote URL

9. Push the changes in your local repository to GitHub if there is a remote branch called master (or main if that's what you're using)	
	$ git push origin master
	Otherwise you will have to name local branch first by	
	$ git branch -m <new_name>
	and then push it to add a new branch called <new_name>	
	$ git push origin -u <new_name>
