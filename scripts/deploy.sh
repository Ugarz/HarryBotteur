echo "-- Deploying on Heroku, please wait.."
git add -A 
git commit -m "commit-trash" 
git push && git push heroku master 
echo "-- App Deployed"