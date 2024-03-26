import express from "express";
import dotenv from "./dotenv.js";
dotenv.config();
export const app = express();

const PORT = process.env.PORT;

const items = [
  {
    id: 1,
    content: "Item 1",
  },
];

// GET items
app.get("/items", (req, res) => {
  return res.json(items);
});

// GET items/:id
app.get(`/items/:id`, (req, res) => {
  const { id } = req.params;
  const idItem = items.filter((item) => item.id === id);
  return res.json(idItem);
});

// POST items

// UPDATE items

// DELETE items

app.listen(PORT, () => {
  console.log(`Server running successfully on PORT ${PORT}`);
});
