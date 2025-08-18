# MOCHA-PAM-SHOP

Repository skeleton for the Perfect Art Match **Shop**. This is the working repo for **Obi** and collaborators.

## Structure
```
forms/        # Sign-In + Submission forms (Formspree)
gallery/      # Auto gallery scripts + data
branding/     # Logo assets, colors, typography
docs/         # Policies, flows, copy
.github/      # Issue templates & workflows (optional)
```
## Quick start (for Obi)
1. Create a new GitHub repository (public or private).
2. Upload this folder structure (drag & drop the ZIP contents).
3. Configure **Formspree** endpoint in `forms/artist-submission.html` and `forms/artist-signin.html`.
4. Push changes. The gallery can be built statically (no backend) and deployed on GitHub Pages.

## Core rules
- Up to **10 artworks** per submission. After 10 → artist pays **10 CHF** via PayPal to `inazurichpam@protonmail.com`.
- Submissions appear **immediately** in the public gallery.
- If no payment in **3 days**, artworks **may be hidden/removed** manually. After payment, they can be reactivated without re-upload.
- Notification to `perfectartmatch@gmail.com` when the 10th artwork is reached or payment is mentioned.

## Tasks
- [ ] Connect Formspree form IDs
- [ ] Hook auto-gallery to forms (JSON output)
- [ ] Add moderation toggle (hide/show/reactivate)
- [ ] Add filters (artist, category, newest)
