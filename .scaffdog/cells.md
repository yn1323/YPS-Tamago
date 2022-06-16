---
name: 'cell'
root: './web/src'
output: []
ignore: []
questions:
  component: 'What is cell name??'
  path: 'What is path??(i.e. features/Timeline)'
---

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/{{ inputs.component | pascal }}Cell.mock.ts`
```tsx
{{ 'web/presentation/cells/CellCell.mock.ts' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/{{ inputs.component | pascal }}Cell.stories.tsx`
```tsx
{{ 'web/presentation/cells/CellCell.stories.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/{{ inputs.component | pascal }}Cell.tsx`
```tsx
{{ 'web/presentation/cells/CellCell.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/{{ inputs.component | pascal }}Cell.test.tsx`
```tsx
{{ 'web/presentation/cells/CellCell.test.tsx' | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}Cell/scripts.tsx`
```tsx
{{ 'web/presentation/cells/scripts.tsx' | read }}
```

