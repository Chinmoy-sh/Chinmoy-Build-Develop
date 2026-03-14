# Contributing Guide

Thank you for your interest in improving this repository.

## Workflow

1. Fork the repository.
2. Create a branch from `main`.
3. Make focused changes with clear commit messages.
4. Run quality checks locally.
5. Open a pull request with context and screenshots when UI is affected.

## Branch Naming

Use one of the following formats:

- `feature/short-description`
- `fix/short-description`
- `docs/short-description`
- `chore/short-description`

## Commit Messages

Use concise, imperative messages.

Examples:

- `feat: improve responsive navigation`
- `fix: prevent modal close race condition`
- `docs: add setup instructions`

## Local Quality Checks

Run before submitting:

```bash
npm run lint
npm run format:check
```

## Pull Request Checklist

- [ ] Changes are scoped and focused.
- [ ] Lint checks pass.
- [ ] Formatting checks pass.
- [ ] UI updates are responsive and accessible.
- [ ] Documentation is updated if behavior changed.

## Code Style

- Keep changes minimal and intentional.
- Prefer readable, maintainable code over clever shortcuts.
- Avoid introducing unrelated refactors in a feature PR.
