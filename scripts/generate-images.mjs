import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const apiKey = process.env.API_KEY;
const modelId = process.env.MODEL_ID;

if (!apiKey || !modelId) {
  throw new Error("Missing API_KEY or MODEL_ID in .env");
}

const client = new OpenAI({
  baseURL: "https://ark.cn-beijing.volces.com/api/v3",
  apiKey,
});

const outputDir = path.resolve(process.cwd(), "public", "images");

const styleBase =
  "Professional automotive maintenance photography, clean workshop environment, neutral blue-gray color palette, consistent visual language, realistic lighting, medium contrast, educational framing, no text overlay, no logo.";

const scenes = [
  {
    file: "hero-transmission-fluid-check.png",
    prompt:
      "A mechanic in gloves checking automatic transmission fluid with dipstick in a modern engine bay, clear fluid visibility, detailed components, instructional perspective. " +
      styleBase,
  },
  {
    file: "step-1-warm-up-and-safety.png",
    prompt:
      "Car parked on level ground in workshop, hood open, wheel chock and parking brake context, safety-first maintenance setup before inspection. " +
      styleBase,
  },
  {
    file: "step-2-locate-dipstick-or-port.png",
    prompt:
      "Close-up of transmission dipstick handle and nearby service points in engine bay, hand pointing to correct inspection location. " +
      styleBase,
  },
  {
    file: "step-3-read-level-and-condition.png",
    prompt:
      "Technician wipes and rechecks transmission dipstick, visible fluid film on marked level area, precise maintenance process. " +
      styleBase,
  },
  {
    file: "step-4-fluid-color-chart.png",
    prompt:
      "Neat arrangement of transmission fluid samples from clean red/amber to dark brown, with neutral lab-like background and inspection tools. " +
      styleBase,
  },
  {
    file: "step-5-top-up-with-funnel.png",
    prompt:
      "Small funnel used to add transmission fluid carefully into service tube, controlled pour in clean engine bay, precision maintenance action. " +
      styleBase,
  },
  {
    file: "lt-sealed-transmission-check.png",
    prompt:
      "Vehicle raised safely on lift, technician checking sealed transmission service plug and fluid level procedure, undercarriage angle. " +
      styleBase,
  },
  {
    file: "lt-cvt-inspection.png",
    prompt:
      "Technician inspecting CVT transmission fluid procedure with scan tool and service equipment, modern vehicle, accurate workshop setup. " +
      styleBase,
  },
  {
    file: "lt-hot-vs-cold.png",
    prompt:
      "Side-by-side conceptual maintenance scene comparing hot and cold transmission fluid checks, same vehicle, temperature-focused diagnostic context. " +
      styleBase,
  },
  {
    file: "lt-automatic-vs-manual.png",
    prompt:
      "Visual comparison of automatic and manual transmission fluid check workflows in one coherent workshop composition, technical but friendly. " +
      styleBase,
  },
];

await fs.mkdir(outputDir, { recursive: true });

for (const [index, scene] of scenes.entries()) {
  console.log(`[${index + 1}/${scenes.length}] Generating ${scene.file}`);
  const outputPath = path.join(outputDir, scene.file);

  try {
    await fs.access(outputPath);
    console.log(`- Skipped ${scene.file} (already exists)`);
    continue;
  } catch {
    // Continue generating if file does not exist.
  }

  const response = await client.images.generate({
    model: modelId,
    prompt: scene.prompt,
    size: "2K",
    response_format: "url",
    extra_body: {
      watermark: false,
    },
  });

  const imageUrl = response?.data?.[0]?.url;
  if (!imageUrl) {
    throw new Error(`No image URL returned for ${scene.file}`);
  }

  const imageRes = await fetch(imageUrl);
  if (!imageRes.ok) {
    throw new Error(`Failed to download image: ${scene.file}`);
  }

  const imageBuffer = Buffer.from(await imageRes.arrayBuffer());
  await fs.writeFile(outputPath, imageBuffer);
}

console.log("All images generated successfully.");
