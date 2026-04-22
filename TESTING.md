# Unit Testing Guide

This project uses **Jest** and **React Testing Library** for unit testing React components.

## Setup

Testing is already configured with:

- **Jest** - JavaScript testing framework
- **React Testing Library** - Testing utilities for React components
- **@testing-library/jest-dom** - Custom Jest matchers for DOM testing

## Running Tests

### Run all tests once

```bash
npm test
```

### Run tests in watch mode (re-run on file changes)

```bash
npm run test:watch
```

### Generate coverage report

```bash
npm run test:coverage
```

## Test File Structure

Test files are located next to the components they test:

```
components/
  ui/
    cybercn/
      form/
        __tests__/
          - form.test.tsx
          - input.test.tsx
        - form.tsx
        - input.tsx
      __tests__/
        - heading.test.tsx
        - button.test.tsx
      - heading.tsx
      - button.tsx
```

## Test Patterns

### Testing Form Components (Props Forwarding)

Form components should forward all props to their underlying HTML elements. Example:

```typescript
import { render, screen } from '@testing-library/react'
import { Input } from '../input'

describe('Input Component', () => {
  it('forwards all props to the input element', () => {
    render(
      <Input
        placeholder="Enter text"
        type="email"
        disabled
        data-testid="custom-input"
      />
    )
    const input = screen.getByTestId('custom-input')
    expect(input).toHaveAttribute('placeholder', 'Enter text')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toBeDisabled()
  })
})
```

### Testing Visual Components (Class Application)

Visual components should correctly apply CSS classes. Example:

```typescript
import { render, screen } from '@testing-library/react'
import { Heading } from '../heading'

describe('Heading Component', () => {
  it('applies cyber-heading class', () => {
    render(<Heading data-testid="test-heading">Test</Heading>)
    const heading = screen.getByTestId('test-heading')
    expect(heading).toHaveClass('cyber-heading')
  })

  it('forwards custom className and merges with default', () => {
    render(<Heading className="custom-class" data-testid="test-heading">Test</Heading>)
    const heading = screen.getByTestId('test-heading')
    expect(heading).toHaveClass('cyber-heading')
    expect(heading).toHaveClass('custom-class')
  })
})
```

### Testing Event Handlers

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../button'

describe('Button Component', () => {
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## Writing New Tests

When writing tests for new components:

1. **Create a `__tests__` directory** next to the component
2. **Name test file** as `{component-name}.test.tsx`
3. **Import testing utilities**:
   ```typescript
   import { render, screen, fireEvent } from "@testing-library/react";
   ```
4. **Test key behaviors**:
   - Rendering (element present, content visible)
   - Props forwarding (for form components)
   - Class application (for styled components)
   - Event handling (for interactive components)
   - Variants (if component supports them via CVA)

## Test Coverage

Current test coverage targets:

- All form components (input, select, textarea, etc.)
- All visual components (heading, button, hr, etc.)
- Prop forwarding behavior
- Class merging via `cn()` utility
- Accessibility attributes

Coverage can be reviewed with:

```bash
npm run test:coverage
```

## Best Practices

- ✅ Use semantic queries (`getByRole`, `getByLabelText`) over `getByTestId` when possible
- ✅ Test user behavior, not implementation details
- ✅ Use `data-testid` only when semantic queries don't work
- ✅ Mock external dependencies if needed
- ✅ Keep tests focused on one behavior per test
- ✅ Use descriptive test names that explain what is being tested

## Troubleshooting

### Tests won't run on Tailwind classes

This is expected - Jest doesn't compile Tailwind CSS. Instead:

- Test that classes are applied via `expect(element).toHaveClass('class-name')`
- Test visual behavior through Storybook (manual testing)
- Use `jest.mock()` for CSS imports if needed

### ESM/CJS compatibility issues

The project uses `next/jest` which handles module resolution. If issues persist:

```bash
npm run test -- --clearCache
```

## References

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
