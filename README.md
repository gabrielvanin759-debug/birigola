# Boinitim Wallpapers

Site estático de wallpapers feito para rodar no GitHub Pages.

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
└── wallpapers/
```

## Como adicionar um wallpaper

1. Coloque a imagem dentro de `wallpapers/`.
2. Abra `script.js`.
3. Adicione um objeto ao array `wallpapers`:

```js
{
  title: "Nome do wallpaper",
  category: "Games",
  image: "wallpapers/nome-da-imagem.jpg",
  resolution: "1920×1080"
}
```

## GitHub Pages

No GitHub:

**Settings → Pages → Build and deployment → Deploy from a branch**

Selecione a branch `main` e a pasta `/ (root)`.

Depois de salvar, o GitHub vai fornecer o endereço do site.
