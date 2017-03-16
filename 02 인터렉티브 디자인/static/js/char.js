/*/ Create a circle shaped path with its center at the center
// of the view and a radius of 30:
var path = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'black'
});

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}
*/
// Only executed our code once the DOM is ready.
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

    var stomach = new paper.Shape.Ellipse({
        center: [center_x, center_y+225],
        radius: [160, 180],
        //fillColor: '#b54a03'
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
        topLeft: [center_x-125, center_y+220],
        bottomRight: [center_x-75, center_y+245],
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
        topLeft: [center_x+125, center_y+220],
        bottomRight: [center_x+75, center_y+245],
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

    var almond_lines = [];

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
        
        almond_lines[i] = new paper.Path({
            segments: [first_segment, second_segment],
            strokeColor: 'black',
            strokeWidth: 2-parseInt(i/2)*0.3,
            fillColor: new paper.Color(0.66+(i*0.05), 0.23+(i*0.05), 0+(i*0.05))
        });
    }


    // Draw the view now:
    paper.view.draw();
}
