# Denmark Bokujou — iframe assets (gh-pages)

社会福祉法人デンマーク牧場福祉会のWixサイトから、iframe で読み込む各施設ページのHTML置き場。

## デプロイ

このブランチ(`gh-pages`)にpushすると GitHub Pages が自動配信:

- ルート: `https://oki-filmpresso.github.io/denmark-bokujou/`
- 各HTML: `https://oki-filmpresso.github.io/denmark-bokujou/iframe/<filename>.html`

## ファイル一覧

| ファイル | 用途 | iframe URL |
|---|---|---|
| `iframe/denmark-bokujo.html` | 法人概要(/policy) | `…/iframe/denmark-bokujo.html` |
| `iframe/denmark-enkaku.html` | 概要・沿革・財務状況 | `…/iframe/denmark-enkaku.html` |
| `iframe/denmark-privacy.html` | 個人情報保護方針 | `…/iframe/denmark-privacy.html` |
| `iframe/ibuki-rich.html` | 就労支援いぶき(リッチ版) | `…/iframe/ibuki-rich.html` |
| `iframe/kohituji-renewal.html` | こひつじ診療所 | `…/iframe/kohituji-renewal.html` |
| `iframe/denmark-lp-mockup.html` | LPモックアップ | `…/iframe/denmark-lp-mockup.html` |

## 更新フロー

```bash
# ローカルでHTML編集後
git add iframe/<file>.html
git commit -m "update: <内容>"
git push origin gh-pages
# 30秒〜1分で github.io に反映
```

Wix Studio側のiframe URLは**固定**なので、HTML更新時にWix側を触る必要なし。

## 注意

- このリポジトリの `main` ブランチは Wix Studio (Velo) と連携しているため触らない
- iframe HTMLの編集・追加は **必ず `gh-pages` ブランチ** で行う
- 画像・素材は Wix Media に直リンク(`https://static.wixstatic.com/media/...`)推奨
