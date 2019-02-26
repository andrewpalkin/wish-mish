const offerPerUserExist = (offersList, userId) => {
  var i = offersList && offersList.length;
  while (i--) {
    if (offersList[i].userId === userId) {
      return true;
    }
  }
  return false;
};

export default offerPerUserExist;
