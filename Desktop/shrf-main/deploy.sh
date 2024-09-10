echo "Switching to branch master"
git checkout master

echo "Bulding app ..."
npm run build

echo "Deploying files to server..."
scp -r dist/* shrf@164.92.228.28:/var/www/shrf.az/
echo "Done!"