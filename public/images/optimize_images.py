#!/usr/bin/env python3
from __future__ import annotations

import argparse
import shutil
from pathlib import Path

from PIL import Image

SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}


def has_alpha_channel(image: Image.Image) -> bool:
    if image.mode in ("RGBA", "LA"):
        return True
    if image.mode == "P" and "transparency" in image.info:
        return True
    return False


def optimize_image(path: Path, backup_root: Path, max_dim: int, quality: int) -> tuple[int, int, tuple[int, int], tuple[int, int]]:
    backup_path = backup_root / path.name
    if not backup_path.exists():
        shutil.copy2(path, backup_path)

    old_size = path.stat().st_size

    with Image.open(path) as image:
        original_dims = image.size
        image.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
        resized_dims = image.size

        suffix = path.suffix.lower()
        save_kwargs = {}

        if suffix in {".jpg", ".jpeg"}:
            if image.mode not in ("RGB", "L"):
                image = image.convert("RGB")
            save_kwargs.update({"quality": quality, "optimize": True, "progressive": True})
        elif suffix == ".png":
            if not has_alpha_channel(image):
                image = image.convert("P", palette=Image.Palette.ADAPTIVE, colors=256)
            save_kwargs.update({"optimize": True, "compress_level": 9})
        elif suffix == ".webp":
            save_kwargs.update({"quality": quality, "method": 6})
        else:
            image.save(path)
            new_size = path.stat().st_size
            return old_size, new_size, original_dims, resized_dims

        image.save(path, **save_kwargs)

    new_size = path.stat().st_size
    return old_size, new_size, original_dims, resized_dims


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Resize and optimize images for web use.")
    parser.add_argument("--dir", default=".", help="Directory containing images. Default: current directory")
    parser.add_argument("--max-dim", type=int, default=1920, help="Maximum width/height in pixels")
    parser.add_argument("--quality", type=int, default=80, help="JPEG/WEBP quality (1-100)")
    parser.add_argument("--backup-dir", default="originals-backup", help="Folder to store original files")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    root = Path(args.dir).resolve()
    backup_root = (root / args.backup_dir).resolve()
    backup_root.mkdir(parents=True, exist_ok=True)

    total_before = 0
    total_after = 0
    optimized_count = 0

    image_paths = sorted(
        p
        for p in root.iterdir()
        if p.is_file() and p.suffix.lower() in SUPPORTED_EXTENSIONS and p.parent != backup_root
    )

    if not image_paths:
        print("No supported images found.")
        return

    for image_path in image_paths:
        old_size, new_size, original_dims, resized_dims = optimize_image(
            image_path, backup_root, args.max_dim, args.quality
        )
        total_before += old_size
        total_after += new_size
        optimized_count += 1
        delta_pct = ((old_size - new_size) / old_size * 100) if old_size else 0
        print(
            f"{image_path.name}: {old_size / 1024:.1f}KB -> {new_size / 1024:.1f}KB "
            f"({delta_pct:.1f}% smaller), {original_dims[0]}x{original_dims[1]} -> {resized_dims[0]}x{resized_dims[1]}"
        )

    saved_bytes = total_before - total_after
    saved_pct = (saved_bytes / total_before * 100) if total_before else 0
    print("\nDone")
    print(f"Optimized files: {optimized_count}")
    print(f"Before: {total_before / (1024 * 1024):.2f} MB")
    print(f"After:  {total_after / (1024 * 1024):.2f} MB")
    print(f"Saved:  {saved_bytes / (1024 * 1024):.2f} MB ({saved_pct:.1f}%)")
    print(f"Backups: {backup_root}")


if __name__ == "__main__":
    main()
