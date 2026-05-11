import express from "express";
import cors from "cors";
import path from "path";

import {
  renderMedia,
  selectComposition,
} from "@remotion/renderer";

import { bundle } from "@remotion/bundler";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    online: true,
  });
});

app.post("/render", async (req, res) => {
  try {
    const {
      language = "en",
    } = req.body;

    const bundled = await bundle({
      entryPoint: path.resolve(
        "./src/index.ts"
      ),
    });

    const composition =
      await selectComposition({
        serveUrl: bundled,

        id: "BoyWave",

        inputProps: {
          language,
        },
      });

    const outputLocation = path.resolve(
        `./out/${language}-${Date.now()}.mp4`
      );

    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: "h264",
      outputLocation,
      inputProps: {
        language,
      },
    });

    res.json({
      success: true,

      video: outputLocation,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Render failed",
    });
  }
});

app.listen(3000, () => {
  console.log(
    "Render API running on port 3000"
  );
});