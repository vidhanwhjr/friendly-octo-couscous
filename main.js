noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();

    pose = ml5.poseNet(img, modelLoaded);
    pose.on('pose', gotPoses);
}

function preload(){
    nose_img = loadImage ("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function modelLoaded(){
    console.log('poseNet is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-190;
        noseY = results[0].pose.nose.y-120;
        
    }
}

function draw(){
    image(img, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
   //circle(noseX, noseY, 30);
    image(nose_img, noseX, noseY, 30, 30);
}

function download(){
    save('myjokerpicture.png')
}