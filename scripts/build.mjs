import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { projects } from '../app/data/projects.ts';
import { personalInfo as person, skills, experiences, publications, patents, leadership, achievements } from '../app/data/Personal_info.ts';
import { recommendations, recommendationsUrl } from '../app/data/recommendations.ts';

const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const paths = {
  pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  moon:'<path d="M20 15a9 9 0 0 1-11-12 9 9 0 1 0 11 12Z"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  branch:'<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="6" r="2"/><path d="M6 7v10m0-2c7 0 12-1 12-7"/>',
  pulse:'<path d="M2 12h5l3-7 4 14 3-7h5"/>'
};
const icon = key => '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+paths[key]+'</svg>';
const tags = items => '<ul class="tags">'+items.map(x => '<li>'+esc(x)+'</li>').join('')+'</ul>';
const list = items => '<ul>'+items.map(x => '<li>'+esc(x)+'</li>').join('')+'</ul>';
const title = p => ({skillsage:'SkillSage', 'skill-forge':'SkillForge', 'quiz-generator':'QuizCraft'}[p.id] || p.title);
const image = (i, lazy = true) => '<img src="'+esc(i.src)+'" alt="'+esc(i.alt)+'" '+(lazy?'loading="lazy"':'')+' decoding="async">';
function galleryItem(i) {
  return `<figure><a class="zoom" href="${esc(i.src)}" aria-label="Enlarge: ${esc(i.alt)}">${image(i)}</a><figcaption>${esc(i.caption || i.alt)}</figcaption></figure>`;
}
function card(p) {
  const lead = p.placement === 'featured';
  const category = p.projectType || ({'breast-cancer-detection':'Applied research', 'ou-grade-retrieval':'Automation', 'quiz-generator':'Applied AI', 'birthday-app':'Personal project'}[p.id]);
  return `<article class="card${lead ? ' featured' : ''}" id="${p.id}">
  <div class="card-copy"><div class="project-heading"><div><small>${lead?'Featured project · AI interview platform':esc(category)}</small>
  <h3>${esc(title(p))}</h3></div><div class="cover art">${image(p.coverImage,!lead)}</div></div>
  <p>${esc(p.description)}</p><p class="highlight">${icon('pulse')}${esc(p.highlight)}</p>${tags(p.techStack)}<div class="actions">
  <button class="details-button" aria-haspopup="dialog" aria-controls="detail-${p.id}">View details</button>
  <a href="${esc(p.links.github)}" aria-label="${esc(title(p))} on GitHub">${icon('branch')} GitHub</a></div></div></article>`;
}
function projectDialog(p) {
  return `<dialog class="project-dialog" id="detail-${p.id}" aria-labelledby="title-${p.id}">
    <div class="dialog-bar"><h2 id="title-${p.id}">${esc(title(p))}</h2><form method="dialog"><button autofocus aria-label="Close project details">Close</button></form></div>
    <div class="dialog-body"><p class="project-intro">${esc(p.description)}</p>
    <div class="gallery-heading"><h3>Product screenshots</h3>
    ${p.details.images.length > 1 ? '<div class="gallery-controls"><button type="button" data-step="-1" aria-label="Previous screenshot">‹</button><button type="button" data-step="1" aria-label="Next screenshot">›</button></div>' : ''}</div><div class="gallery">${p.details.images.map(galleryItem).join('')}</div>
    <h3>Technical details</h3>${tags(p.details.techStack)}
    ${p.details.sections.map(s=>`<h4>${esc(s.title)}</h4>${s.text?'<p>'+esc(s.text)+'</p>':''}${s.items?list(s.items):''}`).join('')}
    <a href="${esc(p.links.github)}">View repository on GitHub</a></div></dialog>`;
}
const pub = publications[0], patent = patents[0], edu = person.education[0];
function recommendationCard(r) {
  const start = r.excerpt.indexOf(r.highlight);
  if (start < 0) throw new Error(`Missing highlighted phrase in ${r.author}’s excerpt`);
  const before = r.excerpt.slice(0, start);
  const after = r.excerpt.slice(start + r.highlight.length);
  const initials = r.author.split(' ').map(part => part[0]).join('');
  const context = r.relationship ? r.relationship.split(';')[0] + ' at ' + r.organization : 'Worked together at ' + r.organization;
  return `<a class="recommendation" href="${esc(recommendationsUrl)}" aria-labelledby="author-${r.id} source-${r.id}">
    <blockquote>“${esc(before)}<mark>${esc(r.highlight)}</mark>${esc(after)}”</blockquote>
    <span class="attribution"><span class="initials" aria-hidden="true">${esc(initials)}</span>
    <span><strong id="author-${r.id}">${esc(r.author)}</strong><span class="relationship">${esc(context)}</span></span></span>
    <span class="recommendation-source" id="source-${r.id}">View recommendations on LinkedIn</span></a>`;
}
const fold = (name,body) => `<details><summary>${esc(name)}</summary><div class="fold">${body}</div></details>`;
const resumePath = './resume/Baba_Gandhi_Kandagatla_Resume.pdf';
const resumeButton = `<a class="outline" href="${resumePath}" download>Download resume <span class="file-type">PDF</span></a>`;
const featuredProject = projects.find(p => p.placement === 'featured');
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${person.name} · Software Engineer</title><meta name="description" content="Backend services, cloud infrastructure and applied AI projects by Baba Gandhi Kandagatla.">
<link rel="icon" href="data:,"><script src="theme.js"></script><link rel="stylesheet" href="style.css"><script defer src="site.js"></script></head>
<body id="top"><a class="skip" href="#main">Skip to content</a><header><div class="wrap bar"><a class="brand" href="#top"><span class="mark">bg<span>.</span></span>Baba Gandhi</a>
<nav aria-label="Main"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
<button id="theme" aria-label="Dark theme" aria-pressed="false">${icon('sun')}${icon('moon')}</button></div></header>
<main id="main" class="wrap"><section class="hero"><div><small class="role"><i></i>${person.title}</small><h1>Baba Gandhi<br><em>Kandagatla.</em></h1>
<p class="intro">I build backend services and cloud infrastructure at <strong>Nasuni</strong>. My projects explore applied AI, from adaptive interviews to learning tools.</p>
<div class="hero-links"><a class="primary" href="#projects">${icon('layers')}View projects</a>${resumeButton}</div></div>
<figure class="portrait"><div class="mat"><div class="photo"><img src="./img/profile.jpeg" alt="Baba Gandhi Kandagatla"></div></div><figcaption>${icon('pin')}${person.location}</figcaption></figure></section>
<section id="projects" class="section"><div class="heading"><h2>Selected projects</h2><span>${projects.length} projects</span></div>${card(featuredProject)}<div class="grid">${projects.filter(p => p !== featuredProject).map(card).join('')}</div></section>
<section class="section" id="experience"><h2>Experience</h2>${experiences.map(e=>`<article class="job"><div><small>${esc(e.duration)}</small><h3>${esc(e.organization)}</h3></div><div><h4>${esc(e.title)}</h4>${list(e.description.split('•').map(x=>x.trim()).filter(Boolean))}</div></article>`).join('')}
</section>
<section class="section" id="recommendations" aria-labelledby="recommendations-heading"><h2 id="recommendations-heading">LinkedIn recommendations</h2>
<div class="recommendation-grid">${recommendations.map(recommendationCard).join('')}</div></section>
<section class="section" id="about"><div class="about-lead"><div><h2>About me</h2><p>${esc(person.summary)}</p></div>
<article class="degree"><small>Education · 2022–2026</small><h3>${esc(edu.degree)}</h3><p>${esc(edu.institution)}</p><div class="grade"><strong>${esc(edu.gpa)}</strong> CGPA</div></article></div>
<div class="about-row"><h3>Research</h3><div class="research-list"><article><small>${pub.conference} · ${pub.date}</small>
<h4><a href="${pub.publicationUrl}">${esc(pub.title)}</a></h4><p>${esc(pub.contribution)}</p>
${fold('Authors and certificate',`<p>${esc(pub.authors.join(', '))}</p><a href="${pub.certificateImage}">Presentation certificate</a>`)}
</article><article><small>Published patent application · India</small><h4>${esc(patent.title)}</h4><p>Application ${patent.applicationNumber} · Filed ${patent.filingDate}</p></article></div></div>
<div class="about-row"><h3>Technical skills</h3><div class="skill-list">${skills.map(s=>`<div><h4>${esc(s.category)}</h4><p>${esc(s.items.join(' · '))}</p></div>`).join('')}</div></div>
<div class="about-row"><h3>Recognition</h3><div class="recognition-list">${achievements.filter(x=>['utkrishti-puraskar','recognition-result-automation','hackathon-enginerd-kmit'].includes(x.id)).map(x=>`<article><small>${esc(x.date)}</small><h4>${esc(x.title)}</h4><p>${esc(x.description)}</p></article>`).join('')}
</div></div>
<div class="community"><h3>Community roles</h3><div class="community-grid">${leadership.map(role => `<article><small>${esc(role.duration)}</small><h4>${esc(role.organization)}</h4><p class="community-role">${esc(role.title)}</p><p>${esc(role.description)}</p></article>`).join('')}</div></div></section>
<section id="contact" class="contact-panel"><div><h2>Get in touch</h2><p>I’d love to hear about backend engineering, cloud infrastructure, or applied AI work.</p>
<a class="email-link" href="mailto:${person.email}">${icon('mail')}${esc(person.email)}</a></div>
<div class="contact-links"><a href="${person.links.linkedin}">LinkedIn</a><a href="${person.links.github}">GitHub</a>${resumeButton}</div></section></main>
<footer class="wrap">${person.name}<span>${esc(person.location)}</span></footer>
${projects.map(projectDialog).join('')}
<dialog id="image-viewer" aria-labelledby="caption"><form method="dialog"><button autofocus>Close</button></form><img alt=""><p id="caption"></p></dialog></body></html>`;

const assets = new Set([resumePath,'./img/profile.jpeg',pub.certificateImage,...projects.flatMap(p=>[p.coverImage,...p.details.images].map(i=>i.src))]);
for (const path of assets) {
  const target = join('dist',path);
  await mkdir(dirname(target),{recursive:true});
  await copyFile(join('public',path),target);
}
for (const file of ['style.css','site.js','theme.js']) await copyFile(join('app',file),join('dist',file));
await writeFile('dist/index.html',html);
console.log(`Built ${projects.length} projects and ${assets.size} selected assets into dist/.`);
