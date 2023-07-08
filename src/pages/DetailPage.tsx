import React from 'react';
import BasePaper from '../components/atoms/BasePaper';
import { Box, Button, Divider, Grid, Link, Typography } from '@mui/material';
import parse from 'html-react-parser';
import { ChevronLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function DetailPage() {
  const navigate = useNavigate();

  const data = {
    id: '32bf67e5-4971-47ce-985c-44b6b3860cdb',
    type: 'Full Time',
    url: 'https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb',
    created_at: 'Wed May 19 00:49:17 UTC 2021',
    company: 'SweetRush',
    company_url: 'https://www.sweetrush.com/',
    location: 'Remote',
    title: 'Senior Creative Front End Web Developer',
    description:
      "<p><strong>SweetRush has an exciting opportunity for an experienced creative front-end developer (full stack is also acceptable) with an eye for graphic and UX design!</strong></p>\n<p><strong>ABOUT THE ROLE:</strong></p>\n<p>This is an important role on the Engineering and Development department’s Course Development team, and you will be reporting directly to the Course Development team lead.</p>\n<p>Historically, the developers most successful in this role contribute to multiple projects at the same time; show a willingness to improve existing techniques, frameworks, and templates; and come up with innovations of their own. You will succeed if you truly enjoy active collaboration with your colleagues and don’t mind stepping in when your help is required.</p>\n<p>This is a remote position and a great opportunity to work from home. Candidates from all geographic locations are welcome to apply; however, our development team is mostly based in North and Latin America, and you should be willing to work during our business hours.</p>\n<p><strong>REQUIRED SKILLS:</strong></p>\n<p><strong>Front end</strong></p>\n<ul>\n<li>7+ years as a front-end or full-stack developer in a creative environment</li>\n<li>Expert-level JavaScript skills—Vanilla JS expertise is as important as the knowledge of frameworks and libraries</li>\n<li>High level of competency in HTML5 and CSS3</li>\n<li>Familiarity with one or more frameworks, preferably <strong>React and Node.js</strong>\n</li>\n<li>While React is the most commonly used framework at the moment, your proven ability to quickly harness unfamiliar technology is more important than an intimate knowledge of any of the given frameworks.</li>\n<li><strong>Most importantly - you can look at just about any cool effect, interaction, animation, parallax, website on the web, and say - Even if I can’t do this now, I want to try!</strong></li>\n<li>Understanding of responsive design and mobile-first principles</li>\n</ul>\n<p><strong>Soft skills and generic productivity tools</strong></p>\n<ul>\n<li>Ability to clearly communicate in English</li>\n<li>English verbal communication skills are an absolute must because the position requires frequent interaction with peers and clients.</li>\n<li>Experience with version control systems such as Git or Subversion</li>\n<li>Experience working in a team development environment or demonstrating a capacity to do so</li>\n<li>Enjoy learning and experimenting, open to new ideas</li>\n</ul>\n<p><strong>YOU WILL IMPRESS EVERYONE IF YOU:</strong></p>\n<ul>\n<li>Have built a learning simulation</li>\n<li>Have experience with mobile app development and distribution</li>\n<li>Have experience with graphic and UX design</li>\n<li>Know anything about Adapt Framework</li>\n</ul>\n<p><strong>YOU MAY BE EXPECTED TO:</strong></p>\n<ul>\n<li>Complete a test assignment</li>\n<li>Be interviewed by a number of highly judgmental yet supremely talented future colleagues</li>\n</ul>\n<p><strong>THE ESSENCE OF THE JOB</strong></p>\n<p>OK, now that you’ve made it through all the obligatory language, you may be wondering what this position is really all about. Therefore, please read the rest of this job description carefully!</p>\n<p>It all boils down to your ability to make a simple claim: <strong>I can do it!</strong></p>\n<p>If we show you an interactive website with intricate animations, a complicated menu system, and multiple interdependencies, you should state: <strong>I can do it!</strong></p>\n<p>If we need to harness a complex web-based gaming engine and use it for the first time to build a learning simulation, you should confidently assert: <strong>I can do it!</strong></p>\n<p>If we need to produce a large volume of digital training materials in a record short period of time, you should answer: <strong>I can do it!</strong></p>\n<p>And if we need an adventurous engineer to lead the team in the creation of a system that is completely different from everything we have done before, we’re most definitely looking for the loud <strong>I can do it!</strong></p>\n<p>And even more importantly, you must <strong>want to do it</strong>.</p>\n<p>SweetRush is a team of winners. These are not empty words. Just check out our impressive industry trophy shelf, which includes this recent success: <a href=\"https://www.sweetrush.com/sweetrush-wins-16-awards-brandon-hall-awards-2020\">https://www.sweetrush.com/sweetrush-wins-16-awards-brandon-hall-awards-2020</a>.</p>\n<p>As a winner, you will always want the ball. Want to do better. Want to be more creative and efficient. Join us, and let's see if we can win even more by working together!</p>\n<p>This is a work-from-home opportunity! We are 100% virtual, and all communications occur over digital channels (Skype/Web Share/email), apart from infrequent on-site meetings. Occasional travel may be required.</p>\n<p><strong>Please note: We're all about remote work and have collaborators based all around the world; however, SweetRush is a US-based company, and English is our primary language. If you'd like to be considered for this opportunity, please submit your resume in English.</strong></p>\n",
    how_to_apply:
      '<p>If this describes your interests and experience, please submit your current resume and salary requirements through the following link:\n<a href="https://www.sweetrush.com/join-us/">https://www.sweetrush.com/join-us/</a></p>\n',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--82886ff47e94ff4c0255b95773a9667644768b2b/SR%20Logo.png',
  };

  return (
    <>
      <Button
        sx={{ textTransform: 'none' }}
        onClick={() => {
          navigate('/');
        }}
      >
        <ChevronLeft />
        <Typography fontWeight={600}>Back</Typography>
      </Button>
      <BasePaper>
        <Typography variant="body2" fontWeight={500} color={'GrayText'}>
          {data.type} / {data.location}
        </Typography>
        <Typography variant="h5" fontWeight={600} color={''} gutterBottom>
          {data.title}
        </Typography>
        <Divider
          sx={{
            mt: 2,
          }}
        />
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={12} md={8}>
            <Box>{parse(data.description)}</Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  border: '5px solid #f5f5f5',
                }}
              >
                <Box>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {data.company}
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <img src={data.company_logo} alt={data.company} />
                <Link href={data.company_url}>{data.company_url}</Link>
              </Box>

              <Box
                sx={{
                  backgroundColor: 'lightyellow',
                  borderRadius: 2,
                  border: '5px solid #f5f5f5',
                }}
              >
                <Box>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="h6" fontWeight={600}>
                      How to Apply
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <Box sx={{ px: 1 }}>{parse(data.how_to_apply)}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </BasePaper>
    </>
  );
}

export default DetailPage;
