# Commit Guidelines

This project strictly enforces [Conventional Commits](https://www.conventionalcommits.org/) via `commitlint` and `husky`.

## Commit Format
```text
<type>(<scope>): <subject>
```

### Allowed Types
- `feat`: A new feature
- `fix`: A bug fix
- `chore`: Build process or auxiliary tool changes
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `test`: Adding missing tests or correcting existing tests
- `ci`: Changes to CI configuration files and scripts
- `perf`: A code change that improves performance
- `wip`: Work in progress (for temporary scratch commits)

### Rules
1. Subject must start with a lowercase letter.
2. Subject must not end with a period (`.`).
3. Keep the header within 100 characters.
4. Avoid vague descriptions like `feat: update code` or `fix: fix stuff`.

### Examples
- `feat(auth): add email verification step`
- `fix(header): correct mobile navigation toggle state`
- `chore(deps): update swiper to latest release`
