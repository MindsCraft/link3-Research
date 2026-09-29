import os
import subprocess

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"j:\WorkSpace\Ongoing\Link3\web-exp\research\06-moodboards\screenshots"

REMAINING = [
    ("24_viewqwest_sg", "https://viewqwest.com"),
    ("34_attfiber_us", "https://www.att.com/internet/"),
    ("46_rogers_ca", "https://www.rogers.com/internet"),
    ("49_skbroadband_kr", "https://www.skbroadband.com"),
]

for slug, url in REMAINING:
    out = os.path.join(OUTPUT_DIR, f"{slug}.png")
    cmd = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,900",
        "--ignore-certificate-errors",
        f"--screenshot={out}",
        url
    ]
    print(f"Capturing {slug} from {url}...")
    try:
        subprocess.run(cmd, timeout=12)
        if os.path.exists(out):
            print(f"[SUCCESS] {slug} -> {os.path.getsize(out)} bytes")
        else:
            print(f"[FAIL] {slug}")
    except Exception as e:
        print(f"[TIMEOUT/ERR] {slug}: {e}")
