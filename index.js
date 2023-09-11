import express from 'express';
const app = express();

app.get('/getInfo', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  const currentUTC = new Date().toISOString();
  const response = {
    slack_name: slackName,
    current_day: new Date().toLocaleDateString('en-US', { weekday }),
    utc_time: currentUTC,
    track: track,
    github_file_url:
      'https://github.com/MahijithMenon/stage-1-HNGx-Internship/blob/main/index.js',
    github_repo_url: 'https://github.com/MahijithMenon/stage-1-HNGx-Internship',
    status_code: 200,
  };
  res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
