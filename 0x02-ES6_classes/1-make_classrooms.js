import ClassRoom from './0-classroom';

export default function initializeRoom() {
  const sizes = [19, 20, 34];
  const classArr = [];

  for (let size of sizes) {
    classArr.push(new ClassRoom(size));
  }
  return classArr;
}
