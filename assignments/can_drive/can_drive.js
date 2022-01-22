function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingliscene===false){
        return "You cannot drive"
    }else{
        if (isTired===true || isSober===false){
            return "You shouldn't drive"
        }else{
            return "You can drive"
        }

    }
 
}


module.exports = CanDrive;
