#Sup lazy me from the future. Its me Depressed now. Here ya go
#Yo yo, Its doing much better me now. Thanks!

for i in $(ls)
do 
    cd $i
    printf Updating $i
    git pull
    cd ..
done
