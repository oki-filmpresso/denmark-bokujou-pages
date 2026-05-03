# Denmark Bokujou — iframe assets

社会福祉法人デンマーク牧場福祉会のWixサイトから、iframe で読み込む各施設ページのHTML置き場。

GitHub Pages で公開、`main` ブランチに push すると自動配信される。

## URLs

- ルート: <https://oki-filmpresso.github.io/denmark-bokujou-pages/>
- 各HTML: `https://oki-filmpresso.github.io/denmark-bokujou-pages/iframe/<filename>.html`

## ファイル一覧

| ファイル | 用途 | iframe URL(末尾) |
|---|---|---|
| `iframe/denmark-bokujo.html` | 法人概要(/policy) | `iframe/denmark-bokujo.html` |
| `iframe/denmark-enkaku.html` | 概要・沿革・財務状況 | `iframe/denmark-enkaku.html` |
| `iframe/denmark-privacy.html` | 個人情報保護方針 | `iframe/denmark-privacy.html` |
| `iframe/ibuki-rich.html` | 就労支援いぶき(リッチ版) | `iframe/ibuki-rich.html` |
| `iframe/kohituji-renewal.html` | こひつじ診療所 | `iframe/kohituji-renewal.html` |
| `iframe/denmark-lp-mockup.html` | LPモックアップ | `iframe/denmark-lp-mockup.html` |
| `iframe/footer.html` | 全ページ共通フッター | `iframe/footer.html` |
| `iframe/bokujo.html` | デンマーク牧場(放牧・体験) | `iframe/bokujo.html` |
| `iframe/diakonia.html` | 特別養護老人ホーム ディアコニア | `iframe/diakonia.html` |
| `iframe/kodomo-support.html` | こども家庭サポートセンター(だいち/わかば/たより) | `iframe/kodomo-support.html` |
| `iframe/makibanoie.html` | 児童養護施設 まきばの家 | `iframe/makibanoie.html` |

## 更新フロー

```bash
cd ~/Documents/projects/denmark-bokujou-pages
# ここでHTML編集
git add iframe/<file>.html
git commit -m "update: <内容>"
git push
# 30秒〜1分で github.io に反映
```

Wix Studio側のiframe URLは**固定**なので、HTML更新時にWix側を触る必要なし。

## 関連リポジトリ

- 本リポジトリ(public): `oki-filmpresso/denmark-bokujou-pages` — iframe HTML配信専用
- Wix Velo連携(private): `oki-filmpresso/denmark-bokujou` — Wix Studio Git Integration、Veloコードのみ

## 注意

- 画像・素材は Wix Media に直リンク(`https://static.wixstatic.com/media/...`)推奨
- このrepoは公開なので、機密情報(APIキー等)を絶対にcommitしない
