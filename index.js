const express = require("express");
const app = express();
const { getAll, getOne, create, update, remove } = require("./employee");
app.use(express.json());

app.get("/api/employees", getAll);

app.get("/api/employees/:empId", getOne);

app.post("/api/employees", create);

app.put("/api/employees/:empId", update);

app.delete("/api/employees/:empId", remove);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
