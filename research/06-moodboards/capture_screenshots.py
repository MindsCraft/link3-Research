import os
import subprocess
import time
import concurrent.futures

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
BROWSER_EXE = EDGE_PATH if os.path.exists(EDGE_PATH) else CHROME_PATH

OUTPUT_DIR = r"j:\WorkSpace\Ongoing\Link3\web-exp\research\06-moodboards\screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

COMPETITORS = [
    # Regional (South Asia & Southeast Asia - 30)
    {"id": "01", "name": "Carnival Internet", "country": "Bangladesh", "url": "https://carnival.com.bd", "slug": "01_carnival_bd"},
    {"id": "02", "name": "Dot Internet", "country": "Bangladesh", "url": "https://dotinternetbd.com", "slug": "02_dotinternet_bd"},
    {"id": "03", "name": "Amber IT", "country": "Bangladesh", "url": "https://www.amberit.com.bd", "slug": "03_amberit_bd"},
    {"id": "04", "name": "ICC Communication", "country": "Bangladesh", "url": "https://icc.com.bd", "slug": "04_icc_bd"},
    {"id": "05", "name": "BRACNet", "country": "Bangladesh", "url": "https://bracnet.net", "slug": "05_bracnet_bd"},
    {"id": "06", "name": "ADN Telecom", "country": "Bangladesh", "url": "https://adnsb.com", "slug": "06_adntelecom_bd"},
    {"id": "07", "name": "Triangle Services", "country": "Bangladesh", "url": "https://triangle.com.bd", "slug": "07_triangle_bd"},
    {"id": "08", "name": "Mazeda Networks", "country": "Bangladesh", "url": "https://mazedanetworks.net", "slug": "08_mazedanetworks_bd"},
    {"id": "09", "name": "Reliance Jio (JioFiber)", "country": "India", "url": "https://www.jio.com/fiber", "slug": "09_jiofiber_in"},
    {"id": "10", "name": "Airtel (Airtel Black)", "country": "India", "url": "https://www.airtel.in/airtel-black", "slug": "10_airtelblack_in"},
    {"id": "11", "name": "ACT Fibernet", "country": "India", "url": "https://www.actcorp.in", "slug": "11_actfibernet_in"},
    {"id": "12", "name": "Tata Play Fiber", "country": "India", "url": "https://www.tataplayfiber.com", "slug": "12_tataplayfiber_in"},
    {"id": "13", "name": "Excitel Broadband", "country": "India", "url": "https://excitel.com", "slug": "13_excitel_in"},
    {"id": "14", "name": "WorldLink", "country": "Nepal", "url": "https://worldlink.com.np", "slug": "14_worldlink_np"},
    {"id": "15", "name": "Nayatel", "country": "Pakistan", "url": "https://nayatel.com", "slug": "15_nayatel_pk"},
    {"id": "16", "name": "SLT-Mobitel", "country": "Sri Lanka", "url": "https://slt.lk", "slug": "16_sltmobitel_lk"},
    {"id": "17", "name": "TIME dotCom", "country": "Malaysia", "url": "https://www.time.com.my", "slug": "17_timedotcom_my"},
    {"id": "18", "name": "Maxis (Maxis Fibre)", "country": "Malaysia", "url": "https://www.maxis.com.my", "slug": "18_maxis_my"},
    {"id": "19", "name": "Unifi", "country": "Malaysia", "url": "https://unifi.com.my", "slug": "19_unifi_my"},
    {"id": "20", "name": "CelcomDigi Fibre", "country": "Malaysia", "url": "https://celcomdigi.com/fibre", "slug": "20_celcomdigi_my"},
    {"id": "21", "name": "Singtel", "country": "Singapore", "url": "https://singtel.com/personal/products-services/broadband", "slug": "21_singtel_sg"},
    {"id": "22", "name": "StarHub", "country": "Singapore", "url": "https://starhub.com/personal/broadband.html", "slug": "22_starhub_sg"},
    {"id": "23", "name": "MyRepublic", "country": "Singapore", "url": "https://myrepublic.net/sg/broadband", "slug": "23_myrepublic_sg"},
    {"id": "24", "name": "ViewQwest", "country": "Singapore", "url": "https://viewqwest.com", "slug": "24_viewqwest_sg"},
    {"id": "25", "name": "AIS Fibre3", "country": "Thailand", "url": "https://ais.th/fibre", "slug": "25_aisfibre_th"},
    {"id": "26", "name": "TrueOnline", "country": "Thailand", "url": "https://true.th/trueonline", "slug": "26_trueonline_th"},
    {"id": "27", "name": "Telkomsel / IndiHome", "country": "Indonesia", "url": "https://telkomsel.com/indihome", "slug": "27_indihome_id"},
    {"id": "28", "name": "Biznet Networks", "country": "Indonesia", "url": "https://biznetnetworks.com", "slug": "28_biznet_id"},
    {"id": "29", "name": "Converge ICT", "country": "Philippines", "url": "https://convergeict.com", "slug": "29_converge_ph"},
    {"id": "30", "name": "FPT Telecom", "country": "Vietnam", "url": "https://fpt.vn", "slug": "30_fpt_vn"},

    # Global World-Class Leaders & Disruptors (20)
    {"id": "31", "name": "Google Fiber", "country": "USA", "url": "https://fiber.google.com", "slug": "31_googlefiber_us"},
    {"id": "32", "name": "Xfinity (Comcast)", "country": "USA", "url": "https://www.xfinity.com", "slug": "32_xfinity_us"},
    {"id": "33", "name": "Verizon Fios", "country": "USA", "url": "https://verizon.com/home/fios", "slug": "33_verizonfios_us"},
    {"id": "34", "name": "AT&T Fiber", "country": "USA", "url": "https://att.com/fiber", "slug": "34_attfiber_us"},
    {"id": "35", "name": "Free (Freebox Ultra)", "country": "France", "url": "https://free.fr", "slug": "35_freebox_fr"},
    {"id": "36", "name": "Orange", "country": "France", "url": "https://orange.fr", "slug": "36_orange_fr"},
    {"id": "37", "name": "Virgin Media O2", "country": "UK", "url": "https://virginmedia.com", "slug": "37_virginmedia_uk"},
    {"id": "38", "name": "EE (BT Group)", "country": "UK", "url": "https://ee.co.uk/broadband", "slug": "38_ee_uk"},
    {"id": "39", "name": "Swisscom", "country": "Switzerland", "url": "https://swisscom.ch", "slug": "39_swisscom_ch"},
    {"id": "40", "name": "Vodafone", "country": "Germany", "url": "https://vodafone.de", "slug": "40_vodafone_de"},
    {"id": "41", "name": "Deutsche Telekom", "country": "Germany", "url": "https://telekom.de", "slug": "41_telekom_de"},
    {"id": "42", "name": "Starlink (SpaceX)", "country": "Global", "url": "https://starlink.com", "slug": "42_starlink_global"},
    {"id": "43", "name": "Fastweb", "country": "Italy", "url": "https://fastweb.it", "slug": "43_fastweb_it"},
    {"id": "44", "name": "KPN", "country": "Netherlands", "url": "https://kpn.com", "slug": "44_kpn_nl"},
    {"id": "45", "name": "Bell Canada", "country": "Canada", "url": "https://bell.ca/internet", "slug": "45_bellcanada_ca"},
    {"id": "46", "name": "Rogers Communications", "country": "Canada", "url": "https://rogers.com/internet", "slug": "46_rogers_ca"},
    {"id": "47", "name": "Telstra", "country": "Australia", "url": "https://telstra.com.au/internet", "slug": "47_telstra_au"},
    {"id": "48", "name": "Aussie Broadband", "country": "Australia", "url": "https://aussiebroadband.com.au", "slug": "48_aussiebroadband_au"},
    {"id": "49", "name": "SK Broadband", "country": "South Korea", "url": "https://skbroadband.com", "slug": "49_skbroadband_kr"},
    {"id": "50", "name": "NTT Docomo (Hikari)", "country": "Japan", "url": "https://docomo.ne.jp/hikari", "slug": "50_nttdocomo_jp"}
]

def capture_screenshot(comp):
    target_path = os.path.join(OUTPUT_DIR, f"{comp['slug']}.png")
    
    # Check if already captured and valid (>10KB)
    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f"[{comp['id']}/50] [CACHED] {comp['name']} ({os.path.getsize(target_path)} bytes)")
        return comp['id'], True, target_path

    cmd = [
        BROWSER_EXE,
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,900",
        "--virtual-time-budget=6000",
        "--ignore-certificate-errors",
        f"--screenshot={target_path}",
        comp['url']
    ]

    try:
        proc = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=22)
        if os.path.exists(target_path) and os.path.getsize(target_path) > 5000:
            size_kb = round(os.path.getsize(target_path) / 1024)
            print(f"[{comp['id']}/50] [SUCCESS] {comp['name']} -> {comp['slug']}.png ({size_kb} KB)")
            return comp['id'], True, target_path
        else:
            print(f"[{comp['id']}/50] [WARN] File not created or too small for {comp['name']}")
            return comp['id'], False, None
    except subprocess.TimeoutExpired:
        print(f"[{comp['id']}/50] [TIMEOUT] {comp['name']} exceeded 22s")
        return comp['id'], False, None
    except Exception as e:
        print(f"[{comp['id']}/50] [ERROR] {comp['name']}: {e}")
        return comp['id'], False, None

def main():
    print(f"Starting screenshot capture of all {len(COMPETITORS)} competitors using: {BROWSER_EXE}")
    start_time = time.time()
    
    success_count = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        futures = {executor.submit(capture_screenshot, comp): comp for comp in COMPETITORS}
        for future in concurrent.futures.as_completed(futures):
            comp = futures[future]
            try:
                comp_id, success, path = future.result()
                if success:
                    success_count += 1
            except Exception as e:
                print(f"Failed processing {comp['name']}: {e}")

    elapsed = round(time.time() - start_time, 1)
    print(f"\n==========================================")
    print(f"Screenshot run complete! {success_count}/{len(COMPETITORS)} captured in {elapsed}s.")
    print(f"Location: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
