export function pickThree(tracksList) {
  //console.log(tracksList);
  const localThreeTracksList = [], usedNumber = [];
  let iter = 0;
  while (iter < 3) {
    const index = Math.floor(Math.random() * tracksList.length);
    if (usedNumber.includes(index)) {
      continue;
    } else {
      usedNumber.push(index);
    }
    localThreeTracksList.push(tracksList[index]);
    iter++;
  }
  //  console.log(localThreeTracksList);
  //   this.setState({
  //     threeTracksList: localThreeTracksList.slice()
  //   });
  return localThreeTracksList
}
  
