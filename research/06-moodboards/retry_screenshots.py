import os
import subprocess
import time
import concurrent.futures

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"j:\WorkSpace\Ongoing\Link3\web-exp\research\06-moodboards\screenshots"

RETRY_COMPETITORS = [
    {"id": "20", "name": "CelcomDigi", "country": "Malaysia", "url": "https://corporate.celcomdigi.com", "alt_url": "https://www.celcomdigi.com", "slug": "20_celcomdigi_my"},
    {"id": "21", "name": "Singtel", "country": "Singapore", "url": "https://www.singtel.com", "alt_url": "https://www.singtel.com/personal", "slug": "21_singtel_sg"},
    {"id": "24", "name": "ViewQwest", "country": "Singapore", "url": "https://www.viewqwest.com", "alt_url": "https://viewqwest.com", "slug": "24_viewqwest_sg"},
    {"id": "34", "name": "AT&T", "country": "USA", "url": "https://www.att.com", "alt_url": "https://www.att.com/internet", "slug": "34_attfiber_us"},
    {"id": "36", "name": "Orange", "country": "France", "url": "https://www.orange.fr", "alt_url": "https://boutique.orange.fr", "slug": "36_orange_fr"},
    {"id": "42", "name": "Starlink", "country": "Global", "url": "https://www.starlink.com", "alt_url": "https://starlink.com/residential", "slug": "42_starlink_global"},
    {"id": "45", "name": "Bell Canada", "country": "Canada", "url": "https://www.bell.ca", "alt_url": "https://aliant.bell.ca", "slug": "45_bellcanada_ca"},
    {"id": "46", "name": "Rogers", "country": "Canada", "url": "https://www.rogers.com", "alt_url": "https://www.rogers.com/mobility", "slug": "46_rogers_ca"},
    {"id": "49", "name": "SK Broadband", "country": "South Korea", "url": "https://www.skbroadband.com", "alt_url": "https://m.skbroadband.com", "slug": "49_skbroadband_kr"},
]

def capture_retry(comp):
    target_path = os.path.join(OUTPUT_DIR, f"{comp['slug']}.png")
    
    for test_url in [comp['url'], comp['alt_url']]:
        cmd = [
            CHROME_PATH,
            "--headless=new",
            "--disable-gpu",
            "--hide-scrollbars",
            "--window-size=1440,900",
            "--virtual-time-budget=8000",
            "--ignore-certificate-errors",
            f"--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            f"--screenshot={target_path}",
            test_url
        ]

        try:
            subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=28)
            if os.path.exists(target_path) and os.path.getsize(target_path) > 15000:
                size_kb = round(os.path.getsize(target_path) / 1024)
                print(f"[RETRY SUCCESS] {comp['name']} ({test_url}) -> {comp['slug']}.png ({size_kb} KB)")
                return True
        except Exception as e:
            print(f"[RETRY FAILED] {comp['name']} ({test_url}): {e}")
            
    return False

def main():
    print(f"Retrying remaining {len(RETRY_COMPETITORS)} with Chrome...")
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        results = list(executor.map(capture_retry, RETRY_COMPETITORS))
    print(f"Retry completed: {sum(1 for r in results if r)} succeeded.")

if __name__ == "__main__":
    main()
