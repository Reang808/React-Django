#!/bin/bash

# PostgreSQL バックアップスクリプト
# 使用方法: ./backup_postgres.sh

DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/var/backups/postgresql"
DB_NAME="reang_db"
DB_USER="reang_user"

# バックアップディレクトリの作成
mkdir -p $BACKUP_DIR

# データベースのバックアップ
sudo -u postgres pg_dump -U $DB_USER -h localhost $DB_NAME > $BACKUP_DIR/reang_db_$DATE.sql

# 7日以上古いバックアップファイルを削除
find $BACKUP_DIR -name "reang_db_*.sql" -mtime +7 -delete

echo "バックアップが完了しました: reang_db_$DATE.sql"