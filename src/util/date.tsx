export const getDate = (itemDate: string) => {
  if (itemDate) {
    const newDate = itemDate?.split("T")[0].split("-");
    return `${newDate[0]}년 ${newDate[1]}월 ${newDate[2]}일`;
  }
  return "";
};

export const getTime = (itemDate: string) => {
  if (itemDate) {
    const newTime = itemDate?.split("T")[1].split(":").map(Number);
    if (newTime[0] < 12) {
      const hour = `오전 ${newTime[0]}`;
      if (newTime[1] < 10) {
        const min = `${newTime[1].toString()}`;
        return `${hour}:0${min}`;
      }
      if (newTime[1] > 10) {
        const min = `${newTime[1]}`;
        return `${hour}:${min}`;
      }
    }
    if (newTime[0] > 12) {
      const hour = `오후 ${newTime[0] - 12}`;
      if (newTime[1] < 10) {
        const min = `${newTime[1].toString()}`;
        return `${hour}:0${min}`;
      }
      if (newTime[1] > 10) {
        const min = `${newTime[1]}`;
        return `${hour}:${min}`;
      }
    }
  }
  return "";
};
