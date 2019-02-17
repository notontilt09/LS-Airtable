# LS-Airtable
A definitely unnecessary helper to save you about 5 seconds while filling out your standup forms.  Currently only Chrome browser supported.

## Instructions
1. Clone the repo down to your local computer
2. cd into the LS-Airtable directory
3. Run `yarn` to download dependencies
4. Add your first and last names to the `name` const on line 4 of index.js
5. Run `yarn server` and watch the magic happen.


## Troubleshooting
Everything should work out of the box, however errors on Airtable servers can cause the helper to timeout.  If the Airtable form isn't loading because 1000's of us are trying to load the same page, you can just run `rs` to restart the server and try to get lucky the next time.  Unfortunately, this will create a new instance of chrome for each server restart.