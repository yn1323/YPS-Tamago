---
name: 'recoil'
root: './web/src/recoil'
output: []
ignore: []
questions:
  name: 'What is state name??'
---

# `{{ inputs.name | camel }}.ts`

```tsx
{{ 'web/recoil.ts' | read }}
```
