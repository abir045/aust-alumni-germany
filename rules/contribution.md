# Contribution Guidelines

## Workflow
1. **Branch Naming**:
   - `feat/feature-name`
   - `fix/bug-description`
   - `refactor/scope-name`
   - `chore/task-name`
2. **Commit Messages**:
   - Follow Conventional Commits format enforced via `@commitlint/cli`.
   - Example: `feat(events): add RSVP registration modal`
3. **Pre-Commit Checks**:
   - Husky automatically runs `npm run lint` and `npm run typecheck` before each commit.
   - Do not use `--no-verify` to bypass checks.
4. **Pull Requests**:
   - Direct push to `main` is blocked by pre-push hooks and GitHub branch protection.
   - Submit a PR against `main` or `develop`.
   - Ensure GitHub Actions CI passes all stages.
