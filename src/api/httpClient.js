import axios from "axios";

// To debug in local
const generateJwt = () => {
  // JWT generated by postman
  const JWT_GENERATED =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDIyODU4MTksImV4cCI6MTYwMjI4OTQxOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiamFzIn0.PxpjOPtq3K-ulis9xK3b1h0PIm5kLfXHgwzZujzRzX2g85_8aR6B6RiGuHFqO5U3JezK-hB2CEL0ZgCnSwDhVHURyPrh4zSX9gXmVOdl3l3mt_Cs7H7NGP8JZ9awgxnIKV1KTFmZkDTl4a8d-Pqs4E_tWlcDdCkfbZhhb5ajCxmXvKk97CguUnkUQHvWlawmyetl1wgzhTahoe8FfiVDuFVQRpH3_O9qV3dKlukr7q2qb5v2USa4ia1QDmMt286285ykseqYC_3UiYpLS467RHGFyc8hFsFOBp6uvRjN8k4AMkadX0v9svVs6pbcyQwu6D01dAT3p6sZ_YQzupZINbwgct5IfGArTXeq1aNr1QgQKsV3UJAFmwyNcy1G8wBbTn4sGGxl1MiDkm66ZT442YKCne-068naOaaBU8zvZ76a2GiySX7GMgfgeQomoa8JW40_UAhTAw5lJT-iONeDCTSPvq8eLFpPcM7nfc5KrcjYsP0awi51aF48gHhrYlRUMZ-8QqvN8vM3v-VCKzksx1ynkb_mZflUhCTw6ugGZF2fQKWpPigUQVt9N6jrEPw0DK1bdS0aR7Ob3zkYI9rkKD5yeWdY4nVh2KgGxLSDobFF6HAmanffk3bGAt7N8PhRR2wbYFT0BZpZ-bYkuGv78wdj36T0gAnPCr3c7bavc-g";
  localStorage.setItem("jwt", JWT_GENERATED);
};
generateJwt();

const AUTH_TOKEN = localStorage.getItem("jwt") || "INVALID_JWT";

const config = {
  baseURL: "http://localhost:8000/api/",
  responseType: "json",
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    Accept: "application/json",
  },
};

const httpClient = axios.create(config);

export default httpClient;
