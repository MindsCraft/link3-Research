import os
import subprocess

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"j:\WorkSpace\Ongoing\Link3\web-exp\research\06-moodboards\screenshots"

TARGETS = [
    {"slug": "24_viewqwest_sg", "url": "https://viewqwest.com"},
    {"slug": "34_attfiber_us", "url": "https://www.att.com"},
    {"slug": "45_bellcanada_ca", "url": "https://www.bell.ca"},
    {"slug": "46_rogers_ca", "url": "https://www.rogers.com"},
    {"slug": "49_skbroadband_kr", "url": "https://www.skbroadband.com"},
]

for t in TARGETS:
    out = os.path.join(OUTPUT_DIR, f"{t['slug']}.png")
    cmd = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,900",
        "--virtual-time-budget=6000",
        f"--screenshot={out}",
        t["url"]
    ]
    print(f"Capturing {t['slug']}...")
    try:
        subprocess.run(cmd, timeout=20)
        if os.path.exists(out):
            print(f"[OK] {t['slug']}: {os.path.getsize(out)} bytes")
        else:
            print(f"[FAIL] {t['slug']}")
    except Exception as e:
        print(f"[ERROR] {t['slug']}: {e}")
