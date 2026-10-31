# Learning Sprint 3 Problem 5

## Team 54

A visualization of a Login Side Channel Vulnerability

---

This visualization simulates a website whose login page does not bother hashing a password for verification if the provided email is incorrect.

Note the amount of time it takes to process if the email is incorrect compared to the time it would take if the email was accepted (say, `test@email.com`). By observing this time difference, an attacker can identify which emails are associated with this website&mdash;knowledge which can prove to be a victim's detriment.
