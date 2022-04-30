import app from "./app";

const PORT = process.env.PORT || 3000
const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}/`

app.listen(PORT, () => {
  console.log(`App is running on ${baseUrl} 🚀`)
})