export const getCurrentDate = (timeString: Date) => {
  const time = new Date(timeString);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  const fillNumberByZero = (number: number) => number.toString().padStart(2, '0');

  return `${year}년${fillNumberByZero(month)}월${fillNumberByZero(date)}일 ${fillNumberByZero(hours)}시${fillNumberByZero(minutes)}분${fillNumberByZero(seconds)}초`;
}

export const isOverDeadline = (deadline: Date) => new Date(deadline).getTime() < Date.now();
