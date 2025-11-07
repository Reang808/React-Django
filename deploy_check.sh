#!/bin/bash

# 本番環境デプロイ前チェックスクリプト

echo "🔍 Django本番環境設定チェック..."

# 1. セキュリティチェック
echo "1. セキュリティチェック実行中..."
python manage.py check --deploy

# 2. 静的ファイル収集
echo "2. 静的ファイル収集中..."
python manage.py collectstatic --noinput

# 3. マイグレーション確認
echo "3. マイグレーション確認中..."
python manage.py showmigrations

echo "✅ 本番環境準備完了"
echo ""
echo "📋 デプロイ前の確認事項:"
echo "- PostgreSQLサーバーが起動している"
echo "- データベース 'reang_db' とユーザー 'reang_user' が作成されている"  
echo "- SSL証明書が設定されている"
echo "- ドメイン 'api.reang.jp' がサーバーIPに向いている"
echo "- ファイアウォール設定が適切"