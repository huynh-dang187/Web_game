# TODO — Scaffold ArenaForge

> Cập nhật file này sau mỗi bước. Chỉ đánh dấu `[x]` khi đã kiểm chứng thực tế.
> Nhánh làm việc: `feat/scaffold`
> Trạng thái: hoàn thành scaffold, chưa commit.

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

## Chưa làm
- Chưa commit (chỉ commit khi được yêu cầu).
- Chưa tạo các trang nội dung `/games/[slug]`, `/how-to-download`, `/legal`.
- Chưa có `docs/design/` hoặc ảnh thiết kế để đối chiếu.
