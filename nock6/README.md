# 6. Next.js AppRouter + Hono で作る旅行予定作成アプリ

basic 認証入れて身内しか使わない想定

機能は少しだけ

予定が縦に並ぶタイムライン形式

日付を跨ぐ部分にはそんな感じの UI を入れる

余裕があればドラッグ&ドロップでグリグリ動かせるようにする

データは cloud flare に保存

他の人と共有できればなお良い

概要の記述で markdown を入れれば、lexical が使えますねぇ

## DB 設計

旅行データ

1. id(primary)
2. 旅行期間
3. 予定のリスト
4. 旅行タイトル

予定データ

1. id(primary key, string)
2. 日時
3. タイトル
4. 概要(markdown)
