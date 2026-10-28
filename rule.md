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
- Nhánh: `feat/scaffold`
- Đã scaffold xong Astro + Tailwind, chưa commit.
- Chưa build trang nội dung. `src/pages/index.astro` chỉ là shell rỗng để render layout.

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
│   └── Navbar.astro
├── layouts/
│   └── MainLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
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
npm run dev -- --host 127.0.0.1 --port 4321
```

Mở `http://127.0.0.1:4321`, dùng DevTools → Toggle device toolbar → `375 × 812`.

Kỳ vọng:
- Navbar: logo "ArenaForge", hamburger bên phải.
- Bấm hamburger: hiện search input + icon YouTube/TikTok.
- Main trống.
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
- 2026-10-28: Hoàn thành scaffold trên nhánh `feat/scaffold`.
