## 🛠️ Technologies Used
- ▲ **NextJS**
- 🎨 **Tailwind CSS**
- ⌨️ **TypeScript**
- ✉️ **Supabase**
- 📈 **Grafana**
---
[![Made with Supabase](https://supabase.com/badge-made-with-supabase-dark.svg)](https://supabase.com)

## 📂 Project Structure

```plaintext
Directory structure:
└── diegodev2-splay/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── eslintrc.json
    ├── middleware.ts
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── auth/
    │   │   ├── callback/
    │   │   │   └── route.ts
    │   │   └── confirm/
    │   │       └── route.ts
    │   ├── dashboard/
    │   │   ├── LogoutButton.tsx
    │   │   ├── action.ts
    │   │   └── page.tsx
    │   ├── error/
    │   │   └── page.tsx
    │   ├── fonts/
    │   │   ├── GeistMonoVF.woff
    │   │   └── GeistVF.woff
    │   ├── forgot-password/
    │   │   ├── action.ts
    │   │   ├── page.tsx
    │   │   ├── confirmation/
    │   │   │   └── page.tsx
    │   │   └── reset-password/
    │   │       ├── action.ts
    │   │       └── page.tsx
    │   ├── login/
    │   │   ├── GoogleSignin.tsx
    │   │   ├── LoginForm.tsx
    │   │   ├── action.ts
    │   │   └── page.tsx
    │   └── register/
    │       ├── action.ts
    │       ├── page.tsx
    │       └── confirmation/
    │           └── page.tsx
    ├── components/
    │   ├── header.tsx
    │   ├── landing.tsx
    │   ├── objetives.tsx
    │   └── ui/
    │       ├── LoginButton.tsx
    │       ├── Map.tsx
    │       ├── animated-beam.tsx
    │       ├── animated-grid-pattern.tsx
    │       ├── badge.tsx
    │       ├── bento.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── dropdown-menu.tsx
    │       ├── flip-words.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       └── objetives/
    │           ├── badge.tsx
    │           └── ben.tsx
    ├── grafana/
    │   ├── README.md
    │   ├── Dockerfile
    │   ├── LICENSE
    │   ├── Makefile
    │   ├── docker-compose.yml
    │   ├── entrypoint.sh
    │   ├── fly.toml
    │   ├── supervisord.conf
    │   ├── .dockerignore
    │   ├── .gitattributes
    │   ├── .gitignore
    │   ├── docs/
    │   │   ├── example-alerts.md
    │   │   └── metrics.md
    │   ├── grafana/
    │   │   ├── dashboard.json
    │   │   ├── dashboard.yml
    │   │   └── datasource.yml
    │   └── prometheus/
    │       ├── prometheus.target.yml.tpl
    │       └── prometheus.yml
    ├── hooks/
    │   └── use-toast.ts
    ├── lib/
    │   ├── supabase.ts
    │   └── utils.ts
    ├── public/
    │   ├── bg/
    │   │   └── bkg-noise.webp
    │   ├── logo/
    │   ├── providers/
    │   │   └── ccmixter.webp
    │   ├── register/
    │   │   ├── github.tsx
    │   │   └── google.tsx
    │   └── ui/
    ├── utils/
    │   └── supabase/
    │       ├── client.ts
    │       ├── middleware.ts
    │       └── server.ts
    └── validation/
        ├── passwordMatchSchema.ts
        └── passwordSchema.ts
 ```
