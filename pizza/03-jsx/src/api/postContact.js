export default async function postContact(name, email, message) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res) {
    throw new Error("Network response was not ok. Send help");
  }

  return res.json();
}
