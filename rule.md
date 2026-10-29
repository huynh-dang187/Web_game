# Rule — ArenaForge

> Đọc file này và `todo.md` **trước khi** bắt đầu bất kỳ task nào.
>
> Thứ tự đọc:
> 1. `rule.md`
> 2. `todo.md`
> 3. `agent.md` — context gốc của dự án (repo hiện không có `AGENTS.md`)
> 4. Ảnh trong `docs/design/` nếu có (hiện repo chưa có thư mục này)
> 5. Prompt của task hiện tại

## Trạng thái hiện tại
- Nhánh: `main`
- Tất cả các Phase (1 đến 6) đã hoàn thành và merge hoàn toàn vào `main`.
- Đã sẵn sàng 100% để deploy lên Cloudflare Pages (`https://arenaforge.pages.dev`).
- Đã cấu hình sitemap động (`@astrojs/sitemap`), `robots.txt`, 9 trang tĩnh và kiểm thử toàn diện.

## Stack
- Astro `7.4.2`, static output
- TypeScript strict: `tsconfig.json` extends `astro/tsconfigs/strict`
- Tailwind CSS `4.3.3`
- Tích hợp Tailwind theo cách khuyến nghị cho Tailwind v4: `@tailwindcss/vite`
- Sitemap integration: `@astrojs/sitemap`
- Design token khai báo bằng `@theme` trong `src/styles/global.css`

## Cấu trúc
```text
public/
├── favicon.ico
├── favicon.svg
└── robots.txt
src/
├── components/
│   ├── Footer.astro
│   ├── GameCard.astro
│   ├── Navbar.astro
│   └── YoutubeLite.astro
├── data/
│   └── games.json
├── layouts/
│   └── MainLayout.astro
├── lib/
│   └── games.ts
├── pages/
│   ├── games/
│   │   └── [slug].astro
│   ├── how-to-download.astro
│   ├── index.astro
│   └── legal.astro
├── styles/
│   └── global.css
└── types/
    └── game.ts
astro.config.mjs
package.json
tsconfig.json
```

## Design token
```css
--color-background: #121014;
--color-card: #1C1920;
--color-border: #2E2A34;
--color-text: #F2EEE9;
--color-text-muted: #A39DA8;
--color-accent: #FF5A36;
--color-accent-2: #FFC247;
--color-accent-foreground: #121014;
--radius-card: 12px;
--radius-button: 8px;
```

## SEO & Sitemap
- `site: 'https://arenaforge.pages.dev'` được định nghĩa trong `astro.config.mjs`.
- File `public/robots.txt` cho phép toàn bộ crawler và trỏ đến `https://arenaforge.pages.dev/sitemap-index.xml`.
- Tự động sinh `dist/sitemap-index.xml` và `dist/sitemap-0.xml` khi build, bao gồm toàn bộ 9 route.

## Mock data
- `src/types/game.ts`: `Platform`, `ControlMapping`, `SystemRequirements`, `Game`.
- `src/data/games.json`: 6 game hư cấu (3 PC, 3 Mobile, 2 featured).
- `src/lib/games.ts`: `getAllVisibleGames()`, `getFeaturedGames()`, `getGameBySlug(slug)`.
- Ảnh mock dùng `https://placehold.co/800x450/1C1920/FF5A36.webp?text=...`.
- Download URL mock: `https://example.com/shortlink-demo`.

## Navigation & Liên kết chân trang (Footer)
- Footer có 4 link chuẩn:
  - `About`: `/legal#about`
  - `Contact`: `/legal#contact`
  - `How to Download`: `/how-to-download`
  - `Privacy`: `/legal#privacy`
- Không có bất kỳ liên kết chết (broken link / 404) nào trên toàn bộ trang web.

## Quy ước bắt buộc
- Mobile-first, tối ưu cho 4G, hạn chế JavaScript phía client.
- Chỉ dùng màu phẳng. Không gradient, glow, blur, shadow.
- Dùng token thay vì hard-code màu.
- Không thêm dependency hoặc dịch vụ trả phí khi chưa hỏi.
- Không commit trừ khi được yêu cầu rõ ràng.
- Cập nhật `todo.md` sau mỗi bước; chỉ tick khi đã kiểm chứng.
- Chỉ dùng game/character/assets nguyên bản hoặc có giấy phép thương mại rõ ràng.
- Không đưa game file hoặc video gốc vào repo. Ảnh production chỉ dùng `.webp` dưới 1 MB.
- Nút Download phải có ghi chú "Opens a short ad page first".
- Sample data chỉ dùng tên hư cấu.

## Kiểm chứng
```powershell
npm run build
npx --yes -p typescript tsc --noEmit
```

## Lịch sử
- 2026-10-28: Hoàn thành scaffold trên nhánh `feat/scaffold`, merge vào `main`.
- 2026-10-28: Hoàn thành Phase 2 (types, mock data, helpers) trên `feat/mock-data`, merge vào `main`.
- 2026-10-28: Hoàn thành Phase 3 (home page, GameCard, filter/search) trên `feat/home-page`, merge vào `main`.
- 2026-10-29: Hoàn thành Phase 4 (Game Detail Page, YoutubeLite, SEO og:image) trên nhánh `feat/game-detail`, merge vào `main`.
- 2026-10-29: Hoàn thành Phase 5 (Static Pages: How to Download, Legal, Footer polish) trên nhánh `feat/static-pages`, merge vào `main`.
- 2026-10-29: Hoàn thành Phase 6 (Sitemap, robots.txt, production readiness), merge vào `main`.
