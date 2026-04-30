import type { NextConfig } from "next";

// @ts-expect-error next-pwa tidak memiliki tipe TypeScript bawaan
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  turbopack: {}, // <--- Tambahkan sebaris kode ini di sini
};

export default withPWA(nextConfig);
