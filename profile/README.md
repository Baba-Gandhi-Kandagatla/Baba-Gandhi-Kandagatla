# Maintaining Baba Gandhi’s profiles

Start here when a role, project, qualification, or contact detail changes. The portfolio reads these files each time it builds. GitHub profile prose, LinkedIn, and the resume are edited separately.

| When updating | Where to edit |
| --- | --- |
| Bio, contact, education, experience, skills, awards, leadership, paper or patent application | [career.ts](career.ts). Use `intro` for a brief introduction and `summary` for a longer bio. |
| Project description, personal contribution, stack, adoption, links or screenshots | [projects.ts](projects.ts). Each project has a short mobile description, a longer description, one highlight, and detail sections. |
| Recommendation wording, author, relationship or order | [recommendations.ts](recommendations.ts). Keep quotations verbatim. The first two appear first on phones. |
| GitHub profile introduction | [Root README](../README.md). GitHub displays it on the profile. Individual project READMEs belong in the repositories linked from the project records. |
| Downloadable resume | Replace [the root PDF](../Baba_Gandhi_Kandagatla_Resume.pdf) using the same filename. Both download buttons use this file. |
| Covers and product evidence | [Public assets](../public/). Keep project UI screenshots in the detail galleries. The [cover prompts](cover-prompts.json) describe the illustration set. |
| Portfolio layout and deployment | [Page builder](../scripts/build.mjs), [styles and interactions](../app/), [Pages workflow](../.github/workflows/pages.yml). The workflow builds on the default branch and uploads `dist/`. |

## Reuse the content

- **LinkedIn:** Start the headline with the title in `personalInfo`. Adapt the summary for About, use the dated experience entries for roles, and use each project’s description, contribution, and repository link for Projects. Keep internal college usage separate from simulated test sessions. List the Indian filing as a published application. [LinkedIn profile](https://www.linkedin.com/in/baba-gandhi-kandagatla)
- **Resume:** Select experience and projects for the target role. Check dates, CGPA, ownership, research status, and quantified results against the career and project files before replacing the PDF. The [editable LaTeX source](../resume/main.tex) is tracked in Git and predates the current PDF. Reconcile its CGPA, project claims, patent status, and community figures against the profile records before exporting a replacement.
- **Another portfolio:** Run `npm run --silent profile:export > /tmp/baba-profile.json` from the repository root for plain JSON with the bio, work history, projects, research, and recommendations. Image paths in the export resolve relative to [public/](../public/). Copy the assets required by the new site and preserve their alt text.

## Track a change

1. Edit the relevant source and update the affected destinations. For example, a title change usually touches the career record, GitHub introduction, LinkedIn headline and experience, and resume.
2. Use Node 24 (or Node 22.18+) and run `npm run build`. For local review, `npm run dev` builds and serves the site at `http://127.0.0.1:4173/` using Python 3.
3. Review the diff and commit from this folder. Include the destinations updated and any manual follow-up in the commit message. For example, `Update role in portfolio and resume; LinkedIn pending`. Use `git log -- profile README.md Baba_Gandhi_Kandagatla_Resume.pdf` for the history.
4. After pushing, check the Pages run. For edits made outside Git, record the date and destination in [channel-updates.md](channel-updates.md) once the edit is verified.
