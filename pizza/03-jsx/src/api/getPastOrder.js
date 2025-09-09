export default async function getPastOrder(order) {
  await new Promise((res) => setTimeout(res, 5000));
  const res = await fetch(`/api/past-order/${order}`);
  const data = res.json();
  return data;
}
