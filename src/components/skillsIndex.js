const frontend = ['html5','css3','javascript','sass','bootstrap','react'];
const backend = ['ruby','rails','postgresql'];
const other = ['git','github','heroku','webpack','photoshop','illustrator'];

function gatherImages(skillNames, images, type) {
  skillNames.forEach((skillName, i) => {
    images.push({
      id: i + 1,
      source: `skills/${type}/${skillName}.svg`,
      name: skillName
    });
  });
}
// window.location.href

const frontendImages = [];
const backendImages = [];
const otherImages = [];

gatherImages(frontend, frontendImages, 'frontend');
gatherImages(backend, backendImages, 'backend');
gatherImages(other, otherImages, 'other');

export { frontendImages, backendImages, otherImages }
