export default async (req, res) => {
  try {
    const file = req.files.file;
    const apiKey = "1ik9m1MytHv1TWAf";

    const formData = new FormData();
    formData.append("file", file.data, file.name);
    formData.append("outputformat", "docx");

    const response = await fetch(
      `https://v2.convertapi.com/convert/pdf/to/docx?apikey=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Conversion failed");
    }

    const json = await response.json();
    const downloadUrl = json.Files[0].Url;

    res.json({ url: downloadUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send("Conversion failed");
  }
};
