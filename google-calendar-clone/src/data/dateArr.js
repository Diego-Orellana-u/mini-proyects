import dayjs from "dayjs";

export default function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const firstDay = dayjs(new Date(year, month, 1)).day();

  let pastMonth = 0 - firstDay;

  const monthArr = [[], [], [], [], []].map(() =>
    [[null], [null], [null], [null], [null], [null], [null]].map(() => {
      pastMonth++;
      return dayjs(new Date(year, month, pastMonth));
    })
  );
  return monthArr;
}
