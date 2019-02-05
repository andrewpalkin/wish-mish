const dateDiff = (dateA, dateB) => {
  const publishedDate = dateA.toDate();
  const units = [
    { size: 60 * 60 * 24, name: " days " },
    { size: 60 * 60, name: " hours " },
    { size: 60, name: " minutes " },
    { size: 1, name: " seconds " }
  ];
  const result = (dateB.getTime() - publishedDate.getTime()) / 1000;
  const unit = units.find(unit => result >= unit.size);
  if (result && unit) return Math.floor(result / unit.size) + unit.name;
};

export default dateDiff;
