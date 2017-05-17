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
    var char_width = parseInt(character.bounds.width)+40;
    var char_height = parseInt(character.bounds.height);
    var char_size = 70;
    var count_per_row = parseInt(width/char_size);

    function set_body_color(copy) {
        r = Math.random() * (0 - 0.6) + 0.6;
        g = r / 2;
        b = r / 3;
        var color = new paper.Color(r, g, b);

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
    }
    function set_face_color(copy) {
        var r = Math.random() * (0.6 - 1) + 1;
        var g = Math.random() * (0.1 - 0.6) + 0.6;
        var b = r / 3;
        var color = new paper.Color(r, g, b);
        copy.children["head 1"]
            .children["cheek 1"]
            .children[2]
            .fillColor = color;
        copy.children["head 1"]
            .children["cheek 1"]
            .children[3]
            .fillColor = color;
    }

    // level2
    // base_density = 10
    // for (var j=0; j<8; j++) {
    //     density = base_density + 2*j;
    //     for (var i=0; i<360/density; i++) {
    //         x = width/2 + (360-j*50)*Math.cos(Math.PI * i*density / 180);
    //         y = height/2 + (360-j*50)*Math.sin(Math.PI * i*density / 180);
    //         copy = character.copyTo(paper.project);
    //         copy.rotate(90+i*density);
    //         copy.scaling = 0.15-j/100;
    //         copy.position = [x, y];
    //         set_face_color(copy)
    //         set_body_color(copy)
    //     }
    // }

    // level1
    // for (var i=0; i<300; i++) {
    //     x = i%count_per_row * char_size;
    //     y = parseInt(i/count_per_row) * char_size;
    //     copy = character.copyTo(paper.project);
    //     copy.scaling = 0.15;
    //     copy.position = [x, y];
    //     set_face_color(copy)
    //     set_body_color(copy)
    // }

    // level 3
    var hams = [];
    var ham_amount = 5;
    var shadow_amount = 10;
    var shadow_length = 50;
    var scale_factor = 120;
    var star = [
        [0,0],
        [-scale_factor,-scale_factor],
        [-scale_factor,scale_factor],
        [scale_factor,-scale_factor],
        [scale_factor,scale_factor],
    ];
    for (var i=0; i<ham_amount; i++) {
        var x = parseInt(Math.random() * width);
        var y = parseInt(Math.random() * height);
        var scale = Math.floor(Math.random() * (25 - 15) + 15) / 100;
        var angle = Math.floor(Math.random() * (90 - (-90)) + (-90));
        var left_arm_angle = parseInt(Math.random() * 18) * 20;
        var right_arm_angle = parseInt(Math.random() * 18) * 20;
        
        copy = character.copyTo(paper.project);
        copy.position = [x, y];
        copy.scaling = scale;
        set_face_color(copy)
        set_body_color(copy)
        //copy.rotate(angle);
        hams.push(copy);
    }
    // init
    var ham_childs = [];
    for (var i=0; i<ham_amount; i++) {
        //hams[i].visible = false;
        var ham_child = new paper.Group();
        for (var j=0; j<shadow_amount; j++) {
            var new_char = hams[i].copyTo(paper.project)
            new_char.position = new paper.Point(
                (j+0.5) * width/10,
                (i*100) + height/3
            );
            new_char.opacity = map(j, 0, shadow_amount, 1, 0);
            ham_child.addChild(new_char);
        }
        ham_childs.push(ham_child);
        hams[i].visible = false;
    }

    character.visible = false;
    hams.applyMatrix = false;
    
    function map(value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }
    paper.view.onMouseMove = function(event){
        for (var i=0; i<ham_amount; i++) {
            ham_childs[i].children[0].position.x = event.point.x + star[i][0];
            ham_childs[i].children[0].position.y = event.point.y + star[i][1];
            for (var j=0; j<shadow_amount-1; j++) {
                // var vector = ham_childs[0].children[j].position - ham_childs[0].children[j+1].position;
                var vector = new paper.Point(
                    ham_childs[i].children[j].position.x - ham_childs[0].children[j+1].position.x - star[i][0],
                    ham_childs[i].children[j].position.y - ham_childs[0].children[j+1].position.y - star[i][1]
                )
                vector.length = shadow_length;
                //ham_childs[0].children[j+1].position = ham_childs[0].children[j].position - vector;
                ham_childs[i].children[j+1].position = new paper.Point(
                    ham_childs[i].children[j].position.x - vector.x,
                    ham_childs[i].children[j].position.y - vector.y
                );
            }
            //break
        }
    } 
    paper.view.onFrame = function(event) {
    }
    paper.view.onResize = function(event) {
        background.fillColor.hue += 5;
    }
    // Draw the view now:
    paper.view.draw();
}
