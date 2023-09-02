export const getDate = (date: string) => {
  if (date) {
    const newDate = date?.split("T")[0].split("-");
    return `${newDate[0]}년 ${newDate[1]}월 ${newDate[2]}일`;
  }
  return "";
};

export const getMonthAndDay = (date: string) => {
  if (date) {
    const newDate = date?.split("T")[0].split("-");
    return `${newDate[1]}월 ${newDate[2]}일`;
  }
  return "";
};

export const getRemainDay = (date: string) => {
  const now = new Date();
  const newDate = date?.split("T")[0].split("-").map(Number);
  const endDate = new Date(newDate[0], newDate[1], newDate[2]);
  const curDate = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
  );

  const diff = endDate.getTime() - curDate.getTime();
  const diffDays = diff / (1000 * 60 * 60 * 24);

  return diff < 0 ? ` + ${Math.abs(diffDays)}` : ` - ${Math.abs(diffDays)}`;
};

export const getTime = (date: string) => {
  if (date) {
    const newTime = date?.split("T")[1].split(":").map(Number);
    if (newTime[0] === 0) {
      if (newTime[1] < 10) {
        const min = `${newTime[1].toString()}`;
        return `오전 12:0${min}`;
      }
      if (newTime[1] > 10) {
        const min = `${newTime[1]}`;
        return `오전 12:${min}`;
      }
    }
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
    if (newTime[0] === 12) {
      if (newTime[1] < 10) {
        const min = `${newTime[1].toString()}`;
        return `오후 12:0${min}`;
      }
      if (newTime[1] > 10) {
        const min = `${newTime[1]}`;
        return `오후 12:${min}`;
      }
    }
  }
  return "";
};
