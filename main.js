
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    
    posenet=ml5.poseNet(video,modelWorks);
    posenet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function modelWorks(){
    console.log("LOL");
}

function draw(){
image(video,0,0,400,400);
}

function pic(){
    save("just no.png");
}