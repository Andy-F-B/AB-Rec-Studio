# FEATURE COMPLETION CHECKLIST

<!-- Installed by sdk-web <specPhase> on 2026-11-02 from sdk-web template -->
<!-- Source: AI App Development Handbook 4.3 -->

Before marking any feature complete, verify:

## Database
- [ ] Table exists in schema.sql
- [ ] RLS is enabled
- [ ] All four policies exist (SELECT, INSERT, UPDATE, DELETE)
- [ ] Foreign key indexes exist

## Backend
- [ ] Query functions exist in /lib/
- [ ] TypeScript types defined for all parameters and returns
- [ ] Error handling implemented
- [ ] Zod schema exists in /lib/schemas/[entity].schema.ts
- [ ] All form inputs and API payloads validated before insert/update

## UI
- [ ] Component exists in /components/
- [ ] Loading state implemented
- [ ] Empty state implemented
- [ ] Error state implemented

## Integration
- [ ] Page connects to backend queries
- [ ] Authentication is enforced (user can only see own data)
- [ ] Form validation present

## Testing
- [ ] No console.log statements left in code
- [ ] No TODO comments left unaddressed

## Public site (studio website, v1 static)
- [ ] Content comes from /content, not hard-coded in components
- [ ] Page works at 600 / 1024 / 1440 / 1920 widths
- [ ] Images have alt text
- [ ] Contact links use mailto:binauanders@gmail.com
- [ ] Database / Backend sections: skip in v1 (no database)
