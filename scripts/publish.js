const ghpages = require('gh-pages');

console.log('Start to publish...');

ghpages.publish('build', {
  repo: "git@github.com:Joouis/fingerboard-mate.git"
}, err => {
  if (err) {
    console.log(err);
  }

  console.log('Published!');
});