Write-Host "🚀 Cleaning project..." -ForegroundColor Cyan
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm cache clean --force
Write-Host "✅ Done! Run 'npm install'" -ForegroundColor Green