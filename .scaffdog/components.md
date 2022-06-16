---
name: 'component or page'
root: './web/src'
output: []
ignore: []
questions:
  component: 'What is component name??'
  path: 'What is path??(i.e. features/Timeline)'
---

# `{{ inputs.path }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.stories.tsx`
```tsx
{{ 'web/presentation/components/Component.stories.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.tsx`
```tsx
{{ 'web/presentation/components/Component.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.test.tsx`
```tsx
{{ 'web/presentation/components/Component.test.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/scripts.tsx`
```tsx
{{ 'web/presentation/components/scripts.tsx' | read }}
```

