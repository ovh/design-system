# Status Message

The Status Message is used to share contextual information with users while offering an optional action.

## Variants

### Information

The Information Status Message is used to display non-blocking, contextual information to the user,
accompanied by an optional action they can take if needed.
It includes a clear title, a descriptive text, and a button that allows the user to access additional details
or perform a secondary task. Use this pattern when you want to inform the user about something relevant but non-urgent,
while offering a convenient action that can help them continue or learn more.

Recommended icon to use: `ICON_NAME.circleInfo`

Message variant to use: `MESSAGE_COLOR.information`

### Success

The Success Status Message is used to confirm that an action, process, or task has been completed successfully.
It includes a success title, an explanation of what worked, and a button that enables the user to perform a follow-up
action (e.g., "view results", "undo").

Recommended icon to use: `ICON_NAME.circleCheck`

Message variant to use: `MESSAGE_COLOR.success`

### Warning

The Warning Status Message is used to draw attention to situations that are unusual or potentially problematic but not
critical. It contains a warning title, a description explaining the potential issue, and a button that allows the user
to review or fix the situation if needed. Use this Message when something is unusual or potentially problematic and
you want to alert the user while giving an optional action to mitigate or investigate the issue.

Recommended icon to use: `ICON_NAME.triangleExclamation`

Message variant to use: `MESSAGE_COLOR.warning`

### Critical

The Critical Status Message signals an error or a blocking situation that requires immediate attention. It includes a
clear critical title, a description of what is wrong, and an action button that guides the user toward resolving the
issue (e.g., "retry", "contact support"). Use this pattern whenever the user must take corrective action, or when the
system encounters a severe problem that impacts functionality or data integrity.

Recommended icon to use: `ICON_NAME.hexagonExclamation`

Message variant to use: `MESSAGE_COLOR.critical`
