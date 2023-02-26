Repo initial state:

- only contains components from a single scope
- All components code and files
- workspace.jsonc with configuration
- Has pnpm-lock file
- DOES NOT have bitmap (so we avoid merge conflicts here)

by developer:

bit import "learnbit.lanes-automation/**" --override
git checkout my-feature-branch -b
git add .
git commit --message "my message"
git push origin my-feature-branch

by automation, upon PR creation:

bit lane create my-feature-branch
bit snap --message "same git commit message"
bit export

by developer, as a response to feedbacks:

git checkout origin my-feature-branch
git commit --message "my message"
git push origin my-feature-branch

by automation, upon PR update:

bit snap --message "my message"
bit export

by automation, upon PR merge

bit switch main
bit merge my-feature-branch
bit tag --message "my message"
bit export
rm -rf .bitmap
git commit