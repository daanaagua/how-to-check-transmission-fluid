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
const forceRegenerate = process.env.FORCE_REGENERATE === "1" || process.argv.includes("--force");

const styleBase = `
Create a photorealistic educational automotive maintenance image.

Global style constraints:
- Clean modern workshop environment, realistic engine bay geometry and components.
- Natural daylight-balanced lighting and neutral blue-gray palette.
- Professional technical-documentation look, not cinematic, not cartoon.
- Accurate scale for tools, hands, dipstick tube, funnel, and fluid surfaces.
- Keep all mechanical details believable for real passenger vehicles.

Strict exclusion constraints:
- No text overlay.
- No labels, callouts, diagrams, UI elements, or interface widgets.
- No brand logos.
- No watermark.
- No signature.
- No "AI generated" mark in any language.
`;

const scenes = [
  {
    file: "hero-transmission-fluid-check.png",
    prompt: `
${styleBase}

Scene:
Show a mechanic wearing black nitrile gloves checking AUTOMATIC transmission fluid in a front-engine passenger car.
The mechanic holds the transmission dipstick in one hand and a white lint-free cloth in the other.
The dipstick tip is visible and shows a thin translucent red ATF film with believable level marks.
The dipstick tube location should be plausible near the firewall side of the engine bay.
Frame this as a hero educational shot with clear focus on the inspection action.
Camera: close three-quarter angle, eye-level with the dipstick.
`,
  },
  {
    file: "step-1-warm-up-and-safety.png",
    prompt: `
${styleBase}

Scene:
Vehicle parked on level shop floor before fluid inspection, hood open.
Show practical safety setup: wheel chock near tire, parking brake context, clean work area.
No person needed, focus on preparation stage before checking transmission fluid.
Make the image look like a maintenance manual photo that communicates "safe setup first".
Camera: medium-wide shot showing the front half of vehicle and safety details.
`,
  },
  {
    file: "step-2-locate-dipstick-or-port.png",
    prompt: `
${styleBase}

Scene:
Close instructional view inside engine bay, mechanic hand indicating the transmission dipstick location.
Important: do not confuse with engine oil dipstick location.
The transmission dipstick should appear in a realistic rear-side position with believable tube routing.
Show surrounding hoses and wiring naturally, without clutter.
Camera: tight close-up centered on dipstick handle and nearby service area.
`,
  },
  {
    file: "step-3-read-level-and-condition.png",
    prompt: `
${styleBase}

Scene:
Mechanic performs the accurate read cycle: pull dipstick, wipe with cloth, reinsert, then pull out again for reading.
Show the final read moment with dipstick tip in focus.
The tip must show realistic level marks and a thin clean ATF film, not exaggerated blobs.
Hands, cloth, and dipstick orientation should look physically correct.
Camera: close macro-like framing on dipstick tip and gloved hands.
`,
  },
  {
    file: "step-4-fluid-color-chart.png",
    prompt: `
${styleBase}

Scene:
Create a practical visual comparison of transmission fluid condition using several small transparent sample cups.
Arrange fluid tones from healthy clear red/amber to darker oxidized brown.
No printed chart text; communicate progression only through color and arrangement.
Include subtle workshop inspection props (clean cloth, flashlight, tray) to keep context mechanical.
Camera: top-down three-quarter composition with clean spacing and high legibility.
`,
  },
  {
    file: "step-5-top-up-with-funnel.png",
    prompt: `
${styleBase}

Scene:
Mechanic tops up transmission fluid carefully in small increments using a narrow funnel and correct service tube.
Show controlled slow pour behavior, not overflow.
Keep engine bay details realistic and clean, with emphasis on precision and caution.
No labels or text on bottle.
Camera: medium close-up focused on funnel-to-tube interface and hand control.
`,
  },
  {
    file: "lt-sealed-transmission-check.png",
    prompt: `
${styleBase}

Scene:
Vehicle is safely raised on a workshop lift for sealed transmission level check.
Technician inspects transmission case area near check plug/fill plug.
Use realistic underbody geometry and tool posture; avoid incorrect random bolt removal behavior.
The image should communicate a sealed-unit service procedure for no-dipstick transmissions.
Camera: undercarriage three-quarter angle with technician and service area clearly visible.
`,
  },
  {
    file: "lt-cvt-inspection.png",
    prompt: `
${styleBase}

Scene:
CVT-specific inspection scene in a modern workshop.
Technician monitors transmission temperature with a handheld scan tool while preparing CVT fluid level service.
Show a realistic CVT service context: careful posture, organized tools, no dramatic effects.
The scene should feel precise and methodical, emphasizing CVT sensitivity to correct procedure.
Camera: medium shot combining technician, scan tool, and service area.
`,
  },
  {
    file: "lt-hot-vs-cold.png",
    prompt: `
${styleBase}

Scene:
Split composition comparing transmission fluid checks at cold start vs warm operating condition.
Left side: cold-check context (just-started workflow).
Right side: warm-check context (engine at operating temperature).
Use the same vehicle model and workshop style on both sides for clear comparison.
No text labels inside image.
Camera: balanced side-by-side composition with equal visual weight.
`,
  },
  {
    file: "lt-automatic-vs-manual.png",
    prompt: `
${styleBase}

Scene:
One coherent comparison scene of automatic vs manual transmission fluid check methods.
Automatic side shows dipstick-based check in engine bay.
Manual side implies fill-plug level verification at gearbox side area.
Both halves should look like the same workshop and similar lighting so the comparison feels unified.
No text or logos.
Camera: clean comparison framing with clear differentiation of procedures.
`,
  },
];

await fs.mkdir(outputDir, { recursive: true });

for (const [index, scene] of scenes.entries()) {
  console.log(`[${index + 1}/${scenes.length}] Generating ${scene.file}`);
  const outputPath = path.join(outputDir, scene.file);

  if (!forceRegenerate) {
    try {
      await fs.access(outputPath);
      console.log(`- Skipped ${scene.file} (already exists)`);
      continue;
    } catch {
      // Continue generating if file does not exist.
    }
  }

  const response = await client.images.generate({
    model: modelId,
    prompt: scene.prompt,
    size: "2K",
    response_format: "url",
    watermark: false,
    extra_body: {
      watermark: false,
      logo_info: {
        add_logo: false,
      },
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
