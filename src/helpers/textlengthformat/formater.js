export const formatText = (text) => {
  let data = text.split("");
  let str = "";
  if (data.length > 38) {
    for (let i = 0; i < 38; i++) {
      if (i === 37) {
        str += "...";
        break;
      }
      str += data[i];
    }

    return str;
  } else {
    return text;
  }
};
