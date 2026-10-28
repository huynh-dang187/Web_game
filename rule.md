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
- Nhánh: `feat/home-page`
- Phase 1 và Phase 2 đã commit, merge vào `main`.
- Phase 3 đã có trang chủ, `GameCard`, filter tabs và search, chưa commit.
- Đã build trang chủ; chưa build `/games/[slug]`, `/how-to-download`, `/legal`.

## Stack
- Astro `7.4.2`, static output
- TypeScript strict: `tsconfig.json` extends `astro/tsconfigs/strict`
- Tailwind CSS `4.3.3`
- Tích hợp Tailwind theo cách khuyến nghị cho Tailwind v4: `@tailwindcss/vite`
- Design token khai báo bằng `@theme` trong `src/styles/global.css`

## Cấu trúc
```text
src/
├── components/
│   ├── Footer.astro
│   ├── GameCard.astro
│   └── Navbar.astro
├── data/
│   └── games.json
├── layouts/
│   └── MainLayout.astro
├── lib/
│   └── games.ts
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── types/
    └── game.ts
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

## Mock data
- `src/types/game.ts`: `Platform`, `ControlMapping`, `SystemRequirements`, `Game`.
- `src/data/games.json`: 6 game hư cấu (3 PC, 3 Mobile, 2 featured).
- `src/lib/games.ts`: `getAllVisibleGames()`, `getFeaturedGames()`, `getGameBySlug(slug)`.
- Ảnh mock dùng `https://placehold.co/800x450/1C1920/FF5A36.webp?text=...`.
- Download URL mock: `https://example.com/shortlink-demo`.
- `getAllVisibleGames()` và `getFeaturedGames()` chỉ trả game `isVisible`.
- `getGameBySlug()` chỉ trả game visible.

## Home page
- Hero lấy `getFeaturedGames()[0]`, fallback `getAllVisibleGames()[0]`.
- Filter tabs dùng `data-filter` với giá trị `all`, `PC`, `Mobile`.
- Search dùng `#site-search` trong Navbar, lọc theo `data-title`.
- Card dùng `data-platform` và `data-title` để lọc client-side.
- Grid: `1` cột mobile, `2` cột từ `md`, `3` cột từ `lg`.
- Empty state dùng `#empty-state`, hiển thị khi không còn card nào khớp.
- Link chi tiết tạm trỏ `/games/${slug}`; trang chi tiết chưa được build.

## Quy ước bắt buộc
- Mobile-first, tối ưu cho 4G, hạn chế JavaScript phía client.
- Chỉ dùng màu phẳng. Không gradient, glow, blur, shadow.
- Dùng token thay vì hard-code màu.
- Không thêm dependency hoặc dịch vụ trả phí khi chưa hỏi.
- Không commit trừ khi được yêu cầu rõ ràng.
- Không tạo trang mới nếu task chưa yêu cầu.
- Cập nhật `todo.md` sau mỗi bước; chỉ tick khi đã kiểm chứng.
- Chỉ dùng game/character/assets nguyên bản hoặc có giấy phép thương mại rõ ràng.
- Không đưa game file hoặc video gốc vào repo. Ảnh production chỉ dùng `.webp` dưới 1 MB.
- Nút Download phải có ghi chú "Opens a short ad page first".
- Sample data chỉ dùng tên hư cấu.

## Kiểm chứng
```powershell
npm run build
npx --yes -p typescript tsc --noEmit
npm run dev -- --host 127.0.0.1 --port 4321
```

Mở `http://127.0.0.1:4321`, dùng DevTools → Toggle device toolbar → `375 × 812`.

Kỳ vọng:
- Navbar: logo "ArenaForge", search, icon YouTube/TikTok, hamburger trên mobile.
- Hero featured: `Ashfall Duelists`, badge `PC`, CTA tới `/games/ashfall-duelists`.
- Filter tabs: All / PC / Mobile; tab active nền `#FF5A36`, chữ `#121014`.
- Grid: 1 cột ở 375px, 2 cột ở 768px, 3 cột ở 1280px.
- Có đủ 6 card, mỗi card có cover 16:9, platform badge, genre tags, title, mô tả ngắn.
- Search theo tên game và filter platform kết hợp được, không reload.
- Search không khớp: hiện "Không tìm thấy game phù hợp."
- Footer có 4 link và dòng "All games are original creations".
- Nền `#121014`, chữ `#F2EEE9`.

Lưu ý khi test headless:
- Chrome headless có thể ép chiều rộng tối thiểu 500px dù truyền `--window-size=375,812`.
- Muốn test đúng 375px, dùng DevTools responsive hoặc CDP `Emulation.setDeviceMetricsOverride` với `width: 375`, `mobile: true`.

Kiểm tra ignore:
```powershell
git check-ignore -v .env .env.example dist .astro
```
`.env`, `dist`, `.astro` phải bị ignore; `.env.example` phải được track.

## Lịch sử
- 2026-10-28: Hoàn thành scaffold trên nhánh `feat/scaffold`, merge vào `main`.
- 2026-10-28: Hoàn thành Phase 2 (types, mock data, helpers) trên `feat/mock-data`, merge vào `main`.
- 2026-10-28: Hoàn thành Phase 3 (home page, GameCard, filter/search) trên `feat/home-page`.
