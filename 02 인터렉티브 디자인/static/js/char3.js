window.onload = function() {
    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    
    var center_x = 400;
    var center_y = 260;

    var body = new paper.Shape.Ellipse({
        center: [center_x, center_y+225],
        radius: [190, 210],
        fillColor: 'black'
    });

    var left_leg = new paper.Shape.Ellipse({
        center: [center_x-125, center_y+360],
        radius: [85, 85],
        fillColor: 'black'
    });

    var right_leg = new paper.Shape.Ellipse({
        center: [center_x+125, center_y+360],
        radius: [85, 85],
        fillColor: 'black'
    });

    var left_foot = new paper.Path.Line({
        from: [center_x-205, center_y+445-15],
        to: [center_x-125, center_y+445-15],
        strokeColor: 'black',
        strokeCap: 'round',
        strokeWidth: 30
    });

    var right_foot = new paper.Path.Line({
        from: [center_x+205, center_y+445-15],
        to: [center_x+125, center_y+445-15],
        strokeColor: 'black',
        strokeCap: 'round',
        strokeWidth: 30
    });

    var face = new paper.Shape.Ellipse({
        center: [center_x, center_y],
        radius: [155, 155],
        fillColor: 'black'
    });

    var left_cheek = new paper.Shape.Ellipse({
        center: [center_x-125, center_y+65],
        radius: [105, 105],
        fillColor: 'black'
    });

    var right_cheek = new paper.Shape.Ellipse({
        center: [center_x+125, center_y+65],
        radius: [105, 105],
        fillColor: 'black'
    });

    var left_ear = new paper.Shape.Ellipse({
        center: [center_x-100, center_y-130],
        radius: [40, 30],
        fillColor: 'black'
    }).rotate(45);

    var right_ear = new paper.Shape.Ellipse({
        center: [center_x+100, center_y-130],
        radius: [40, 30],
        fillColor: 'black'
    }).rotate(-45);

    var left_mouse = new paper.Path.Arc({
        from: [center_x-60, center_y+75],
        through: [center_x-35, center_y+105],
        to: [center_x, center_y+75],
        strokeColor: 'white',
        strokeWidth: 10
    });

    var right_mouse = new paper.Path.Arc({
        from: [center_x+60, center_y+75],
        through: [center_x+35, center_y+105],
        to: [center_x, center_y+75],
        strokeColor: 'white',
        strokeWidth: 10
    });

    var left_eye = new paper.Shape.Ellipse({
        center: [center_x-70, center_y-40],
        radius: [12, 25],
        fillColor: 'white'
    });

    var right_eye = new paper.Shape.Ellipse({
        center: [center_x+70, center_y-40],
        radius: [12, 25],
        fillColor: 'white'
    });

    var left_arm = new paper.Path.Rectangle({
        topLeft: [center_x-120, center_y+225],
        bottomRight: [center_x-80, center_y+295],
        radius: 20,
        strokeColor: 'white',
        strokeWidth: 10
    });

    var left_block = new paper.Path.Rectangle({
        topLeft: [center_x-135, center_y+215],
        bottomRight: [center_x-65, center_y+245],
        fillColor: 'black'
    });

    var right_arm = new paper.Path.Rectangle({
        topLeft: [center_x+120, center_y+225],
        bottomRight: [center_x+80, center_y+295],
        radius: 20,
        strokeColor: 'white',
        strokeWidth: 10
    });

    var right_block = new paper.Path.Rectangle({
        topLeft: [center_x+135, center_y+215],
        bottomRight: [center_x+65, center_y+245],
        fillColor: 'black'
    });

    var left_circle = new paper.Shape.Ellipse({
        center: [center_x-165, center_y+65],
        radius: [50, 50],
        fillColor: '#b54a03'
    });

    var right_circle = new paper.Shape.Ellipse({
        center: [center_x+165, center_y+65],
        radius: [50, 50],
        fillColor: '#b54a03'
    });

    var almond_start_x = center_x-100;
    var almond_start_y = center_x+150;
    var almond_end_x = almond_start_x+200;
    var almond_end_y = almond_start_y;

    var cheek = new paper.Group({
        children: [left_cheek, right_cheek, left_circle, right_circle],
        name: "cheek"
    });
    
    var ear = new paper.Group({
        children: [left_ear, right_ear],
        name: "ear"
    });
    
    var eye = new paper.Group({
        children: [left_eye, right_eye],
        name: "eye"
    });

    var mouse = new paper.Group({
        children: [left_mouse, right_mouse],
        name: "mouse"
    });
    mouse.position.y -= 65;
    mouse.scaling = 0.75;

    var leg = new paper.Group({
        children: [left_leg, right_leg, left_foot, right_foot],
        name: "leg"
    });

    var left_arms = new paper.Group({
        children: [left_arm, left_block],
        name: "left_arm"
    }); 

    var right_arms = new paper.Group({
        children: [right_arm, right_block],
        name: "right_arm"
    }); 

    var arm = new paper.Group({
        children: [left_arms, right_arms],
        name: "arm"
    });

    var head = new paper.Group({
        children: [face, cheek, ear, eye, mouse],
        name: "head"
    });

    var almond = new paper.Group({});

    for(var i=0; i<9; i++){
        var sign = 1;
        if(i%2 == 1){
            sign *= -1;
        }
        var first_segment = new paper.Segment({
            point: [almond_start_x, almond_start_y],
            handleOut: [30, sign*(100-parseInt(i/2)*25)]
        });

        var second_segment = new paper.Segment({
            point: [almond_end_x, almond_end_y],
            handleIn: [-30, sign*(40-parseInt(i/2)*10)]
        });
        
        almond.addChild(new paper.Path({
            segments: [first_segment, second_segment],
            strokeColor: 'black',
            strokeWidth: 2-parseInt(i/2)*0.3,
            fillColor: new paper.Color(0.66+(i*0.05), 0.23+(i*0.05), 0+(i*0.05))
        }));
    }

    var character = new paper.Group({
        children: [body, head, leg, arm]
    });

    var width = paper.view.viewSize.width;
    var height = paper.view.viewSize.height;

    var background = new paper.Path.Rectangle({
        topLeft: [0, 0],
        bottomRight: [width, height],
        fillColor: "#8db5f5"
    });
    character.transformContent = false;
    character.scaling = 0.25;
    almond.transformContent = false;
    almond.scaling = 0.25;
    var char_width = parseInt(character.bounds.width)+40;
    var char_height = parseInt(character.bounds.height);
    var almond_width = parseInt(almond.bounds.width);
    var almond_height = parseInt(almond.bounds.height);
    var memory_x = [];
    var memory_y = [];
    var ham_amount = 10;
    var almond_amount = 75;
    var pre_hams = new paper.Group();
    var suf_hams = new paper.Group()
    var almonds = new paper.Group();

    for (var i=0; i<almond_amount; i++) {
        var x = Math.random() * width;
        var y = Math.random() * height;
        var scale = Math.floor(Math.random() * (20 - 15) + 15) / 100;
        var angle = parseInt(Math.random() * 18) * 20;
        copy = almond.copyTo(paper.project);
        almonds.addChild(copy);
        copy.scaling = scale;
        copy.position = [x, y];
        copy.rotate(angle);
    }

    for (var i=0; i<ham_amount; i++) {
        var x = (parseInt(Math.random() * width / char_width)+1) * char_width;
        if (x > width-char_width) {
            x -= char_width;
        }
        var y = (parseInt(Math.random() * height / char_height)+1) * char_height;
        if (y > height-char_height) {
            y -= char_height;
        }
        if (memory_x.indexOf(x) < 0) {
            memory_x.push(x);
            memory_y.push(y);
        }
        else if (memory_y[memory_x.indexOf(x)] != y) {
            // 첫번째 인덱스 뒤도 검사
            var flag = false;
            for (var j=memory_x.indexOf(x)+1; j<memory_x.length; j++) {
                if (memory_x[j] == x) {
                    if (memory_y[j] == y) {
                        // 잡았다 요놈
                        flag = true;
                        j = memory_x.length+1;
                    }
                }
            }
            if (flag == true) {
                i--;
                continue;
            }
            memory_x.push(x);
            memory_y.push(y);
        }
        else {
            i--;
            continue;
        }
        // x += Math.random() * (50 - (-50)) + (-50);
        // y += Math.random() * (50 - (-50)) + (-50);
        var scale = Math.floor(Math.random() * (25 - 15) + 15) / 100;
        var angle = Math.floor(Math.random() * (90 - (-90)) + (-90));
        var left_arm_angle = parseInt(Math.random() * 18) * 20;
        var right_arm_angle = parseInt(Math.random() * 18) * 20;
        
        copy = character.copyTo(paper.project);
        if (i < ham_amount/2) {
            pre_hams.addChild(copy);
        }
        else {
            suf_hams.addChild(copy);
        }
        copy.position = [x, y];
        copy.scaling = scale;
        copy.children["arm 1"]
            .children["left_arm 1"]
            .rotate(left_arm_angle);
        copy.children["arm 1"]
            .children["right_arm 1"]
            .rotate(right_arm_angle);
        var r = Math.random() * (0.6 - 1) + 1;
        var g = Math.random() * (0.1 - 0.6) + 0.6;
        var b = r / 3;
        copy.children["head 1"]
            .children["cheek 1"]
            .children[2]
            .fillColor = new paper.Color(r, g, b);
        copy.children["head 1"]
            .children["cheek 1"]
            .children[3]
            .fillColor = new paper.Color(r, g, b);
        
        r = Math.random() * (0 - 0.6) + 0.6;
        g = r / 2;
        b = r / 3;
        var color = new paper.Color(r, g, b);
        // var color = "#3d1f14"; 
        copy.children[0].fillColor = color
        copy.children["head 1"].children[0].fillColor = color;
        copy.children["head 1"].children[1].children[0].fillColor = color;
        copy.children["head 1"].children[1].children[1].fillColor = color;
        copy.children["head 1"].children[2].fillColor = color;
        copy.children["leg 1"].children[0].fillColor = color;
        copy.children["leg 1"].children[1].fillColor = color;
        copy.children["leg 1"].children[2].strokeColor = color;
        copy.children["leg 1"].children[3].strokeColor = color;
        copy.children["arm 1"].children[0].children[1].fillColor = color;
        copy.children["arm 1"].children[1].children[1].fillColor = color;
        copy.rotate(angle);
    }
    almond.visible = false;
    character.visible = false;
    var text = new paper.PointText(new paper.Point(30, 60));
    text.fillColor = 'black';
    text.content = 'A : 회전+축소   D : 회전+확대   W : 배경 전환   S : 리셋';
    text.fontSize = 32;
    text.fontWeight = "bold";

    var suf_ham_centers = [];
    var pre_ham_centers = [];
    for (var i=0; i<ham_amount/2; i++) {
        pre_ham_centers.push(pre_hams.children[i].position);
        suf_ham_centers.push(suf_hams.children[i].position);
    }
    var suf_ham_center = suf_hams.position;
    var is_storm = false;
    pre_hams.applyMatrix = false;
    suf_hams.applyMatrix = false;

    suf_hams.pivot = [width/2, height/2];
    
    function map(value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }

    paper.view.onMouseMove = function(event){
        var mouse_x = parseInt(event.point.x);
        var mouse_y = parseInt(event.point.y);
        for (var i=0; i<ham_amount/2; i++) {
            var ham_x = pre_hams.children[i].position.x;
            var ham_y = pre_hams.children[i].position.y;
            var d_x = Math.abs(ham_x - mouse_x);
            var d_y = Math.abs(ham_y - mouse_y);
            if (d_x < 150 && d_y < 150) {
                pre_hams.children[i].position.x += (ham_x - mouse_x)/d_x*3;
                pre_hams.children[i].position.y += (ham_y - mouse_y)/d_y*3;
            
            }
            else {
                pre_hams.children[i].position.x -= (ham_x - mouse_x)/d_x*2;
                pre_hams.children[i].position.y -= (ham_y - mouse_y)/d_y*2;
            }
        }
    } 

    paper.view.onKeyDown = function(event){
        var acc = suf_hams.scaling.x * 10
        if(event.key == 'a'){
            if (suf_hams.scaling.x > 0.01) {
                suf_hams.scaling.x -= 0.01;
                suf_hams.scaling.y -= 0.01;
            }
            suf_hams.rotate(5+map(acc, 0, 20, 30, 0));
        }
        if(event.key == 'd'){
            if (suf_hams.scaling.x < 2) {
                suf_hams.scaling.x += 0.01;
                suf_hams.scaling.y += 0.01;
            }
            suf_hams.rotate(-(10+map(acc, 0, 20, 0, 30)));
        }
        if(event.key == 's') {
            for (var i=0; i<ham_amount/2; i++) {
                pre_hams.children[i].position = pre_ham_centers[i];
            }
        }
        if (event.key == 'w') {
            if (is_storm) {
                is_storm = false;
                background.fillColor = "#8db5f5";
            }
            else {
                is_storm = true;
                background.fillColor = "black";
            }
        }
    }
    paper.view.onFrame = function(event) {
        for (var i=0; i<almonds.children.length; i++) {
            var pos = almonds.children[i].position;
            almonds.children[i].rotate(1);
            if (is_storm) {
                almonds.children[i].position.x += 5;
                almonds.children[i].position.y += 20;
            }
            else {
                almonds.children[i].position.x += 3;
                almonds.children[i].position.y += 3;
            }
            if (pos.x > width || pos.y > height) {
                almonds.children[i].position.x = -width + Math.random()*width*2;
                if (almonds.children[i].position.x < 0) {
                    almonds.children[i].position.y = -almonds.children[i].position.x;
                    almonds.children[i].position.x = -30;
                }
                else {
                    almonds.children[i].position.y = 0;
                }
            }
        } 
    }
    // Draw the view now:
    paper.view.draw();
}
