
git checkout master

NODE_ENV=production npm run build

# cache the new files
mkdir ./.temp
mv ./index.html ./.temp/index.html
mv ./release ./.temp/release

# remove old files
git checkout gh-pages && git pull -pf
git rm ./index.html
git rm -rf ./release
git commit -m "ready to release"

# use new files
mv ./.temp/index.html ./index.html
mv ./.temp/release ./
rmdir ./.temp

git add ./index.html
git add ./release/*

git commit -am "release a beta"
git push -u origin gh-pages:gh-pages

# go back
git checkout -f master

echo "Enter exit..."
read enter
