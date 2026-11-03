# help-log
**purpose:** log of all help sessions. used by AI to identify patterns and by user to spot recurring issues or opportunities for new rules and functions.
**written automatically** by help.br after every session.
**human readable** — review periodically to spot improvements.

---

## how to use this log

scan entries marked **[NEW PATTERN]** — these may need a new error file, a new function, or a spec note added to b-rite.md.

scan entries marked **resolved: no** — these are open issues.

if the same issue appears 3+ times — consider adding a dedicated error handler or a note to the relevant .br file.

---

## log entries

<!-- entries written below by help.br — do not edit manually unless needed -->

---

### 2026-11-02 — how to start the studio website

**date:** 2026-11-02
**context note from user:** none
**questions asked:** A1–A5 (all opt)
**questions skipped:** A2–A5 (left blank by user)
**diagnosis:** no error. user wants to build a recording studio website (tabs: musicians worked with, background, upcoming music festival) and didn't know which command starts it.
**solution provided:** start with sdk-web <specPhase> seeded with the app idea, then anchor → task → preview/build phases.
**corrected script:** *dev* !sdk|003| br : { run; <specPhase>; 'recording studio website with tabs for musicians we have worked with, studio background, and our upcoming music festival' } :
**resolved:** yes
**pattern flag:** —
**notes:** user's keyboard intermittently drops some keys — read input loosely. consider a "getting started" entry in sdk-guide.txt pointing new users to <specPhase>.

---



---

### [entry template]

**date:** yyyy-mm-dd
**context note from user:** [what the user said upfront, if anything]
**questions asked:** [list questions that were asked]
**questions skipped:** [list questions pre-answered by context note]
**diagnosis:** [what the issue was]
**solution provided:** [what was recommended]
**corrected script:** [corrected script if applicable]
**resolved:** yes / no / unclear
**pattern flag:** [NEW PATTERN] or — 
**notes:** [anything worth flagging for language improvement]

---
