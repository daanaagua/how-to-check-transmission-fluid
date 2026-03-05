import argparse
import base64
import os
from pathlib import Path

import requests
from PIL import Image, ImageDraw, ImageFont
from volcenginesdkarkruntime import Ark


def load_dotenv(dotenv_path: Path) -> dict:
    values = {}
    if not dotenv_path.exists():
        return values

    for raw_line in dotenv_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        values[key] = value
    return values


def to_data_uri(image_path: Path) -> str:
    suffix = image_path.suffix.lower().replace(".", "") or "png"
    mime = f"image/{'jpeg' if suffix in {'jpg', 'jpeg'} else suffix}"
    content = image_path.read_bytes()
    encoded = base64.b64encode(content).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def download_image(url: str, output_path: Path) -> None:
    response = requests.get(url, timeout=60)
    response.raise_for_status()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(response.content)


def add_english_hot_cold_labels(image_path: Path) -> None:
    image = Image.open(image_path).convert("RGBA")
    width, height = image.size
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    font_size = max(40, width // 18)
    font = None
    for font_name in ["arialbd.ttf", "Arial.ttf", "DejaVuSans-Bold.ttf", "DejaVuSans.ttf"]:
        try:
            font = ImageFont.truetype(font_name, font_size)
            break
        except OSError:
            continue
    if font is None:
        font = ImageFont.load_default()

    top_band = (0, 0, width, int(height * 0.165))
    draw.rectangle(top_band, fill=(0, 0, 0, 255))

    draw.text(
        (int(width * 0.14), int(height * 0.048)),
        "COLD",
        fill=(255, 255, 255),
        font=font,
        stroke_width=3,
        stroke_fill=(0, 0, 0),
    )
    draw.text(
        (int(width * 0.68), int(height * 0.048)),
        "HOT",
        fill=(255, 255, 255),
        font=font,
        stroke_width=3,
        stroke_fill=(0, 0, 0),
    )

    merged = Image.alpha_composite(image, overlay).convert("RGB")
    merged.save(image_path)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate Seedream i2i images with base64 reference.")
    parser.add_argument("--sample", action="store_true", help="Generate sample only")
    parser.add_argument("--force", action="store_true", help="Force overwrite existing files")
    parser.add_argument(
        "--files",
        nargs="*",
        help="Generate only specified output files, e.g. --files lt-hot-vs-cold.png step-2-locate-dipstick-or-port.png",
    )
    args = parser.parse_args()

    root = Path(__file__).resolve().parents[1]
    seo_root = root.parent
    dotenv_values = load_dotenv(root / ".env")

    api_key = os.getenv("ARK_API_KEY") or os.getenv("API_KEY") or dotenv_values.get("API_KEY")
    model_id = os.getenv("MODEL_ID") or dotenv_values.get("MODEL_ID") or "doubao-seedream-5-0-260128"

    if not api_key:
        raise RuntimeError("Missing API key. Set ARK_API_KEY/API_KEY or .env API_KEY.")

    ref_context = seo_root / "97dfe125-35c1-431b-a36b-b7cb2d754fcc.png"
    ref_tip = seo_root / "abb697e9-fc7a-4adf-b820-faf8000bf042.png"

    if not ref_context.exists() or not ref_tip.exists():
        raise FileNotFoundError("Reference images not found in seo_4 root directory.")

    ref_context_data = to_data_uri(ref_context)
    ref_tip_data = to_data_uri(ref_tip)

    client = Ark(
        base_url="https://ark.cn-beijing.volces.com/api/v3",
        api_key=api_key,
    )

    style = (
        "请生成专业汽车维修教程风格照片。\n"
        "画面要求写实，结构正确，不能卡通化。\n"
        "严格遵循真实自动变速箱油尺(dipstick)形态：细长扁平金属尺身，末端有刻线或孔位，不要粗短棒状，不要玩具结构。\n"
        "手部动作要符合真实维修流程：抽出油尺、擦拭、复插、再次读数。\n"
        "必须无任何水印、无AI标记、无文字叠加、无logo、无签名。"
    )

    scenes = [
        {
            "file": "sample-dipstick-base64-i2i.png",
            "image": ref_context_data,
            "prompt": (
                f"{style}\n"
                "这是样图验证。保持参考图里的真实油尺比例和金属质感。"
                "镜头聚焦油尺末端刻线与少量红色ATF油膜，背景是干净发动机舱。"
                "一只手拿白色无纺布，另一只手拿油尺，动作自然。"
            ),
        },
        {
            "file": "hero-transmission-fluid-check.png",
            "image": ref_context_data,
            "prompt": (
                f"{style}\n"
                "主页首图：维修技师在发动机舱内检查自动变速箱油尺。"
                "重点强调油尺末端读数区域清晰可见，油膜薄而真实。"
                "构图专业、友好，适合教程首页头图。"
            ),
        },
        {
            "file": "step-1-warm-up-and-safety.png",
            "image": ref_context_data,
            "prompt": (
                f"{style}\n"
                "步骤1：车辆停在平整地面、引擎盖打开、准备检查前的安全状态。"
                "可见轮挡和擦拭布，画面表达先做好安全准备。"
            ),
        },
        {
            "file": "step-2-locate-dipstick-or-port.png",
            "image": ref_context_data,
            "prompt": (
                f"{style}\n"
                "步骤2：近景展示自动变速箱油尺的位置。"
                "严格要求：油尺杆必须笔直、细长、金属质感，不允许出现弯折或软管形态。"
                "油尺把手与油尺管结构必须符合真实汽车机械结构，不要画成机油加注口。"
                "可有手指示意位置，但不出现任何文字标注。"
            ),
        },
        {
            "file": "step-3-read-level-and-condition.png",
            "image": ref_tip_data,
            "prompt": (
                f"{style}\n"
                "步骤3：超近景展示油尺读数。"
                "参考图2的油尺尖端形态，明确刻线与少量油膜。"
                "确保可读性高，细节锐利，符合真实维修拍摄。"
            ),
        },
        {
            "file": "step-4-fluid-color-chart.png",
            "image": ref_tip_data,
            "prompt": (
                "生成变速箱油液状态对比图：多个透明样品杯展示从清亮红色到深褐色的渐变。"
                "画面仍保持同一车间风格，写实、干净、无文字、无水印。"
            ),
            "fallback_prompt": (
                "生成汽车保养教学图片：在维修车间台面摆放多个透明小样品杯，展示不同状态的变速箱油液样本。"
                "避免任何敏感联想，强调这是汽车保养液体样本。"
                "画面写实、干净、无文字、无logo、无水印。"
            ),
        },
        {
            "file": "step-5-top-up-with-funnel.png",
            "image": ref_context_data,
            "prompt": (
                f"{style}\n"
                "步骤5：通过细长漏斗向正确油尺管少量补充ATF。"
                "动作要谨慎，液流细且可控，不要溢出。"
            ),
        },
        {
            "file": "lt-sealed-transmission-check.png",
            "image": ref_context_data,
            "prompt": (
                "长尾页：无油尺(密封式)变速箱检查场景。"
                "车辆举升后，展示完整封闭的变速箱总成，不允许出现拆开的壳体、分解状态或裸露齿轮。"
                "必须是侧面检查口/加注口维护动作，不是正面拆解。"
                "技师戴手套，使用内六角或套筒工具在侧面液位检查口操作，旁边有接油盘，符合真实保养流程。"
                "保持与主站一致的蓝灰色专业风格，无文字无水印。"
            ),
        },
        {
            "file": "lt-cvt-inspection.png",
            "image": ref_context_data,
            "prompt": (
                "长尾页：CVT检查场景。技师一手持诊断仪读取温度，一手进行CVT油液检查准备。"
                "真实维修站氛围，结构合理，清晰表达流程。"
                "无文字、无logo、无水印。"
            ),
        },
        {
            "file": "lt-hot-vs-cold.png",
            "image": ref_tip_data,
            "prompt": (
                f"{style}\n"
                "长尾页：左右对比同一车辆冷车与热车检查油尺场景。"
                "两侧都要是真实油尺，不要错误形状。"
                "左侧冷车、右侧热车，光线略有差异但风格统一。"
                "禁止出现中文文字。若需要标注，只允许英文单词 COLD 与 HOT。"
            ),
        },
        {
            "file": "lt-automatic-vs-manual.png",
            "image": ref_context_data,
            "prompt": (
                "长尾页：自动变速箱与手动变速箱检查方式对比。"
                "自动侧可见油尺检查动作；手动侧可见变速箱侧面加注/检查口流程。"
                "专业教程风格，无任何水印、无文字。"
            ),
        },
    ]

    output_dir = root / "public" / "images"
    if args.sample:
        selected_scenes = scenes[:1]
    elif args.files:
        requested = set(args.files)
        selected_scenes = [scene for scene in scenes if scene["file"] in requested]
        if not selected_scenes:
            raise ValueError("No matching files found in scene list.")
    else:
        selected_scenes = scenes

    for idx, scene in enumerate(selected_scenes, start=1):
        output_path = output_dir / scene["file"]
        if output_path.exists() and not args.force:
            print(f"[{idx}/{len(selected_scenes)}] Skip existing: {scene['file']}")
            continue

        print(f"[{idx}/{len(selected_scenes)}] Generating: {scene['file']}")
        prompt_to_use = scene["prompt"]
        try:
            response = client.images.generate(
                model=model_id,
                prompt=prompt_to_use,
                image=scene["image"],
                size="2K",
                response_format="url",
                watermark=False,
            )
        except Exception as exc:
            if "OutputImageSensitiveContentDetected" in str(exc) and scene.get("fallback_prompt"):
                print(f"Retry with fallback prompt: {scene['file']}")
                prompt_to_use = scene["fallback_prompt"]
                response = client.images.generate(
                    model=model_id,
                    prompt=prompt_to_use,
                    image=scene["image"],
                    size="2K",
                    response_format="url",
                    watermark=False,
                )
            else:
                raise

        image_url = response.data[0].url
        download_image(image_url, output_path)

        if scene["file"] == "lt-hot-vs-cold.png":
            add_english_hot_cold_labels(output_path)

        print(f"Saved: {output_path}")

    print("Done.")


if __name__ == "__main__":
    main()
