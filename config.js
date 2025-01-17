const resumeData = {
    fullName: "Dinda Fariz Alamsyah",
    jobTitle: "",
    contact: {
      email: "john.doe@example.com",
      phone: "+123 456 7890",
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
    },
    summary: "Experienced software engineer with a passion for building scalable web applications.",
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
    experience: [
      {
        company: "Tech Corp",
        position: "Senior Software Engineer",
        duration: "Jan 2020 - Present",
        description: "Led a team of developers to build scalable web applications.",
      },
      {
        company: "Startup Inc",
        position: "Software Engineer",
        duration: "Jun 2017 - Dec 2019",
        description: "Developed and maintained REST APIs and front-end applications.",
      },
    ],
    education: [
      {
        institution: "University of Tech",
        degree: "Bachelor of Science in Computer Science",
        year: "2017",
      },
    ],
  };
  
  // Export the data for use in other files
  export default resumeData;

make cv/resume variables on config.js with declaration on HTML side.

Make html below into javascript populate based on cv/resume above 

<article class="resume-timeline-item position-relative pb-5">
<div class="resume-timeline-item-header mb-2">
    <div class="resume-position-meta d-flex justify-content-between mb-1">
        <div class="resume-position-time">2019 - 2023</div>
        <div class="resume-company-name">Meta</div>
    </div>
    <h3 class="resume-position-title mb-1">Senior App Developer</h3>
</div>
<div class="resume-timeline-item-desc">
    <ul class="resume-timeline-list">
        <li>Fill with data 1</li>
        <li>Fill with data 2</li>
        <li>Fill with data 3</li>
    </ul>
</div>
</article>

Make html below into javascript populate based on cv/resume above 

<ul class="list-unstyled">
<li class="mb-2">
	<div class="resume-skill-name">JavaScript</div>
	<div class="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
		<div class="progress-bar resume-progress-bar" style="width: 98%"></div>
	</div>
</li>
<li class="mb-2">
	<div class="resume-skill-name">ReactJS</div>
	<div class="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
		<div class="progress-bar resume-progress-bar" style="width: 95%"></div>
										        
</li>
<li class="mb-2">
	<div class="resume-skill-name">Python</div>
	<div class="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
		<div class="progress-bar resume-progress-bar" style="width: 92%"></div>
	</div>
</li>
<li class="mb-2">
	<div class="resume-skill-name">MongoDB</div>
	<div class="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">
		<div class="progress-bar resume-progress-bar" style="width: 86%"></div>
	</div>
</li>
</ul>

Make html below into javascript populate based on cv/resume above 


<ul class="list-inline">
	<li class="list-inline-item"><span class="badge resume-skill-badge">Leadership</span></li>
	<li class="list-inline-item"><span class="badge resume-skill-badge">Project Management</span></li>								            
	<li class="list-inline-item"><span class="badge resume-skill-badge">DevOps</span></li>
	<li class="list-inline-item"><span class="badge resume-skill-badge">Public Speaking</span></li>		           
</ul>


Make html below into javascript populate based on cv/resume above 

<section class="resume-projects-section resume-section">
<h3 class="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i class="resume-section-heading-icon bi bi-code-slash me-2"></i>Projects</h3>
<div class="item">
	<h4 class="item-heading"><i class="item-icon bi bi-square-fill me-2"></i><a href="#">Project lorem Ipsum</a></h4>
	<div class="item-desc">
		Project desc goes here aenean ut libero sit amet ante fermentum scelerisque non a leo.
	</div>
</div><!--//item-->
<div class="item">
	<h4 class="item-heading"><i class="item-icon bi bi-square-fill me-2"></i><a href="#">Volutpat App</a></h4>
	<div class="item-desc">
		You can link to your project Github page.
	</div>
</div><!--//item-->
</section>

Make html below into javascript populate based on cv/resume above 

<ul class="list-unstyled">
	<li class="mb-2">
		<div class="resume-degree font-weight-bold">MSc in Computer Science</div>
		<div class="resume-degree-org">Oxford University</div>
		<div class="resume-degree-time">2016 - 2017</div>
	</li>
	<li>
		<div class="resume-degree font-weight-bold">BSc Maths and Physics</div>
		<div class="resume-degree-org">University of California, Berkeley</div>
		<div class="resume-degree-time">2012 - 2016</div>
	</li>
</ul>

Make html below into javascript populate based on cv/resume above 


<ul class="list-unstyled resume-lang-list">
	<li class="mb-2">
		<div class="resume-lang-name">English</div>
		<div class="resume-level-indicator row gx-0 flex-nowrap">
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-half"></span></div>
		</div><!--//resume-level-indicator-->
	</li>
		<li class="mb-2">
		<div class="resume-lang-name">Spanish</div>
		<div class="resume-level-indicator row gx-0 flex-nowrap">
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-full"></span></div>
			<div class="col"><span class="item item-half"></span></div>
			<div class="col"><span class="item"></span></div>
		</div><!--//resume-level-indicator-->
	</li>
</ul>