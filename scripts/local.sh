echo "--- Launching locally, please wait.."
echo "** Stop the dyno.."
heroku ps:scale web=0
sleep 1
echo "** Start the project.."
npm run dev
echo "--- App Launched"