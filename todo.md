# TODO — ArenaForge

> Cập nhật file này sau mỗi bước. Chỉ đánh dấu `[x]` khi đã kiểm chứng thực tế.
> Nhánh hiện tại: `fix/pre-launch`
> Trạng thái: Hoàn tất cấu hình pre-launch trên `fix/pre-launch`, chưa commit.
> Cập nhật cuối: 2026-10-29

## 1. Khởi tạo dự án
- [x] Tạo nhánh `feat/scaffold`
- [x] Khởi tạo Astro với `output: 'static'`
- [x] Bật TypeScript strict qua `astro/tsconfigs/strict`
- [x] Cài Tailwind CSS v4 bằng `@tailwindcss/vite`
- [x] Cấu hình plugin Tailwind trong `astro.config.mjs`
- [x] Khai báo design token bằng `@theme` trong `src/styles/global.css`

## 2. Layout
- [x] Tạo `src/layouts/MainLayout.astro`
- [x] `<html lang="vi">`
- [x] Meta viewport
- [x] Props `title` và `description`
- [x] Open Graph tags
- [x] Background dùng token `bg-background`
- [x] Slot `navbar` và `footer`

## 3. Components
- [x] Navbar có logo "ArenaForge"
- [x] Navbar có search input
- [x] Navbar có icon link YouTube và TikTok
- [x] Navbar có hamburger trên mobile
- [x] Footer có links About / Contact / How to Download / Privacy
- [x] Footer có dòng "All games are original creations"

## 4. Môi trường
- [x] Tạo `.env.example` với placeholder rỗng
- [x] `.gitignore` bao phủ `.env`, `dist`, `.astro`
- [x] Xác nhận `.env.example` không bị ignore

## 5. Kiểm chứng
- [x] `npm run build` pass
- [x] Dev server chạy được
- [x] Ở 375×812: layout đúng, hamburger hiển thị và mở menu được
- [x] Trang chủ để trống nội dung, chỉ có layout
- [x] Kiểm tra HTML có `lang="vi"`, title, description, OG tags

## Commands đã dùng
```powershell
git checkout -b feat/scaffold

npm create astro@latest . -- --template minimal --no-install --no-git --skip-houston --yes --no-ai
# Scaffold tạo vào ./adorable-ascension vì repo không rỗng.
# Đã Move-Item các file/thư mục cần thiết ra root rồi xoá thư mục tạm.

npm install
npm install tailwindcss @tailwindcss/vite
npm run build

npm run dev -- --host 127.0.0.1 --port 4321
git check-ignore -v .env .env.example dist .astro
```

## Kết quả kiểm chứng
- Astro: `7.4.2`
- Tailwind CSS: `4.3.3`
- Build static: 1 page (`/index.html`)
- Viewport 375×812: `innerWidth = 375`, `matchMedia('(min-width: 48rem)') = false`
- Hamburger: hiển thị tại `x = 319`, mở menu rộng `343px`
- Screenshot: `C:\Users\Admin\AppData\Local\Temp\opencode\arenaforge-375-cdp.png`

## 6. Bàn giao
- [x] Tạo `todo.md`
- [x] Tạo `rule.md`
- [x] Thêm dòng trỏ tới `rule.md` và `todo.md` ở đầu `agent.md`

## 7. Git workflow
- [x] Amend commit scaffold thành message rõ nghĩa
- [x] Merge `feat/scaffold` vào `main`
- [x] Tạo và chuyển sang nhánh `feat/mock-data`

## 8. Phase 2 — Mock Data & Schema
- [x] Tạo `src/types/game.ts` với `Platform`, `ControlMapping`, `SystemRequirements`, `Game`
- [x] Tạo `src/data/games.json` với 6 game hư cấu
- [x] Đủ 3 game PC và 3 game Mobile
- [x] Có 2 game `isFeatured: true`
- [x] Cover và screenshots dùng `placehold.co` đúng token `#1C1920` / `#FF5A36`
- [x] Dùng `youtubeId` mẫu và `downloadUrl` mẫu
- [x] Tạo `src/lib/games.ts` với `getAllVisibleGames`, `getFeaturedGames`, `getGameBySlug`
- [x] Validate JSON: đủ field, đúng định dạng, không trùng id/slug
- [x] `npm run build` pass
- [x] `tsc --noEmit` pass, 0 lỗi TypeScript

## Commands Phase 2
```powershell
git commit --amend -m "feat: scaffold Astro site with Tailwind and base layout"
git checkout main
git merge feat/scaffold
git checkout -b feat/mock-data

npm run build
npx --yes -p typescript tsc --noEmit
node C:\Users\Admin\AppData\Local\Temp\opencode\verify-games-data.mjs
npx --yes tsx -e "import { getAllVisibleGames, getFeaturedGames, getGameBySlug } from './src/lib/games.ts'; console.log(JSON.stringify({ visible: getAllVisibleGames().map((g) => g.slug), featured: getFeaturedGames().map((g) => g.slug), found: getGameBySlug('neon-talon')?.title }, null, 2));"
```

## Kết quả Phase 2
- Tổng game: `6`
- PC: `3`, Mobile: `3`
- Featured: `2` (`ashfall-duelists`, `neon-talon`)
- Visible: `6`
- JSON validation: `0` lỗi
- TypeScript: `0` lỗi
- Helper trả về đúng danh sách visible/featured và tìm được game theo slug

## 9. Phase 3 — Home Page & Filtering
- [x] Commit toàn bộ Phase 2 trên `feat/mock-data`
- [x] Merge `feat/mock-data` vào `main`
- [x] Tạo và chuyển sang nhánh `feat/home-page`
- [x] Tạo `src/components/GameCard.astro` với prop `game: Game`
- [x] Card dùng `bg-card`, `border-border`, `rounded-card`, không shadow/gradient
- [x] Card có cover 16:9, platform badge `accent-2`, genre tags, title, shortDescription
- [x] Card có link tới `/games/${game.slug}`
- [x] Card có `data-platform` và `data-title`
- [x] `index.astro` dùng `getAllVisibleGames()` và `getFeaturedGames()`
- [x] Hero/featured banner có cover, title, shortDescription, platform badge, CTA `accent`
- [x] Filter tabs All / PC / Mobile, active dùng `accent` + `accent-foreground`
- [x] Grid 1 cột mobile, 2 cột tablet, 3 cột desktop
- [x] Empty state khi không có game khớp
- [x] Search input trong Navbar lọc theo tên game
- [x] Filter tabs và search kết hợp được, không reload trang
- [x] `npm run build` pass
- [x] `tsc --noEmit` pass, 0 lỗi TypeScript
- [x] Kiểm tra 375px: hero, 6 card, 1 cột, tabs và search hoạt động
- [x] Kiểm tra 768px: 2 cột
- [x] Kiểm tra 1280px: 3 cột
- [x] Kiểm tra empty state khi search không có kết quả
- [x] Commit và merge `feat/home-page` vào `main`

## Commands Phase 3
```powershell
git add -A
git commit -m "feat: add typed mock game data and helpers"
git checkout main
git merge feat/mock-data
git checkout -b feat/home-page

npm run build
npx --yes -p typescript tsc --noEmit
node C:\Users\Admin\AppData\Local\Temp\opencode\verify-home.mjs
node C:\Users\Admin\AppData\Local\Temp\opencode\verify-tablet.mjs
```

## Kết quả Phase 3
- Cards: `6`, hiển thị đủ 3 PC + 3 Mobile
- Grid: `1` cột ở 375px, `2` cột ở 768px, `3` cột ở 1280px
- Filter PC: `3` card; Mobile: `3` card; All: `6` card
- Active tab: nền `rgb(255, 90, 54)`, chữ `rgb(18, 16, 20)`
- Search `neon`: còn `1` card (`Neon Talon`)
- Search `iron` trên desktop: còn `1` card (`Ironbloom Arena`)
- Search `zzz`: `0` card, empty state hiển thị
- Hero: `Ashfall Duelists`, badge `PC`, CTA `/games/ashfall-duelists`
- Screenshots:
  - `arenaforge-home-375.png`
  - `arenaforge-home-375-full.png`
  - `arenaforge-home-375-search.png`
  - `arenaforge-home-375-empty.png`
  - `arenaforge-home-tablet.png`
  - `arenaforge-home-desktop.png`
  - `arenaforge-home-desktop-full.png`

## 10. Phase 4 — Game Detail Page & YouTube Lite
- [x] Review Phase 3 và merge `feat/home-page` vào `main`
- [x] Tạo và chuyển sang nhánh `feat/game-detail`
- [x] Cập nhật `src/layouts/MainLayout.astro` nhận thêm `coverImage?: string` cho thẻ Open Graph và Twitter card
- [x] Tạo `src/components/YoutubeLite.astro` với thumbnail 16:9, nút Play phẳng `#FF5A36`, click-to-play inject iframe `youtube-nocookie.com/embed/${youtubeId}?autoplay=1` (không load iframe ban đầu)
- [x] Tạo `src/pages/games/[slug].astro` dùng `getStaticPaths()` với `getAllVisibleGames()` để render tĩnh toàn bộ game
- [x] Header: Breadcrumb (`Home / Games / Title`), Tiêu đề, Badge nền tảng `#FFC247`, thể loại, phiên bản, dung lượng, ngày cập nhật
- [x] Primary CTA Card: Nút Download `#FF5A36` (`text-[#121014]`, `rounded-[8px]`, `rel="noopener noreferrer" target="_blank"`) + ghi chú bắt buộc `"Opens a short ad page first"` ngay bên dưới
- [x] Media section: `YoutubeLite` demo video + thư viện ảnh chụp màn hình `screenshots`
- [x] Info section: Mô tả đầy đủ `description`, bảng phím điều khiển `controls` (`action` -> `key`), danh sách cấu hình `systemRequirements` (os, processor, memory, storage)
- [x] Related Games: 3 game liên quan dùng `GameCard.astro` (ưu tiên cùng platform)
- [x] `npm run build` pass, sinh ra đủ 7 trang tĩnh (`/index.html` và 6 trang `/games/*/index.html`)
- [x] `tsc --noEmit` pass, 0 lỗi TypeScript
- [x] Kiểm chứng 375px trên `/games/neon-talon`
- [x] Commit `2013759` trên `feat/game-detail` và merge vào `main`

## Commands Phase 4
```powershell
git checkout main
git merge feat/home-page
git checkout -b feat/game-detail

npm run build
npx --yes -p typescript tsc --noEmit
node C:\Users\Admin\AppData\Local\Temp\opencode\verify-game-detail.mjs
git commit -am "feat : Game Detail Page & YouTube Lite"
git checkout main
git merge feat/game-detail
```

## Kết quả Phase 4
- Số trang tĩnh sinh ra: `7` (`/index.html` + 6 `/games/*/index.html`)
- Thời gian build: ~`857ms`
- TypeScript: `0` lỗi
- Viewport 375×812 (`/games/neon-talon`):
  - Tiêu đề: `Neon Talon — ArenaForge`
  - H1: `Neon Talon`
  - Breadcrumbs: `Home / Games / Neon Talon`
  - Badge: `Mobile` (nền `rgb(255, 194, 71)`)
  - Download CTA: `Tải game (310 MB)`, link `https://example.com/shortlink-demo`, nền `rgb(255, 90, 54)`, chữ `rgb(18, 16, 20)`, bo góc `8px`
  - Ad note: `Opens a short ad page first` hiển thị rõ ràng ngay bên dưới
  - YoutubeLite: ban đầu có thumbnail `hqdefault.jpg`, nút Play, không có iframe; sau click chèn iframe `youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1`
  - Screenshots: `3` ảnh tỉ lệ 16:9
  - Controls: `6` thao tác hiển thị bảng kèm phím `<kbd>`
  - System Requirements: `4` mục cấu hình
  - Related Games: `3` cards (`Cloudstep Brawlers`, `Jade Comet Clash`, `Ashfall Duelists`)
- Screenshots:
  - `arenaforge-neon-talon-375.png`
  - `arenaforge-neon-talon-375-full.png`
  - `arenaforge-neon-talon-375-youtube.png`

## 11. Phase 5 — Static Pages & Final MVP Polish
- [x] Tạo nhánh `feat/static-pages` từ `main`
- [x] Tạo `src/pages/how-to-download.astro`:
  - 4 bước trực quan: Bấm nút Download cam -> Vượt trang shortlink quảng cáo -> Tải từ máy chủ an toàn -> Cài đặt PC (.zip) hoặc Mobile (.apk)
  - Cảnh báo an toàn minh bạch về quảng cáo, lưu ý không click popup lạ
  - Phần FAQ giải đáp chi tiết cảnh báo Android "Install unknown apps" và Windows SmartScreen
- [x] Tạo `src/pages/legal.astro` với 3 anchor sections rõ ràng:
  - `#about`: Về ArenaForge & Bản quyền (100% nguyên bản, zero-tolerance với phần mềm lậu, mod, crack, IP thương hiệu bên thứ 3)
  - `#contact`: Liên hệ & Báo link hỏng / Takedown email (`contact@arenaforge.example`, hướng dẫn tiêu đề email, phản hồi 24-48h)
  - `#privacy`: Chính sách Quyền riêng tư & Minh bạch quảng cáo (không tài khoản cá nhân, phân tích ẩn danh, shortlinks tài trợ)
- [x] Cập nhật `src/components/Footer.astro` trỏ chính xác:
  - About -> `/legal#about`
  - Contact -> `/legal#contact`
  - How to Download -> `/how-to-download`
  - Privacy -> `/legal#privacy`
  - 0 liên kết chết (broken link / 404)
- [x] Cập nhật `src/components/Navbar.astro` và `src/pages/index.astro` hỗ trợ tìm kiếm chuyển tiếp `/?q=...`
- [x] `npm run build` pass, sinh ra đủ **9 trang tĩnh**
- [x] `tsc --noEmit` pass, 0 lỗi TypeScript
- [x] Kiểm chứng viewport 375×812 trên mobile cho toàn bộ các trang và liên kết: tất cả URL trả về HTTP 200 OK
- [x] Commit `5001535` trên `feat/static-pages` và merge vào `main`

## Commands Phase 5
```powershell
git checkout main
git merge feat/game-detail
git checkout -b feat/static-pages

npm run build
npx --yes -p typescript tsc --noEmit
node C:\Users\Admin\AppData\Local\Temp\opencode\verify-static-pages.mjs
git commit -m "feat: add static pages for how-to-download and legal policies"
git checkout main
git merge feat/static-pages
```

## Kết quả Phase 5
- Tổng số trang tĩnh sinh ra: `9` trang
- Thời gian build: ~`908ms`
- TypeScript: `0` lỗi
- Kiểm tra toàn trang (375×812):
  - `/how-to-download`: 4 thẻ bước, 3 FAQ, footer 4 links
  - `/legal`: 3 anchors `#about`, `#contact`, `#privacy`, email liên hệ, footer 4 links
  - Kiểm tra 12 URL toàn site: tất cả trả về HTTP 200 OK, không có liên kết 404
- Screenshots:
  - `arenaforge-how-to-download-375.png`
  - `arenaforge-how-to-download-375-full.png`
  - `arenaforge-legal-375.png`
  - `arenaforge-legal-375-full.png`

## 12. Phase 6 — SEO Sitemap & Production Readiness
- [x] Tạo nhánh `feat/seo-deploy` từ `main`
- [x] Cài đặt `@astrojs/sitemap` (`^3.7.4`)
- [x] Cấu hình `astro.config.mjs` với integration `sitemap()`
- [x] Commit `8da2370` trên `feat/seo-deploy` và merge vào `main`

## 13. Pre-launch Configuration (`fix/pre-launch`)
- [x] Tạo nhánh `fix/pre-launch` từ `main`
- [x] Cập nhật `astro.config.mjs` với domain chính thức: `site: 'https://web-game-3s8.pages.dev'`
- [x] Cập nhật `public/robots.txt` với `Sitemap: https://web-game-3s8.pages.dev/sitemap-index.xml` và `Disallow: /` khi đang ở giai đoạn tiền phát hành
- [x] Tạo `src/data/site.ts` khai báo cấu hình site, mạng xã hội (mặc định rỗng) và hằng số `SITE_INDEXABLE = false`
- [x] Cập nhật `src/layouts/MainLayout.astro` render `<meta name="robots" content="noindex, nofollow">` khi `SITE_INDEXABLE = false`
- [x] Thêm hỗ trợ Cloudflare Web Analytics qua biến môi trường `PUBLIC_CF_ANALYTICS_TOKEN` (chỉ render snippet khi có token)
- [x] Thêm `PUBLIC_CF_ANALYTICS_TOKEN=` vào `.env.example`
- [x] Cập nhật `src/components/Navbar.astro` đọc liên kết mạng xã hội từ `src/data/site.ts` và tự động ẩn icon khi URL để trống
- [x] `npm run build` pass, sinh ra đủ 9 trang tĩnh kèm `dist/sitemap-0.xml` với toàn bộ URL chuẩn `https://web-game-3s8.pages.dev/`
- [x] `tsc --noEmit` pass, 0 lỗi TypeScript
- [x] Thêm danh sách kiểm tra các placeholder cần thay thế trước khi phát hành công khai vào cuối `todo.md`
- [ ] Chưa commit `fix/pre-launch` (đang ở working tree theo quy tắc an toàn)

### Working tree chưa commit
- `.env.example`
- `astro.config.mjs`
- `public/robots.txt`
- `rule.md`
- `src/components/Navbar.astro`
- `src/layouts/MainLayout.astro`
- `src/data/site.ts`
- `todo.md`

## Commands Pre-launch
```powershell
git checkout main
git checkout -b fix/pre-launch

npm run build
npx --yes -p typescript tsc --noEmit
git add -A
git commit -m "fix: pre-launch config with robots noindex, cf analytics, and empty social links"
git checkout main
git merge fix/pre-launch
```

## Kết quả Pre-launch
- Domain chuẩn: `https://web-game-3s8.pages.dev`
- Sitemap: sinh ra `sitemap-index.xml` và `sitemap-0.xml` với toàn bộ 9 URL sử dụng domain `https://web-game-3s8.pages.dev/`
- Robots.txt: `Disallow: /` và Sitemap line trỏ `https://web-game-3s8.pages.dev/sitemap-index.xml`
- Noindex meta tag: `<meta name="robots" content="noindex, nofollow">` hiển thị trên toàn bộ các trang tĩnh
- Cloudflare Web Analytics: render đúng snippet khi có biến `PUBLIC_CF_ANALYTICS_TOKEN`, không hiển thị khi không có biến
- Social icons: tự động ẩn trên Navbar khi URL trong `src/data/site.ts` để trống
- Thời gian build: ~`1.55s`
- TypeScript: `0` lỗi

## Placeholders to replace before public launch
- [ ] `placehold.co` images
- [ ] `youtubeId` `dQw4w9WgXcQ` (copyrighted music video)
- [ ] `example.com` download URLs
- [ ] `contact@arenaforge.example`
- [ ] generic YouTube/TikTok links in the Navbar
- [ ] fictional game descriptions
