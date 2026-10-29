# TODO — ArenaForge

> Cập nhật file này sau mỗi bước. Chỉ đánh dấu `[x]` khi đã kiểm chứng thực tế.
> Nhánh hiện tại: `feat/home-page`
> Trạng thái: tạm dừng sau Phase 3; Phase 3 hoàn thành, chưa commit.
> Cập nhật cuối: 2026-10-28

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

## Chưa làm
- Chưa commit `feat/home-page` (đúng yêu cầu của task).
- Chưa tạo các trang nội dung `/games/[slug]`, `/how-to-download`, `/legal`.
- Chưa có `AGENTS.md` và `docs/design/`; đang dùng `agent.md` làm context gốc.

## 10. Tạm dừng — 2026-10-28
- [x] Dừng phiên làm việc tại Phase 3
- [x] Build và TypeScript check đã pass
- [x] Ghi lại trạng thái vào `todo.md`

### Working tree chưa commit
- `src/components/GameCard.astro` (file mới)
- `src/pages/index.astro`
- `todo.md`
- `rule.md`

### Việc tiếp theo khi mở lại phiên
- [ ] Review lại Phase 3 và commit `feat/home-page`
- [ ] Merge `feat/home-page` vào `main`
- [ ] Tạo `src/pages/games/[slug].astro`
- [ ] Thêm nút Download + ghi chú "Opens a short ad page first"
- [ ] Lazy embed YouTube demo
- [ ] Tạo trang `/how-to-download`
- [ ] Tạo trang `/legal`
- [ ] Test lại 375px, 768px, 1280px trước khi merge
